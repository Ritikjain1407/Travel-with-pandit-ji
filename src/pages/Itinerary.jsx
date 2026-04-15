import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItineraryHeader from '../components/ItineraryHeader';
import Timeline from '../components/Timeline';
import HotelModal from '../components/HotelModal';
import { packagesData } from '../data/packages';

const Itinerary = () => {
  const [searchParams] = useSearchParams();
  const destId = searchParams.get('dest') || 'bali';
  const activePackage = packagesData[destId] || packagesData['bali'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [destId]);

  return (
    <div className="flex flex-col min-h-screen">
      <ItineraryHeader pkg={activePackage} />
      <Timeline pkg={activePackage} />
      <HotelModal pkg={activePackage} />
      
      {/* Contact Banner for the current package */}
      <section className="bg-primary py-8 text-white text-center">
         <p className="font-medium">
           Have questions about this {activePackage.location} itinerary? Contact the experts: 
           <span className="font-bold ml-2">{activePackage.contactPhone}</span>
         </p>
      </section>
    </div>
  );
};

export default Itinerary;
