import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2";
import { RDSClient, DescribeDBInstancesCommand } from "@aws-sdk/client-rds";
import { ElastiCacheClient, DescribeCacheClustersCommand } from "@aws-sdk/client-elasticache";
import { CloudWatchClient, GetMetricStatisticsCommand } from "@aws-sdk/client-cloudwatch";

/**
 * Fetches average CPU over the last 7 days for a given resource.
 */
async function getAverageCPU(cwClient, namespace, dimensionName, dimensionValue) {
  try {
    const endTime = new Date();
    const startTime = new Date(endTime.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days ago

    const response = await cwClient.send(new GetMetricStatisticsCommand({
      Namespace: namespace,
      MetricName: 'CPUUtilization',
      Dimensions: [{ Name: dimensionName, Value: dimensionValue }],
      StartTime: startTime,
      EndTime: endTime,
      Period: 24 * 60 * 60, // 1 day period blocks
      Statistics: ['Average']
    }));

    if (response.Datapoints && response.Datapoints.length > 0) {
      const sum = response.Datapoints.reduce((acc, dp) => acc + dp.Average, 0);
      return sum / response.Datapoints.length;
    }
    return 0; // No data points fallback
  } catch (err) {
    console.warn(`Could not get metrics for ${dimensionValue}:`, err.message);
    return 0; 
  }
}

export async function analyzeAWS(accessKeyId, secretAccessKey, region) {
  // Setup AWS Clients
  const credentials = { accessKeyId, secretAccessKey };
  const clientConfig = { credentials, region };

  const ec2Client = new EC2Client(clientConfig);
  const rdsClient = new RDSClient(clientConfig);
  const ecClient = new ElastiCacheClient(clientConfig);
  const cwClient = new CloudWatchClient(clientConfig);

  const report = {
    ec2: [],
    rds: [],
    redis: [],
    timestamp: new Date().toISOString(),
    region: region,
    totalSavings: 0,
    savingsPercentage: 0
  };

  let underutilizedCount = 0;
  let totalResources = 0;

  // 1. Fetch EC2 Instances
  try {
    const ec2Data = await ec2Client.send(new DescribeInstancesCommand({}));
    
    for (const reservation of ec2Data.Reservations || []) {
      for (const instance of reservation.Instances || []) {
        const id = instance.InstanceId;
        totalResources++;
        
        const cpu = await getAverageCPU(cwClient, 'AWS/EC2', 'InstanceId', id);
        const underutilized = cpu < 20;
        if (underutilized) underutilizedCount++;

        report.ec2.push({
          id: id,
          cpu_avg: parseFloat(cpu.toFixed(2)),
          underutilized: underutilized,
          overutilized: cpu > 80
        });
      }
    }
  } catch (err) {
    console.error("EC2 Analysis Error:", err);
  }

  // 2. Fetch RDS Instances
  try {
    const rdsData = await rdsClient.send(new DescribeDBInstancesCommand({}));
    
    for (const db of rdsData.DBInstances || []) {
      const id = db.DBInstanceIdentifier;
      totalResources++;
      
      const cpu = await getAverageCPU(cwClient, 'AWS/RDS', 'DBInstanceIdentifier', id);
      const underutilized = cpu < 20;
      if (underutilized) underutilizedCount++;

      report.rds.push({
        id: id,
        cpu_avg: parseFloat(cpu.toFixed(2)),
        underutilized: underutilized,
        overutilized: cpu > 80
      });
    }
  } catch (err) {
    console.error("RDS Analysis Error:", err);
  }

  // 3. Fetch ElastiCache (Redis) Clusters
  try {
    const ecData = await ecClient.send(new DescribeCacheClustersCommand({ ShowCacheNodeInfo: true }));
    
    for (const cluster of ecData.CacheClusters || []) {
      const id = cluster.CacheClusterId;
      totalResources++;
      
      const cpu = await getAverageCPU(cwClient, 'AWS/ElastiCache', 'CacheClusterId', id);
      const underutilized = cpu < 20;
      if (underutilized) underutilizedCount++;

      report.redis.push({
        id: id,
        cpu_avg: parseFloat(cpu.toFixed(2)),
        underutilized: underutilized,
        overutilized: cpu > 80
      });
    }
  } catch (err) {
    console.error("ElastiCache Analysis Error:", err);
  }

  // Dummy logic calculation for total saving metrics estimation
  if (totalResources > 0) {
    report.savingsPercentage = Math.round((underutilizedCount / totalResources) * 40); // Estimate max 40%
    report.totalSavings = underutilizedCount * 230; // Rough generic math for UI
  }

  return report;
}
