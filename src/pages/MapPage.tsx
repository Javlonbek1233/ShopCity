import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Navigation, 
  Layers, 
  Plus, 
  Minus, 
  Maximize2, 
  Search,
  MapPin,
  Info,
  Clock,
  ArrowUpRight
} from "lucide-react";
import { cn } from "../lib/utils";

const MALL_FLOORS = [
  { id: 1, name: "Luxury & Fashion", level: "L1" },
  { id: 2, name: "Electronics & Lifestyle", level: "L2" },
  { id: 3, name: "Dining & Entertainment", level: "L3" },
  { id: 4, name: "Cinema & Terrace", level: "L4" },
];

export default function MapPage() {
  const [activeFloor, setActiveFloor] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedPoint, setSelectedPoint] = useState<any>(null);

  // Mapbox integration would go here if token exists
  const hasMapboxToken = !!import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  return (
    <div className="h-full flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar Controls */}
      <div className="w-full md:w-80 border-r border-white/5 bg-luxury-gray/50 backdrop-blur-2xl flex flex-col z-20">
        <div className="p-6 border-b border-white/5">
          <h1 className="text-2xl font-serif mb-6">Interactive Map</h1>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
            <input 
              type="text" 
              placeholder="Find store or facility..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-xs focus:border-gold/50 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold px-2 py-4">Levels</p>
          {MALL_FLOORS.map(floor => (
            <button
              key={floor.id}
              onClick={() => setActiveFloor(floor.id)}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300",
                activeFloor === floor.id 
                  ? "bg-gold/10 border-gold/40 text-gold" 
                  : "bg-white/5 border-white/5 text-white/60 hover:border-white/20"
              )}
            >
              <div className="text-left">
                <p className="text-xs font-bold font-mono opacity-60">{floor.level}</p>
                <p className="text-sm font-medium">{floor.name}</p>
              </div>
              <div className={cn(
                "w-2 h-2 rounded-full",
                activeFloor === floor.id ? "bg-gold" : "bg-white/20"
              )} />
            </button>
          ))}
          
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold px-2 pt-8 pb-4">Legend</p>
          <div className="space-y-4 px-2">
            <div className="flex items-center gap-3 text-xs text-white/60">
              <div className="w-3 h-3 rounded-full bg-gold" /> Luxury Suites
            </div>
            <div className="flex items-center gap-3 text-xs text-white/60">
              <div className="w-3 h-3 rounded-full bg-blue-500" /> Information
            </div>
            <div className="flex items-center gap-3 text-xs text-white/60">
              <div className="w-3 h-3 rounded-full bg-purple-500" /> Restrooms
            </div>
          </div>
        </div>
      </div>

      {/* Map Viewport */}
      <div className="flex-1 relative bg-luxury-black overflow-hidden group">
        {/* Technical Blueprint Placeholder */}
        {!hasMapboxToken ? (
           <div className="absolute inset-0 flex items-center justify-center p-12">
             <div className="w-full h-full relative border border-gold/10 rounded-3xl overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                {/* Visual Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                {/* Abstract Floor Plan */}
                <motion.div 
                  key={activeFloor}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-3/4 h-3/4 border-4 border-gold/20 rounded-[4rem] relative">
                    <div className="absolute top-1/2 left-0 w-1/3 h-20 border-r border-gold/20 flex items-center justify-center text-gold/30 text-xs font-mono uppercase tracking-[0.2em]">Wing A</div>
                    <div className="absolute top-0 left-1/2 w-40 h-1/3 border-b border-gold/20 flex items-center justify-center text-gold/30 text-xs font-mono uppercase tracking-[0.2em] transform -translate-x-1/2">Atrium</div>
                    <div className="absolute bottom-1/2 right-0 w-1/4 h-32 border-l border-gold/20 flex items-center justify-center text-gold/30 text-xs font-mono uppercase tracking-[0.2em]">Wing B</div>
                    
                    {/* Points on map */}
                    {[1, 2, 3, 4, 5].map(p => (
                      <motion.div 
                        key={p}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: p * 0.2 }}
                        className="absolute w-4 h-4 rounded-full bg-gold/40 border border-gold shadow-[0_0_15px_rgba(212,175,55,0.5)] cursor-pointer pointer-events-auto"
                        style={{ top: `${20 + p * 15}%`, left: `${30 + (p % 3) * 20}%` }}
                        onClick={() => setSelectedPoint({ id: p, name: `Luxury Suite ${p + 100}`, level: activeFloor })}
                      />
                    ))}
                  </div>
                </motion.div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/60 backdrop-blur-xl border border-gold/20 rounded-2xl text-[10px] text-gold uppercase tracking-[0.3em] font-bold">
                  Level {activeFloor} Architecture View
                </div>
             </div>
           </div>
        ) : (
          <div id="mapbox-container" className="w-full h-full" />
        )}

        {/* Map UI Controls */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <button className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all">
            <Plus size={20} />
          </button>
          <button className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all">
            <Minus size={20} />
          </button>
          <div className="h-px bg-white/10" />
          <button className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all">
            <Layers size={20} />
          </button>
        </div>

        {/* Selected Info Overlay */}
        <AnimatePresence>
          {selectedPoint && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute left-8 bottom-8 w-80 luxury-card p-6 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 text-[10px] text-gold font-bold uppercase tracking-widest mb-1">
                    <MapPin size={10} />
                    Current Selection
                  </div>
                  <h3 className="text-xl font-serif text-white">{selectedPoint.name}</h3>
                </div>
                <button onClick={() => setSelectedPoint(null)} className="text-white/20 hover:text-white">
                  <Plus size={20} className="rotate-45" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-white/60 text-xs">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Navigation size={14} /></div>
                  Floor {selectedPoint.level}
                </div>
                <div className="flex items-center gap-3 text-white/60 text-xs">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><Clock size={14} /></div>
                  Open Now
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 gold-gradient py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2">
                  Navigate <ArrowUpRight size={14} />
                </button>
                <button className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-white/60">
                  <Info size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
