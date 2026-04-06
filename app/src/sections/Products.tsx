import { useState } from 'react';
import { Gift, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Buket Bunga Mawar',
    category: 'Buket Bunga',
    price: 'Rp 150.000',
    description: 'Buket mawar segar dengan wrapping elegan. Tersedia dalam berbagai warna: merah, pink, putih, dan peach.',
    image: '/images/buket-bunga.jpg'
  },
  {
    id: 2,
    name: 'Snack Tower 5 Tingkat',
    category: 'Snack Tower',
    price: 'Rp 250.000',
    description: 'Tower snack premium dengan 5 tingkat berisi aneka snack import dan lokal favorit.',
    image: '/images/snack-tower.jpg'
  },
  {
    id: 3,
    name: 'Hampers Premium',
    category: 'Hampers',
    price: 'Rp 350.000',
    description: 'Hampers eksklusif berisi wine, cokelat premium, cookies, dan madu dalam keranjang rotan.',
    image: '/images/hampers.jpg'
  },
  {
    id: 4,
    name: 'Money Bouquet',
    category: 'Buket Uang',
    price: 'Rp 200.000',
    description: 'Buket kreatif dengan uang kertas yang diatur seperti bunga. Bisa custom nominal.',
    image: '/images/money-bouquet.jpg'
  },
  {
    id: 5,
    name: 'Teddy & Flower Set',
    category: 'Gift Set',
    price: 'Rp 180.000',
    description: 'Kombinasi boneka teddy bear lucu dengan buket bunga mawar yang romantis.',
    image: '/images/teddy-bouquet.jpg'
  },
  {
    id: 6,
    name: 'Graduation Bouquet',
    category: 'Buket Wisuda',
    price: 'Rp 220.000',
    description: 'Buket spesial untuk perayaan wisuda dengan bunga segar dan dekorasi kelulusan.',
    image: '/images/graduation-bouquet.jpg'
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const whatsappNumber = '6281234567890';

  const handleOrder = (product: Product) => {
    const message = `Halo AA2 KADO, saya ingin order ${product.name} (${product.price}). Apakah ready?`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="produk" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full mb-6">
            <Gift className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-700">Katalog Produk</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pilihan Kado & Buket <span className="text-gradient">Terbaik</span>
          </h2>
          <p className="text-gray-600">
            Berbagai pilihan kado, buket, dan hampers berkualitas untuk momen spesial Anda
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 border border-pink-50"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-pink-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-pink-600 rounded-full">
                    {product.category}
                  </span>
                </div>
                <button 
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-50"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Heart className="w-4 h-4 text-pink-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800 mb-1 group-hover:text-pink-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-gradient mb-3">
                  {product.price}
                </p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    className="flex-1 border-pink-200 text-pink-600 hover:bg-pink-50"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Detail
                  </Button>
                  <Button 
                    className="flex-1 bg-pink-500 hover:bg-pink-600 text-white"
                    onClick={() => handleOrder(product)}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo AA2 KADO, saya ingin lihat katalog lengkapnya')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              Lihat Katalog Lengkap
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-md sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">
              {selectedProduct?.name}
            </DialogTitle>
            <DialogDescription className="text-pink-600 font-semibold text-lg">
              {selectedProduct?.price}
            </DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <div className="mt-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full mb-3">
                {selectedProduct.category}
              </span>
              <p className="text-gray-600 mb-6">
                {selectedProduct.description}
              </p>
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={() => handleOrder(selectedProduct)}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Order via WhatsApp
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
