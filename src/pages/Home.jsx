import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedDestination from '../components/FeaturedDestination';
import Stats from '../components/Stats';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedDestination />
      <Stats />
    </div>
  );
};

export default Home;
