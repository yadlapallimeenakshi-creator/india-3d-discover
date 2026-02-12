import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Contact Us
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            We'd love to hear from you
          </p>
          <div className="w-20 h-1 gradient-tricolor-horizontal mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "info@indianculture.com" },
              { icon: Phone, label: "Phone", value: "+91 123 456 7890" },
              { icon: MapPin, label: "Location", value: "New Delhi, India" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg gradient-saffron flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{item.label}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground text-2xl">✓</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="font-body text-sm text-muted-foreground">We'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4"
              >
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl gradient-saffron text-primary-foreground font-body font-semibold hover:shadow-saffron transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
