import { Clock, MapPin, Phone, MessageCircle, Truck, Package, Sparkles } from 'lucide-react';

const Info = () => {
  const whatsappNumber = '6281234567890';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const features = [
    {
      icon: Truck,
      title: 'Delivery Cepat',
      description: 'Pengantaran ke seluruh area Banjarmasin'
    },
    {
      icon: Package,
      title: 'Custom Order',
      description: 'Bisa request sesuai kebutuhan Anda'
    },
    {
      icon: Sparkles,
      title: 'Kualitas Terjamin',
      description: 'Produk berkualitas dengan harga terbaik'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft text-center"
            >
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Informasi <span className="text-gradient">Toko</span>
            </h2>
            <p className="text-gray-600">
              Kunjungi kami atau hubungi untuk pemesanan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Jam Operasional */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Jam Operasional
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Senin - Minggu</span>
                      <span className="font-medium text-gray-800">07.00 - 22.15</span>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-sm text-pink-600 font-medium">
                        Buka Setiap Hari!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lokasi */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Lokasi
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Banjarmasin, Kalimantan Selatan
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Banjarmasin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-pink-600 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Lihat di Google Maps
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Kontak */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-pink-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800 mb-3">
                    Hubungi Kami
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pesan sekarang via WhatsApp untuk respon cepat
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Chat WhatsApp
                    </a>
                    <a 
                      href={`tel:${whatsappNumber}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-pink-200 text-pink-600 hover:bg-pink-50 font-medium rounded-xl transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Telepon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
