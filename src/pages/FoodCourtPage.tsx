import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  UtensilsCrossed, 
  Clock, 
  Users, 
  MapPin, 
  TrendingUp, 
  Star,
  ChevronRight,
  Info,
  QrCode
} from "lucide-react";
import { cn } from "../lib/utils";

const DINING_VENUES = [
  { id: "1", name: "Nobu", category: "Japanese Fusion", wait: "15 min", popularity: "Very Popular", rating: 4.9, image: "https://images.unsplash.com/photo-1579027060377-62283a0058b8?w=500&h=300&fit=crop" },
  { id: "2", name: "The Grill Royale", category: "Steakhouse", wait: "5 min", popularity: "Moderate", rating: 4.7, image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&h=300&fit=crop" },
  { id: "3", name: "Le Bistro", category: "French Bakery", wait: "0 min", popularity: "Quiet", rating: 4.8, image: "https://images.unsplash.com/photo-1550966841-3ee7adac1661?w=500&h=300&fit=crop" },
  { id: "4", name: "Artisan Coffee", category: "Specialty Cafe", wait: "10 min", popularity: "Trending", rating: 4.6, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop" },
];

export default function FoodCourtPage() {
  const [activeVenue, setActiveVenue] = useState<any>(null);

  return (
    <div className="p-6 md:p-12 space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gold uppercase tracking-[0.3em] text-[10px] font-bold">
            <UtensilsCrossed size={12} />
            The Dining Atrium
          </div>
          <h1 className="text-4xl md:text-5xl font-serif">Culinary Excellence</h1>
          <p className="text-white/40 max-w-xl">From Michelin-starred dining to artisanal street food, curated for the refined palate.</p>
        </div>
        
        <div className="flex gap-4">
           <div className="luxury-card px-6 py-4 flex flex-col items-center gap-1 group cursor-pointer hover:border-gold/30">
              <QrCode size={20} className="text-gold" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Smart Order</span>
           </div>
           <div className="luxury-card px-6 py-4 flex flex-col items-center gap-1">
              <span className="text-gold font-bold text-xl">12</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Venues Open</span>
           </div>
        </div>
      </header>

      {/* Hero Highlight */}
      <section className="relative h-[300px] rounded-[2rem] overflow-hidden group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&h=600&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 p-10 flex flex-col justify-center">
          <div className="bg-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full w-fit mb-4">
            Trending Now
          </div>
          <h2 className="text-3xl font-serif mb-2">The Terrace Lounge</h2>
          <p className="text-white/60 text-sm max-w-sm mb-6">Experience rooftop dining with panoramic city views and signature cocktails.</p>
          <button className="w-fit flex items-center gap-2 text-gold font-bold text-sm hover:translate-x-2 transition-transform">
            Book a Table <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* Venue List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-serif border-b border-white/5 pb-4">Browse Venues</h3>
          <div className="space-y-4">
            {DINING_VENUES.map(venue => (
              <motion.div 
                key={venue.id}
                onClick={() => setActiveVenue(venue)}
                whileHover={{ scale: 1.01 }}
                className={cn(
                  "luxury-card p-4 flex gap-6 cursor-pointer group",
                  activeVenue?.id === venue.id ? "border-gold/30 bg-gold/5" : ""
                )}
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={venue.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium group-hover:text-gold transition-colors">{venue.name}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-white/40">{venue.category}</p>
                    </div>
                    <div className="flex items-center gap-1 text-gold text-xs font-bold">
                      <Star size={12} fill="currentColor" /> {venue.rating}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase tracking-widest">
                       <Clock size={10} className="text-gold" /> {venue.wait} wait
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase tracking-widest">
                       <TrendingUp size={10} className="text-gold" /> {venue.popularity}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <aside className="space-y-8">
           <AnimatePresence mode="wait">
             {activeVenue ? (
               <motion.div 
                 key={activeVenue.id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="luxury-card p-8 space-y-8 h-full bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"
               >
                 <div className="space-y-4">
                   <h3 className="text-4xl font-serif">{activeVenue.name}</h3>
                   <div className="flex gap-4">
                      <div className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest">
                        Fine Dining
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                        Floor 3
                      </div>
                   </div>
                 </div>

                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Est. Wait</p>
                      <p className="text-xl font-medium">{activeVenue.wait}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Daily Guests</p>
                      <p className="text-xl font-medium">1.2k+</p>
                    </div>
                 </div>

                 <div className="space-y-4">
                   <p className="text-sm text-white/60 leading-relaxed italic border-l-2 border-gold pl-4">
                     "A true masterpiece of culinary arts, blending traditional techniques with modern innovation."
                   </p>
                 </div>

                 <div className="flex flex-col gap-3">
                   <button className="w-full py-4 gold-gradient rounded-xl font-bold text-sm shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                     Reserve A Table
                   </button>
                   <button className="w-full py-4 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/5 transition-all">
                     View Full Menu
                   </button>
                 </div>
               </motion.div>
             ) : (
               <div className="h-full luxury-card p-12 flex flex-col items-center justify-center text-center gap-6 border-dashed opacity-50">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                    <Info size={32} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-white/40">Select a Venue</h4>
                    <p className="text-sm text-white/20">Discover reviews, wait times, and exclusive menu highlights.</p>
                  </div>
               </div>
             )}
           </AnimatePresence>
        </aside>
      </div>
    </div>
  );
}
