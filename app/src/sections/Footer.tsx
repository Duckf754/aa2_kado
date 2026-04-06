import { Gift, Heart, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  const whatsappNumber = '6281234567890';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Pesan Kado Spesial?
            </h2>
            <p className="text-pink-100 mb-6 max-w-xl mx-auto">
              Hubungi kami sekarang via WhatsApp untuk pemesanan cepat dan mudah
            </p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo AA2 KADO, saya ingin order')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Order Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AA2 KADO</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Kado & Buket Lengkap di Banjarmasin. Menyediakan berbagai kado, 
              buket bunga, snack tower, dan hampers untuk berbagai acara spesial.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#produk" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  Produk
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-gray-500">Alamat:</span>
                <span className="text-gray-400">Banjarmasin, Kalimantan Selatan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500">Jam:</span>
                <span className="text-gray-400">Setiap Hari 07.00 - 22.15</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500">WhatsApp:</span>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  {whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-500">
            <span>© {currentYear} AA2 KADO. Made with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>in Banjarmasin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
