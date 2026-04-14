import { useState } from 'react';
import { FadeIn } from './Motion';

const stories = [
  {
    client: 'Kolab by Klickr',
    tag: 'MarTech / Influencer Platform',
    tagColor: 'text-primary',
    description: 'Kolab by Klickr is a matchmaking platform designed to connect brands and influencers for collaborations using AI-powered matching.',
    impact: '85% reduction in monthly AWS costs',
    painPoints: [
      'Escalating AWS infrastructure costs with inefficient resource usage.',
      'Lacked a scalable backend foundation to support their growing platform.',
      'Needed a reliable tech partner to design and implement the backend stack.',
    ],
    whatWeDid: [
      'Conducted a comprehensive AWS infrastructure optimization.',
      'Set up a complete backend tech stack, including database architecture and API development.',
      'Adopted cost-efficient cloud practices without compromising performance.',
    ],
  },
  {
    client: 'Rize.Farm',
    tag: 'Agri-Tech / Sustainability',
    tagColor: 'text-secondary',
    description: 'Rize.Farm is an Agri-tech startup focused on decarbonizing rice cultivation in Asia, reducing greenhouse gas emissions through sustainable practices.',
    impact: '80% reduction in AWS costs through strategic optimization',
    painPoints: [
      'Backend application was slow, unstable, and unable to scale with growing demand.',
      'Inefficient AWS infrastructure driving rising monthly cloud costs.',
      'Business growth constrained by performance bottlenecks and unpredictable system behavior.',
    ],
    whatWeDid: [
      'Optimized the backend application architecture for scalability and performance.',
      'Redesigned AWS infrastructure to eliminate inefficiencies and adopt cost-effective resource usage.',
      'Implemented monitoring and automated scaling solutions for operational stability.',
    ],
  },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const story = stories[current];

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <FadeIn>
          <h2 className="text-4xl font-bold font-headline mb-12 text-center">Client Success Stories</h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          {/* Card */}
          <div className="bg-surface-container-low rounded-3xl border border-white/5 overflow-hidden">
            {/* Header strip */}
            <div className="px-8 pt-8 pb-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className={`text-xs font-bold tracking-widest uppercase ${story.tagColor}`}>{story.tag}</span>
                <h3 className="text-2xl font-bold font-headline mt-1">{story.client}</h3>
              </div>
              {/* Impact badge */}
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 self-start sm:self-auto">
                <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>trending_down</span>
                <span className="text-primary text-xs font-bold">{story.impact}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: description */}
              <div className="flex flex-col gap-6">
                <p className="text-on-surface-variant text-sm leading-relaxed italic">{story.description}</p>

                {/* Pain Points */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-error text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>mood_bad</span>
                    <span className="font-headline font-bold text-sm uppercase tracking-wider text-on-surface">Pain Points</span>
                  </div>
                  <ul className="space-y-2">
                    {story.painPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-on-surface-variant">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-error/60 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: What We Did */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
                  <span className="font-headline font-bold text-sm uppercase tracking-wider text-on-surface">What We Did</span>
                </div>
                <ul className="space-y-3">
                  {story.whatWeDid.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + stories.length) % stories.length)}
              className="w-10 h-10 rounded-full border border-white/10 bg-surface-container flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-xl">chevron_left</span>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-primary' : 'w-2 bg-outline'}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((c) => (c + 1) % stories.length)}
              className="w-10 h-10 rounded-full border border-white/10 bg-surface-container flex items-center justify-center hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-xl">chevron_right</span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
