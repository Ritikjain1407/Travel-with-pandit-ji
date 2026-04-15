import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4 text-primary">Travel with Pandit Ji</h3>
            <p className="text-slate-400 max-w-sm">
              Unlock your soul's journey with premium, luxurious travel experiences crafted specifically for you.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="https://wa.me/917700041742" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
                <Phone size={20} className="text-primary" />
                +91 7700041742
              </a>
              <a href="mailto:contact@panditji.travel" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
                <Mail size={20} className="text-primary" />
                contact@panditji.travel
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">Subscribe to receive our latest luxury travel offers.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-primary w-full"
              />
              <button type="submit" className="bg-primary hover:bg-yellow-600 px-4 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Travel with Pandit Ji. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors text-xs font-bold">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors text-xs font-bold">
              FB
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors text-xs font-bold">
              TW
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
