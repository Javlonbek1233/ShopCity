import { useState } from "react";
import { motion } from "motion/react";
import { Search, Filter, MapPin, Star, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const STORES = [
  { id: "1", name: "Gucci", category: "Fashion", floor: 1, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", description: "Italian luxury fashion house." },
  { id: "2", name: "Apple", category: "Electronics", floor: 2, image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=400&fit=crop", description: "Think different." },
  { id: "3", name: "Rolex", category: "Luxury Fashion", floor: 1, image: "https://images.unsplash.com/photo-1526045612212-70caf35c11bc?w=400&h=400&fit=crop", description: "Swiss luxury watchmaker." },
  { id: "4", name: "Zara", category: "Fashion", floor: 2, image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=400&fit=crop", description: "Fast fashion for all." },
  { id: "5", name: "Nobu", category: "Dining", floor: 3, image: "https://images.unsplash.com/photo-1579027060377-62283a0058b8?w=400&h=400&fit=crop", description: "World class sushi." },
  { id: "6", name: "Dyson", category: "Electronics", floor: 2, image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop", description: "Engineered technology." },
];

const CATEGORIES = ["All", "Fashion", "Dining", "Electronics", "Beauty", "Lifestyle"];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredStores = STORES.filter(s => 
    (activeCategory === "All" || s.category === activeCategory) &&
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:p-12 space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-serif">Discover Boutique Brands</h1>
        <p className="text-white/40 max-w-xl">Browse our curated selection of global designers and innovative dining concepts.</p>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 sticky top-24 z-30 py-4 bg-luxury-black/80 backdrop-blur-md">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
          <input 
            type="text" 
            placeholder="Filter stores..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:border-gold/50 outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full border text-sm transition-all whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-gold border-gold text-black font-semibold" 
                  : "border-white/10 text-white/60 hover:border-white/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {filteredStores.map((store, i) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="group luxury-card"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img src={store.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-gold text-white">
                Floor {store.floor}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">{store.name}</h3>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{store.category}</p>
                </div>
                <div className="flex gap-1 text-gold">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                {store.description}
              </p>
              <button className="w-full py-3 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all text-sm group-hover:border-gold/30">
                View Details
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
