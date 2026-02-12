import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeroScene from "@/components/HeroScene";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Tricolor gradient background */}
      <div className="absolute inset-0 gradient-tricolor opacity-30" />
      
      {/* Hero content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        {/* 3D Ashoka Chakra */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <HeroScene />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center relative z-10 max-w-4xl mx-auto"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-1 gradient-tricolor-horizontal mx-auto mb-8 rounded-full"
          />

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Explore the{" "}
            <span className="text-gradient-tricolor">Soul of India</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-display text-lg md:text-xl text-muted-foreground italic mb-4 max-w-2xl mx-auto"
          >
            "Unity in Diversity is India's true strength."
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-body text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            Discover the rich heritage, vibrant traditions, and cultural diversity 
            of India through immersive 3D experiences.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/dashboard")}
            className="px-10 py-4 rounded-xl font-body font-semibold text-lg gradient-saffron text-primary-foreground shadow-saffron hover:shadow-cultural transition-all duration-300 animate-pulse-glow"
          >
            Explore India →
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-foreground"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
