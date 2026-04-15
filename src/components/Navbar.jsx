import { Link, useLocation } from 'react-router-dom';
import { Palmtree, Map, CalendarCheck } from 'lucide-react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/', icon: Palmtree },
    { name: 'Itinerary', path: '/itinerary', icon: Map },
    { name: 'Booking', path: '/booking', icon: CalendarCheck },
  ];

  return (
    <nav className={clsx(
      'fixed w-full z-50 transition-all duration-300',
      scrolled ? 'glassmorphism shadow-md py-3' : 'bg-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-serif font-bold text-xl">
              P
            </div>
            <span className={clsx(
              'font-serif font-bold text-2xl tracking-wide transition-colors duration-300',
              scrolled ? 'text-secondary' : 'text-slate-800'
            )}>
              Pandit Ji
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    'flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : (scrolled ? 'text-slate-700' : 'text-slate-800')
                  )}
                >
                  <Icon size={18} />
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link to="/booking" className="hidden md:inline-flex bg-primary hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 shadow-lg shadow-primary/30">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
