import { motion } from "framer-motion";

const facts = [
  { title: "29 States & 8 UTs", desc: "India's diverse administrative divisions" },
  { title: "22 Official Languages", desc: "Recognized by the Indian Constitution" },
  { title: "1,600+ Dialects", desc: "Spoken across the subcontinent" },
  { title: "40+ UNESCO Sites", desc: "World Heritage Sites preserving India's legacy" },
  { title: "5,000+ Year History", desc: "One of the oldest civilizations" },
  { title: "Incredible Diversity", desc: "Every state has unique culture, food, and traditions" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            About India
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            India is a land where ancient traditions coexist with modern innovation, 
            where every region tells a unique story of culture, art, and resilience.
          </p>
          <div className="w-20 h-1 gradient-tricolor-horizontal mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-cultural transition-all text-center"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{fact.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{fact.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-card rounded-2xl p-8 border border-border"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            The 3D Indian Culture Explorer is an immersive digital platform designed to promote 
            and preserve India's rich cultural heritage. Through interactive 3D visualizations, 
            we bring the diverse traditions, architecture, cuisine, and art forms of each state 
            to life.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Our goal is to make India's incredible cultural diversity accessible to everyone — 
            students, researchers, travelers, and anyone curious about one of the world's most 
            fascinating civilizations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
