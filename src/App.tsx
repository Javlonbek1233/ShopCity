import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Home, 
  Map as MapIcon, 
  ShoppingBag, 
  Car, 
  Utensils, 
  Sparkles, 
  Search,
  Bell,
  Menu,
  X
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "./lib/utils";

// Pages (will be created)
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import MapPage from "./pages/MapPage";
import ParkingPage from "./pages/ParkingPage";
import FoodCourtPage from "./pages/FoodCourtPage";
import AssistantOverlay from "./components/AssistantOverlay";

function NavItem({ to, icon: Icon, label, active }: { to: string, icon: any, label: string, active?: boolean }) {
  return (
    <Link to={to} className={cn(
      "flex flex-col items-center justify-center gap-1 p-2 transition-all duration-300",
      active ? "text-gold" : "text-white/40 hover:text-white"
    )}>
      <Icon size={20} strokeWidth={active ? 2.5 : 2} />
      <span className="text-[10px] uppercase tracking-widest font-medium">{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-glow"
          className="absolute -bottom-4 w-8 h-8 bg-gold/20 blur-xl rounded-full"
        />
      )}
    </Link>
  );
}

function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-luxury-black overflow-hidden flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-24 border-r border-white/5 bg-luxury-black/50 backdrop-blur-2xl py-8 items-center gap-8 z-50">
        <div className="text-gold font-serif text-2xl mb-8">SC</div>
        <NavItem to="/" icon={Home} label="Home" active={location.pathname === "/"} />
        <NavItem to="/stores" icon={ShoppingBag} label="Stores" active={location.pathname === "/stores"} />
        <NavItem to="/map" icon={MapIcon} label="Map" active={location.pathname === "/map"} />
        <NavItem to="/food" icon={Utensils} label="Dining" active={location.pathname === "/food"} />
        <NavItem to="/parking" icon={Car} label="Parking" active={location.pathname === "/parking"} />
        
        <div className="mt-auto space-y-6">
          <button 
            onClick={() => setIsAssistantOpen(true)}
            className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <Sparkles size={20} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 px-6 md:px-12 flex items-center justify-between bg-luxury-black/30 backdrop-blur-md z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative group max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" 
                placeholder="Search stores, brands, products..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-gold/50 transition-all placeholder:text-white/20"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-white/60 hover:text-white">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full" />
            </button>
            <div className="w-10 h-10 rounded-full border border-gold/20 p-0.5">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </header>

        {/* Viewport */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden h-20 border-t border-white/5 bg-luxury-black/80 backdrop-blur-2xl flex items-center justify-around px-4 z-50">
        <NavItem to="/" icon={Home} label="Home" active={location.pathname === "/"} />
        <NavItem to="/stores" icon={ShoppingBag} label="Stores" active={location.pathname === "/stores"} />
        <button 
          onClick={() => setIsAssistantOpen(true)}
          className="w-14 h-14 -mt-10 rounded-full gold-gradient shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-center"
        >
          <Sparkles size={24} />
        </button>
        <NavItem to="/map" icon={MapIcon} label="Map" active={location.pathname === "/map"} />
        <NavItem to="/parking" icon={Car} label="Parking" active={location.pathname === "/parking"} />
      </nav>

      {/* AI Assistant Overlay */}
      <AssistantOverlay isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stores" element={<StorePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/parking" element={<ParkingPage />} />
          <Route path="/food" element={<FoodCourtPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

