import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0 bg-[url('https://picsum.photos/seed/hero/2000/1000')] bg-cover bg-center"
      />
      
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-slate-900/90" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Premium Travel Experience</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Unlock Your Soul's Journey <br />
            <span className="text-primary italic">with Pandit Ji</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Immersive, luxurious, and deeply spiritual travel experiences tailored for the discerning explorer.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all"
            >
              Start Your Journey
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glassmorphism text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Explore Destinations
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute bottom-10 z-20 hidden md:block"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
