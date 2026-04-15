import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingTable = ({ pkg }) => {
  if (!pkg) return null;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Transparent Pricing</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">Select Your Experience</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch max-w-5xl mx-auto">
          {pkg.pricing.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`w-full ${pkg.pricing.length === 1 ? 'max-w-md' : 'md:w-1/2'} flex flex-col rounded-3xl overflow-hidden shadow-xl ${
                tier.popular 
                  ? 'bg-slate-900 text-white transform md:-translate-y-4 shadow-2xl shadow-slate-900/40 relative' 
                  : 'bg-white text-slate-900'
              }`}
            >
              {tier.popular && pkg.pricing.length > 1 && (
                <div className="bg-primary text-white text-center py-2 text-sm font-bold tracking-wider uppercase">
                  Most Popular Choice
                </div>
              )}
              
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-serif font-bold mb-2">{tier.name}</h4>
                <p className={`text-sm mb-8 ${tier.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                  {tier.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold tracking-tight">{tier.price}</span>
                  <span className={`block mt-2 text-sm ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tier.subtitle}
                  </span>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check size={20} className={`shrink-0 ${tier.popular ? 'text-primary' : 'text-secondary'}`} />
                        <span className="text-sm border-b border-transparent leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                    tier.popular 
                      ? 'bg-primary hover:bg-yellow-600 text-white shadow-primary/30' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 shadow-slate-200/50'
                  }`}
                >
                  Book This Package
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
