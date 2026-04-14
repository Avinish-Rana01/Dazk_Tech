import { motion } from 'framer-motion';

export default function StickyCta() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      className="md:hidden fixed bottom-6 left-6 right-6 z-50"
    >
      <button className="w-full primary-cta py-4 rounded-xl font-bold text-on-primary shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(13,110,253,0.3)] active:scale-95">Get Free Audit</button>
    </motion.div>
  );
}
