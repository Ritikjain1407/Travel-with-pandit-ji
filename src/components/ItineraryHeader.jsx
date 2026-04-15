import { motion } from 'framer-motion';
import { Map, Calendar, Users } from 'lucide-react';

const ItineraryHeader = ({ pkg }) => {
  if (!pkg) return null;

  return (
    <div className="relative pt-32 pb-20 bg-slate-900 border-b-4 border-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src={pkg.bgImage} 
          alt={pkg.location} 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          key={pkg.id} // forces re-render animation when pkg changes
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Immersive {pkg.duration.split(' ')[0]}-Night Journey</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">{pkg.title}</h1>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2 glassmorphism px-6 py-3 rounded-full">
              <Map className="text-primary" size={20} />
              <span>Destination: {pkg.location.split(',')[0]}</span>
            </div>
            <div className="flex items-center gap-2 glassmorphism px-6 py-3 rounded-full">
              <Calendar className="text-primary" size={20} />
              <span>{pkg.date}</span>
            </div>
            <div className="flex items-center gap-2 glassmorphism px-6 py-3 rounded-full">
              <Users className="text-primary" size={20} />
              <span>{pkg.pax}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ItineraryHeader;
