import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Globe, Shirt, UtensilsCrossed, Landmark, Building2 } from "lucide-react";
import { getStateById } from "@/data/statesData";
import StateModel3D from "@/components/StateModel3D";

const StateDetail = () => {
  const { stateId } = useParams();
  const navigate = useNavigate();
  const state = getStateById(stateId || "");

  if (!state) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">State Not Found</h1>
          <button
            onClick={() => navigate("/explore")}
            className="px-6 py-3 rounded-xl gradient-saffron text-primary-foreground font-body font-medium"
          >
            Back to Map
          </button>
        </div>
      </div>
    );
  }

  const infoItems = [
    { icon: MapPin, label: "Capital", value: state.capital },
    { icon: Globe, label: "Language", value: state.language },
    { icon: Shirt, label: "Traditional Dress", value: state.traditionalDress },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/explore")}
          className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Map
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-xl"
              style={{ backgroundColor: state.color }}
            />
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                {state.name}
              </h1>
              <p className="font-body text-muted-foreground">{state.capital}</p>
            </div>
          </div>
          <p className="font-body text-lg text-muted-foreground max-w-3xl">
            {state.description}
          </p>
        </motion.div>

        {/* Basic Info Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-card rounded-xl p-5 border border-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <item.icon size={18} className="text-primary" />
                <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
              </div>
              <p className="font-display text-lg font-semibold text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Sections */}
        <div className="space-y-12">
          {/* Food */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-saffron flex items-center justify-center">
                <UtensilsCrossed className="text-primary-foreground" size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Famous Food</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <StateModel3D label={state.food.name} color={state.color} />
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{state.food.name}</h3>
                <p className="font-body text-muted-foreground">{state.food.description}</p>
              </div>
            </div>
          </motion.section>

          {/* Architecture */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center">
                <Building2 className="text-accent-foreground" size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Architecture</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{state.architecture.name}</h3>
                <p className="font-body text-muted-foreground">{state.architecture.description}</p>
              </div>
              <StateModel3D label={state.architecture.name} color={state.color} />
            </div>
          </motion.section>

          {/* Tourist Places */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center">
                <Landmark className="text-secondary-foreground" size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Tourist Places</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {state.touristPlaces.map((place) => (
                <div key={place.name} className="bg-card rounded-xl p-6 border border-border hover:shadow-cultural transition-all">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{place.name}</h3>
                  <p className="font-body text-sm text-muted-foreground">{place.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default StateDetail;
