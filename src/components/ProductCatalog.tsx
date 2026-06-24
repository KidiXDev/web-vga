import {
  ArrowRight,
  Check,
  Heart,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
  Trash2
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { PRODUCTS } from '../data';
import type { Product } from '../types';

interface ProductCatalogProps {
  onAddToQuoteRequest: (products: Product[]) => void;
}

export default function ProductCatalog({
  onAddToQuoteRequest
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quoteCart, setQuoteCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showSuccessToast, setShowSuccessToast] = useState<string | null>(null);

  const categories = [
    { value: 'all', label: 'All Components' },
    { value: 'gpu', label: 'GPUs' },
    { value: 'cpu', label: 'CPUs' },
    { value: 'motherboard', label: 'Motherboards' },
    { value: 'ram', label: 'RAM' },
    { value: 'psu', label: 'Power Supplies' },
    { value: 'case', label: 'Cases' }
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const addToQuoteCart = (product: Product) => {
    if (quoteCart.some((item) => item.id === product.id)) {
      setShowSuccessToast(`"${product.name}" is already in your estimate.`);
      setTimeout(() => setShowSuccessToast(null), 2000);
      return;
    }
    setQuoteCart([...quoteCart, product]);
    setShowSuccessToast(`Added ${product.name} to custom quote!`);
    setTimeout(() => setShowSuccessToast(null), 2500);
  };

  const removeFromQuoteCart = (id: string) => {
    setQuoteCart(quoteCart.filter((item) => item.id !== id));
  };

  const cartTotal = quoteCart.reduce((acc, curr) => acc + curr.price, 0);

  const handleRequestAssemblyQuote = () => {
    onAddToQuoteRequest(quoteCart);
    // Smooth scroll to contact form
    const contactSec = document.querySelector('#contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="products"
      className="py-24 bg-dark-bg border-b border-white/5 relative overflow-hidden"
    >
      {/* Background glow overlay */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase block mb-3">
            HARDWARE STORE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Elite Gaming Components <br />
            <span className="text-brand-blue font-extrabold">
              In Stock & Ready for Assembly
            </span>
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 font-sans text-base sm:text-lg">
            We source rare and premium flagship parts. Purchase individually or
            have our BGA-certified tech team assemble, thermal-optimize, and
            stress-test your system for you.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-brand-blue border-transparent text-neutral-950 font-bold'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-brand-blue/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid and Build Quote Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Product Cards (Left - 8/12 cols or full if cart empty) */}
          <div
            className={`${quoteCart.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} grid grid-cols-1 md:grid-cols-2 ${quoteCart.length > 0 ? 'xl:grid-cols-2' : 'xl:grid-cols-3'} gap-6 transition-all duration-500`}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layoutId={`product-${product.id}`}
                className="group relative bg-dark-card rounded-2xl border border-white/5 overflow-hidden shadow-2xl flex flex-col justify-between"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image and Badges */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-black/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    referrerPolicy="no-referrer"
                  />

                  {/* Floating Action Icons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="p-2 rounded-full bg-black/60 hover:bg-red-500/25 border border-white/10 text-white transition-colors duration-200 cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`}
                      />
                    </button>
                  </div>

                  {product.isPopular && (
                    <div className="absolute top-3 left-3 bg-white/10 px-2.5 py-0.5 rounded font-mono text-[9px] font-bold text-white uppercase tracking-widest border border-white/10">
                      Enthusiast Choice
                    </div>
                  )}

                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
                      <span className="font-mono text-xs font-bold text-red-400 border border-red-500/30 px-3 py-1 rounded bg-red-500/10 tracking-widest uppercase">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    {/* Rating and category */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[9px] font-bold text-brand-blue tracking-widest uppercase bg-brand-blue/10 border border-brand-blue/20 px-2 py-0.5 rounded">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        <span className="font-mono text-xs text-gray-300">
                          {product.rating}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-base text-white group-hover:text-brand-blue transition-colors duration-300 leading-snug mb-3">
                      {product.name}
                    </h3>

                    {/* Specifications List */}
                    <ul className="flex flex-col gap-1 mb-6 border-t border-white/5 pt-3">
                      {product.specs.slice(0, 3).map((spec, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-400 flex items-center gap-1.5 font-sans leading-relaxed"
                        >
                          <span className="w-1 h-1 bg-brand-blue/60 rounded-full" />
                          <span className="line-clamp-1">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action row */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex flex-col">
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                      <span className="font-display font-extrabold text-lg text-white">
                        ${product.price}
                      </span>
                    </div>

                    {product.inStock && (
                      <button
                        onClick={() => addToQuoteCart(product)}
                        className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-dark-bg border border-white/10 hover:border-transparent font-mono text-xs font-bold text-gray-300 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        ADD TO BUILD
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Custom Build/Quote Cart Sidebar (4/12 cols) */}
          <AnimatePresence>
            {quoteCart.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="lg:col-span-4 rounded-2xl glass-panel border border-brand-blue/30 p-6 sticky top-24 shadow-glow flex flex-col justify-between"
              >
                <div>
                  {/* Sidebar Title */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-brand-blue" />
                      <h3 className="font-display font-bold text-lg text-white">
                        Custom Build Estimate
                      </h3>
                    </div>
                    <span className="font-mono text-xs bg-brand-blue/20 text-brand-blue px-2.5 py-0.5 rounded-full font-bold">
                      {quoteCart.length} PARTS
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mb-4 font-sans leading-relaxed">
                    Selected items for your dream computer. Add or remove
                    components. Submit to request free hardware assembly or
                    specific repair diagnostics.
                  </p>

                  {/* Selected Items Scrollable List */}
                  <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto mb-6 pr-1">
                    {quoteCart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded-lg"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex flex-col text-left">
                            <span className="font-display font-bold text-xs text-white line-clamp-1 max-w-[150px]">
                              {item.name}
                            </span>
                            <span className="font-mono text-[9px] text-brand-blue uppercase">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-gray-300">
                            ${item.price}
                          </span>
                          <button
                            onClick={() => removeFromQuoteCart(item.id)}
                            className="p-1 rounded bg-black/40 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtotals and Checkout Simulation */}
                <div className="border-t border-white/10 pt-4">
                  {/* Assembly charge promo */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg mb-4 text-[11px] text-emerald-400 font-sans leading-relaxed">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Promo: Free pro assembly with 3+ components!</span>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-gray-400">
                      ESTIMATED TOTAL:
                    </span>
                    <span className="font-display font-extrabold text-2xl text-brand-blue">
                      ${cartTotal}
                    </span>
                  </div>

                  <button
                    onClick={handleRequestAssemblyQuote}
                    className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue/90 text-neutral-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    Request Custom Assembly Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setQuoteCart([])}
                    className="w-full py-2.5 mt-2 bg-transparent text-gray-400 hover:text-white font-mono text-2xs uppercase tracking-wider transition-colors text-center cursor-pointer"
                  >
                    Clear All Components
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating alert notification */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-50 px-6 py-3 rounded-xl bg-dark-card border border-brand-blue text-xs font-mono text-white flex items-center gap-2 shadow-2xl"
          >
            <div className="p-1 bg-brand-blue/20 rounded-full">
              <Check className="w-3.5 h-3.5 text-brand-blue" />
            </div>
            <span>{showSuccessToast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
