import { motion } from "motion/react";

const About = () => {
  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="py-10 md:py-20 bg-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-blush text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider inline-block">About the Clinic</span>
              <h1 className="text-2xl md:text-5xl font-bold text-primary mb-4 md:mb-6">Canxest Healthcare: Excellence in Oncology</h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                Established in March 2026, Canxest Healthcare is a specialized oncology consultation clinic in Mysore. We are dedicated to providing expert surgical oncology opinions and personalized care roadmaps for cancer patients.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 inline-block">
                <h3 className="font-bold text-primary mb-2">Clinic Type</h3>
                <p className="text-slate-600">Consultation Clinic</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
