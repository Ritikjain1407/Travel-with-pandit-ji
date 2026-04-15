import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packagesData } from '../data/packages';

const FeaturedDestination = () => {
  const packages = Object.values(packagesData);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Featured Luxury Packages</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Explore Our Top Escapes</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={pkg.image} 
                  alt={pkg.location}
                  className="w-full h-full object-cover origin-center"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row justify-between items-end gap-6 glassmorphism border-0 border-t border-white/20 z-10 m-4 md:m-8 rounded-2xl">
                <div className="text-white w-full md:w-2/3">
                  <div className="flex gap-4 mb-3 text-sm font-medium">
                    <span className="flex items-center gap-1 bg-secondary/80 px-3 py-1 rounded-full"><Clock size={14} /> {pkg.duration}</span>
                    <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full"><MapPin size={14} /> {pkg.location}</span>
                  </div>
                  <h4 className="text-3xl font-serif font-bold mb-2">{pkg.category}</h4>
                  <p className="text-slate-200 line-clamp-2 md:line-clamp-none">
                    {pkg.description}
                  </p>
                </div>
                
                <div className="w-full md:w-auto flex-shrink-0">
                  <Link to={`/itinerary?dest=${pkg.id}`}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full md:w-auto bg-primary hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/30"
                    >
                      View Itinerary <ArrowRight size={20} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestination;
