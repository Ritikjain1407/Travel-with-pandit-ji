import { motion } from 'framer-motion';
import { Award, Users, Globe2, HeartHandshake } from 'lucide-react';

const Stats = () => {
  const statsList = [
    { id: 1, icon: Award, label: 'Years of Service', value: '17+' },
    { id: 2, icon: Users, label: 'Happy Travelers', value: '50k+' },
    { id: 3, icon: Globe2, label: 'Destinations', value: '100+' },
    { id: 4, icon: HeartHandshake, label: 'Trust Rating', value: '4.9/5' },
  ];

  return (
    <section className="py-20 bg-secondary relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {statsList.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:rotate-12 group-hover:bg-primary/20 backdrop-blur-sm border border-white/10 shadow-xl">
                  <Icon size={40} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-300 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
