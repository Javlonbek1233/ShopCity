import { motion } from "motion/react";
import { Sparkles, ArrowRight, TrendingUp, MapPin, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURED_STORES = [
  { id: "1", name: "Gucci", logo: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop", category: "Luxury Fashion", floor: "Floor 1" },
  { id: "2", name: "Apple", logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=300&fit=crop", category: "Electronics", floor: "Floor 2" },
  { id: "3", name: "Omega", logo: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=300&fit=crop", category: "Timepieces", floor: "Floor 1" },
  { id: "4", name: "Prada", logo: "https://images.unsplash.com/photo-1539109132384-361555c18602?w=300&h=300&fit=crop", category: "Luxury Fashion", floor: "Floor 1" },
];

const DEALS = [
  { id: "1", store: "Sephora", discount: "20% OFF", item: "Beauty Essentials", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=250&fit=crop" },
  { id: "2", store: "Nike", discount: "30% OFF", item: "Spring Collection", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=250&fit=crop" },
];

export default function HomePage() {
  return (
    <div className="p-6 md:p-12 space-y-12">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-3xl overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600&h=800&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center max-w-2xl gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-gold uppercase tracking-[0.3em] text-xs font-bold"
          >
            <Sparkles size={14} />
            Exclusive Experience
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-[1.1]"
          >
            Redefining <br />
            <span className="italic text-gold">ShopCity</span> Luxury.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-sm"
          >
            Discover over 500 premium brands, world-class dining, and immersive entertainment.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 mt-4"
          >
            <Link to="/stores" className="gold-gradient px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              Explore Stores
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats / Quick Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="luxury-card p-6 flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Current Traffic</p>
            <p className="text-xl font-medium">Moderate <span className="text-sm text-green-500 ml-2">●</span></p>
          </div>
        </div>
        <div className="luxury-card p-6 flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Mall Status</p>
            <p className="text-xl font-medium">All Open</p>
          </div>
        </div>
        <div className="luxury-card p-6 flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold">
            <Star size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">New Arrivals</p>
            <p className="text-xl font-medium">12 Stores</p>
          </div>
        </div>
      </section>

      {/* Trending Deals */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-serif">Limited Time Offers</h2>
          <button className="text-gold text-sm hover:underline">View All Deals</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DEALS.map(deal => (
            <motion.div 
              key={deal.id}
              whileHover={{ y: -5 }}
              className="relative h-[250px] rounded-3xl overflow-hidden border border-white/5"
            >
              <img src={deal.image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">{deal.store}</p>
                <h3 className="text-2xl font-serif mb-2">{deal.item}</h3>
                <div className="inline-block bg-gold text-black font-bold px-4 py-1.5 rounded-full text-lg">
                  {deal.discount}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Stores */}
      <section className="space-y-6 pb-24 md:pb-0">
        <h2 className="text-2xl font-serif">Featured Concept Stores</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_STORES.map((store, i) => (
            <motion.div 
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="luxury-card group"
            >
              <div className="relative aspect-square overflow-hidden border-b border-white/5">
                <img src={store.logo} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 h-8 w-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star size={14} className="text-gold fill-gold" />
                </div>
              </div>
              <div className="p-4 flex justify-between items-start">
                <div>
                  <h3 className="font-medium group-hover:text-gold transition-colors">{store.name}</h3>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{store.category}</p>
                </div>
                <div className="flex items-center gap-1 text-white/20 text-[10px] font-mono">
                  <Clock size={10} />
                  10:00 - 22:00
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
