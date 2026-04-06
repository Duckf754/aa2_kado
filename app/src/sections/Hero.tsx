import { Gift, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const whatsappNumber = '6281234567890'; // Ganti dengan nomor WhatsApp yang sebenarnya
  const whatsappMessage = 'Halo AA2 KADO, saya ingin order. Bisa bantu saya?';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100/40 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft mb-8">
            <Gift className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-700">Kado & Buket Lengkap</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">AA2 KADO</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
            Kado & Buket Lengkap di Banjarmasin
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Menyediakan berbagai kado, buket bunga, snack tower, dan hampers untuk berbagai acara spesial Anda. 
            Pilihan terlengkap dengan harga terbaik!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Order via WhatsApp
              </Button>
            </a>
            <a href="#produk" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                <Gift className="w-5 h-5 mr-2" />
                Lihat Produk
              </Button>
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 px-5 py-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-pink-500" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Jam Operasional</p>
                <p className="text-sm font-semibold text-gray-800">Setiap Hari 07.00 - 22.15</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-pink-500" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Lokasi</p>
                <p className="text-sm font-semibold text-gray-800">Banjarmasin</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-pink-500" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Kontak</p>
                <p className="text-sm font-semibold text-gray-800">WhatsApp Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-pink-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
