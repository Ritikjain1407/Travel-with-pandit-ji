import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import PricingTable from '../components/PricingTable';
import InclusionsExclusions from '../components/InclusionsExclusions';
import { packagesData } from '../data/packages';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const destId = searchParams.get('dest') || 'bali';
  const activePackage = packagesData[destId] || packagesData['bali'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [destId]);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           key={`booking-header-${activePackage.id}`}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{activePackage.location} Package</span>
          <h1 className="text-5xl font-serif font-bold mb-4 text-slate-900">Start Your Adventure</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Ready for your {activePackage.location.split(',')[0]} trip? Choose your preferred package and let us handle all the details.
          </p>
        </motion.div>
      </div>

      <PricingTable pkg={activePackage} />
      <InclusionsExclusions pkg={activePackage} />
      
      {/* Contact Banner */}
      <section className="py-20 bg-slate-900 text-white text-center px-4 mt-auto">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif font-bold mb-6">Need a custom itinerary?</h3>
          <p className="text-slate-300 mb-8">
            Our travel experts can tailor this {activePackage.location.split(',')[0]} experience to match your exact preferences, from celebrating a honeymoon to organizing a private retreat.
          </p>
          <a 
            href={`https://wa.me/${activePackage.contactPhone.replace(/[\s+]/g, '')}`} 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-primary hover:bg-yellow-600 px-8 py-4 rounded-full font-bold transition-colors shadow-lg shadow-primary/30"
          >
            Chat With Us on WhatsApp
          </a>
          <p className="mt-6 text-slate-400">
            Or email us at: <a href={`mailto:${activePackage.contactEmail}`} className="text-white hover:text-primary transition-colors">{activePackage.contactEmail}</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Booking;
