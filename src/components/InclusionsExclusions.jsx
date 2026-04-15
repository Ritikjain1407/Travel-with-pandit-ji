import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const InclusionsExclusions = ({ pkg }) => {
  if (!pkg) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">What to Expect</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">Inclusions & Exclusions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Inclusions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50/50 rounded-3xl p-8 border border-green-100 shadow-lg"
          >
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-green-600 bg-green-100 p-2 rounded-lg"><CheckCircle2 size={24} /></span>
              What's Included
            </h4>
            <ul className="space-y-4 text-slate-700">
              {pkg.inclusions.map((item, i) => (
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Exclusions */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-50/50 rounded-3xl p-8 border border-red-100 shadow-lg"
          >
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-red-500 bg-red-100 p-2 rounded-lg"><XCircle size={24} /></span>
              What's Not Included
            </h4>
            <ul className="space-y-4 text-slate-700">
              {pkg.exclusions.map((item, i) => (
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-start gap-3"
                >
                  <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InclusionsExclusions;
