import { motion } from "motion/react";
import { Car, MapPin, Clock, Battery, Shield, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

const PARKING_ZONES = [
  { id: "A", name: "Premier Zone", color: "bg-gold", status: "85% Full", availability: 12, total: 80 },
  { id: "B", name: "North Wing", color: "bg-blue-500", status: "Stable", availability: 45, total: 120 },
  { id: "C", name: "South Wing", color: "bg-purple-500", status: "Full", availability: 0, total: 100 },
  { id: "EV", name: "EV Green Zone", color: "bg-green-500", status: "Available", availability: 8, total: 12 },
];

export default function ParkingPage() {
  return (
    <div className="p-6 md:p-12 space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-serif">Seamless Arrival</h1>
          <p className="text-white/40 max-w-xl">Live parking availability and location tracking for your convenience.</p>
        </div>
        <div className="luxury-card px-6 py-3 flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium">Live Updates Active</span>
        </div>
      </header>

      {/* Main Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARKING_ZONES.map(zone => (
              <motion.div 
                key={zone.id}
                whileHover={{ scale: 1.02 }}
                className="luxury-card p-6 flex flex-col gap-6"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white", zone.color)}>
                      <Car size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{zone.name}</h3>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Zone {zone.id}</p>
                    </div>
                  </div>
                  {zone.availability === 0 ? (
                    <div className="flex items-center gap-1.5 text-red-500 text-xs font-bold uppercase tracking-wider">
                      <AlertCircle size={14} /> Full
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-wider">
                      <CheckCircle2 size={14} /> Available
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Occupancy</span>
                    <span className="font-mono">{zone.total - zone.availability}/{zone.total}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((zone.total - zone.availability) / zone.total) * 100}%` }}
                      className={cn("h-full", zone.color)}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Available</p>
                    <p className="text-xl font-serif">{zone.availability}</p>
                  </div>
                  <button className="flex-[2] py-3 rounded-xl bg-white/5 border border-white/5 text-sm font-medium hover:border-gold/30 transition-all">
                    Navigate to Zone
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="luxury-card p-6 bg-gold/5 border-gold/20">
            <h3 className="text-gold font-serif text-lg mb-4 flex items-center gap-2">
              <Shield size={18} />
              Valet Services
            </h3>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Our signature valet service is available at the North and South entrances.
            </p>
            <button className="w-full py-4 gold-gradient rounded-xl font-bold text-sm">
              Request Valet
            </button>
          </div>

          <div className="luxury-card p-6">
            <h3 className="font-serif text-lg mb-4 flex items-center gap-2">
              <Battery size={18} className="text-green-500" />
              EV Charging
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm">
                <span className="text-white/60">Fast Chargers</span>
                <span className="text-green-500 font-bold">4 Open</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-white/60">Tesla Superchargers</span>
                <span className="text-white/40">2 Open</span>
              </li>
            </ul>
          </div>

          <div className="luxury-card p-6">
            <h3 className="font-serif text-lg mb-4 flex items-center gap-2">
              <Clock size={18} className="text-white/40" />
              Recent Rates
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/60">First 2 Hours</span>
                <span className="text-gold">Complimentary</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/60">Each Add. Hour</span>
                <span className="text-white">$5.00</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
