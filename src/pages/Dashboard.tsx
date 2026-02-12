import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, UtensilsCrossed, Landmark, Waves, Palette, Building2 } from "lucide-react";
import { statesData } from "@/data/statesData";

const categories = [
  { icon: UtensilsCrossed, label: "Food", count: statesData.length, color: "gradient-saffron", desc: "Traditional cuisines" },
  { icon: MapPin, label: "Tourist Places", count: statesData.length * 2, color: "gradient-green", desc: "Must-visit destinations" },
  { icon: Landmark, label: "Culture", count: statesData.length, color: "gradient-navy", desc: "Heritage & traditions" },
  { icon: Building2, label: "Architecture", count: statesData.length, color: "gradient-saffron", desc: "Iconic monuments" },
  { icon: Waves, label: "Beaches", count: 5, color: "gradient-green", desc: "Coastal paradises" },
  { icon: Palette, label: "Art & Dance", count: statesData.length, color: "gradient-navy", desc: "Performing arts" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Cultural Dashboard
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            {statesData.length} States • Infinite Heritage
          </p>
          <div className="w-20 h-1 gradient-tricolor-horizontal mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={item}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group rounded-xl p-6 bg-card border border-border hover:shadow-cultural transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/explore")}
            >
              <div className={`w-12 h-12 rounded-lg ${cat.color} flex items-center justify-center mb-4`}>
                <cat.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {cat.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3">{cat.desc}</p>
              <span className="font-body text-xs font-medium text-primary">{cat.count}+ entries →</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick State Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Quick Explore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statesData.map((state) => (
              <motion.div
                key={state.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/state/${state.id}`)}
                className="rounded-xl p-4 bg-card border border-border hover:shadow-cultural transition-all cursor-pointer text-center"
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: state.color }}
                />
                <h4 className="font-display text-sm font-semibold text-foreground">{state.name}</h4>
                <p className="font-body text-xs text-muted-foreground">{state.capital}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
