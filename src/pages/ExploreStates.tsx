import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { statesData } from "@/data/statesData";

// Simplified SVG India map with clickable state regions
const IndiaMapSVG = ({ onStateClick }: { onStateClick: (id: string) => void }) => {
  // Approximate positions for each state (simplified representation)
  const statePositions: Record<string, { x: number; y: number; w: number; h: number }> = {
    rajasthan: { x: 80, y: 120, w: 100, h: 90 },
    gujarat: { x: 60, y: 220, w: 80, h: 80 },
    maharashtra: { x: 120, y: 280, w: 110, h: 70 },
    punjab: { x: 130, y: 50, w: 60, h: 50 },
    "west-bengal": { x: 310, y: 200, w: 60, h: 80 },
    karnataka: { x: 150, y: 360, w: 80, h: 70 },
    kerala: { x: 160, y: 430, w: 40, h: 70 },
    "tamil-nadu": { x: 200, y: 400, w: 70, h: 80 },
  };

  return (
    <svg viewBox="0 0 450 550" className="w-full max-w-md mx-auto">
      {/* India outline (simplified) */}
      <path
        d="M180,20 C200,15 220,18 240,25 L260,30 C280,25 290,30 300,45 L310,60 C320,70 330,85 325,100 L340,120 C350,140 360,160 365,180 L370,200 C375,220 380,240 370,260 L360,280 C350,300 340,310 335,330 L330,350 C325,370 310,390 290,410 L270,430 C260,445 250,455 240,465 L225,480 C215,490 200,495 190,490 L175,480 C165,470 160,455 155,440 L150,420 C145,400 140,380 130,365 L120,350 C110,335 100,320 95,300 L85,280 C80,260 75,240 70,220 L65,200 C60,180 55,160 60,140 L70,120 C80,100 90,80 105,65 L120,50 C135,35 150,25 170,20 Z"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        opacity={0.4}
      />
      
      {statesData.map((state) => {
        const pos = statePositions[state.id];
        if (!pos) return null;
        return (
          <g key={state.id} onClick={() => onStateClick(state.id)} className="cursor-pointer">
            <motion.rect
              x={pos.x}
              y={pos.y}
              width={pos.w}
              height={pos.h}
              rx={8}
              fill={state.color}
              opacity={0.7}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="transition-all duration-200"
              style={{ transformOrigin: `${pos.x + pos.w / 2}px ${pos.y + pos.h / 2}px` }}
            />
            <text
              x={pos.x + pos.w / 2}
              y={pos.y + pos.h / 2}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-primary-foreground font-body text-[10px] font-semibold pointer-events-none"
            >
              {state.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const ExploreStates = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Explore Indian States
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            Click on any state to explore its rich cultural heritage
          </p>
          <div className="w-20 h-1 gradient-tricolor-horizontal mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-cultural"
          >
            <h2 className="font-display text-xl font-semibold text-foreground mb-4 text-center">
              Interactive Map
            </h2>
            <IndiaMapSVG onStateClick={(id) => navigate(`/state/${id}`)} />
          </motion.div>

          {/* State List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              All States
            </h2>
            {statesData.map((state, i) => (
              <motion.div
                key={state.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ x: 4 }}
                onClick={() => navigate(`/state/${state.id}`)}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-cultural transition-all cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: state.color }}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground">{state.name}</h3>
                  <p className="font-body text-xs text-muted-foreground truncate">{state.description}</p>
                </div>
                <span className="font-body text-xs text-primary font-medium">Explore →</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExploreStates;
