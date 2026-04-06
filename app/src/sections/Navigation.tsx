import { useState, useEffect } from 'react';
import { Gift, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappNumber = '6281234567890';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#' },
    { label: 'Produk', href: '#produk' },
    { label: 'Info', href: '#info' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-soft py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-pink-500' : 'bg-white/90'
              }`}>
                <Gift className={`w-4 h-4 ${isScrolled ? 'text-white' : 'text-pink-500'}`} />
              </div>
              <span className={`font-bold text-lg transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}>
                AA2 KADO
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-pink-500 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo AA2 KADO, saya ingin order')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Order
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-gray-800 py-3 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo AA2 KADO, saya ingin order')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
