import { motion } from 'framer-motion';

const Timeline = ({ pkg }) => {
  if (!pkg) return null;

  return (
    <div className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>
        <motion.div 
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2 rounded-full hidden sm:block"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          key={`bar-${pkg.id}`}
        ></motion.div>

        <div className="space-y-16">
          {pkg.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={`${pkg.id}-${item.day}`} className="relative flex flex-col md:flex-row items-center gap-8 justify-between w-full">
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary transform -translate-x-[14px] md:-translate-x-1/2 z-10 shadow-lg hidden sm:block"></div>
                
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`w-full sm:pl-12 md:pl-0 md:w-5/12 flex flex-col ${isEven ? 'md:text-right' : 'md:order-last md:text-left'}`}
                >
                  <span className="text-secondary font-bold mb-2">{item.day}</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">{item.title}</h3>
                  <div className="text-primary font-medium text-sm bg-primary/10 inline-block px-3 py-1 rounded-md mb-4 self-start md:self-auto flex-wrap">
                    {item.highlights}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full sm:pl-12 md:pl-0 md:w-5/12 ${isEven ? 'md:order-last' : ''}`}
                >
                  <div className="overflow-hidden rounded-2xl shadow-xl aspect-video group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
