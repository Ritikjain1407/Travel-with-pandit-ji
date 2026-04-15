import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Bed, Tv, Wifi, Coffee } from 'lucide-react';

const iconMap = { wifi: Wifi, tv: Tv, coffee: Coffee, bed: Bed };

const HotelModal = ({ pkg }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  if (!pkg) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Accommodation</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">Choose Your Stay Level</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center max-w-5xl mx-auto">
          {pkg.hotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              whileHover={{ y: -10 }}
              className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg border border-slate-100 cursor-pointer group"
              onClick={() => setSelectedHotel(hotel)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 glassmorphism px-3 py-1 rounded-full flex gap-1 items-center">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
              </div>
              <div className="p-8">
                <p className="text-secondary font-medium mb-1">{hotel.category}</p>
                <h4 className="text-2xl font-serif font-bold mb-3">{hotel.name}</h4>
                <p className="text-slate-600 line-clamp-2">{hotel.description}</p>
                <button className="mt-6 text-primary font-bold border-b-2 border-primary/30 hover:border-primary transition-colors">
                  View Room Options
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedHotel && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHotel(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-3xl z-50 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <div className="w-full md:w-1/2 h-48 md:h-auto relative">
                <img src={selectedHotel.image} alt={selectedHotel.name} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedHotel(null)}
                  className="absolute top-4 left-4 md:hidden bg-white/50 backdrop-blur-md p-2 rounded-full z-10"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 w-full md:w-1/2 relative bg-white overflow-y-auto">
                <button 
                  onClick={() => setSelectedHotel(null)}
                  className="absolute top-4 right-4 hidden md:block text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X size={24} />
                </button>
                
                <h4 className="text-2xl font-serif font-bold mb-2 pr-8">{selectedHotel.name}</h4>
                <div className="flex gap-1 mb-6">
                  {[...Array(selectedHotel.stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>

                <div className="space-y-6">
                  {selectedHotel.roomTypes.map((room, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="font-bold flex items-center gap-2 mb-1">
                        <Bed size={16} className="text-secondary" /> {room.name}
                      </h5>
                      <p className="text-sm text-slate-600">{room.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h6 className="font-bold text-sm mb-3 text-slate-500 uppercase tracking-wider">Amenities</h6>
                  <div className="flex flex-wrap gap-4">
                    {selectedHotel.amenities.map((item, i) => {
                      const Icon = iconMap[item];
                      return Icon ? (
                        <div key={i} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600" title={item}>
                          <Icon size={18} />
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HotelModal;
