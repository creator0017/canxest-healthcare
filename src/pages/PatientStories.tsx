import { motion } from "motion/react";
import { Quote, Star, MessageSquare } from "lucide-react";

const PatientStories = () => {
  const testimonials = [
    {
      name: "Anitha R.",
      tag: "Breast Cancer Survivor",
      quote: "Dr. Nischal Raj L and the team at Canxest Healthcare provided exceptional care during my treatment. The personalized attention and clear communication made a difficult journey much easier.",
      rating: 5,
    },
    {
      name: "Karthik S.",
      tag: "Thyroid Surgery Patient",
      quote: "I was worried about my surgery, but the expertise shown here was remarkable. The recovery was swift, and the post-operative support was outstanding.",
      rating: 5,
    },
    {
      name: "Priya M.",
      tag: "Oncology Consultation",
      quote: "The best place for cancer consultation in Mysore. They don't just treat the disease; they care for the person. Highly recommended.",
      rating: 5,
    },
    {
      name: "Rajesh V.",
      tag: "GI Oncology Patient",
      quote: "The diagnostic coordination was seamless. I got my reports fast, and the treatment plan was explained in detail. Truly professional.",
      rating: 5,
    },
  ];


  return (
    <div className="pt-16 md:pt-24">
      {/* Hero */}
      <section className="py-10 md:py-20 bg-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-white text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider inline-block">
              Hope &amp; Healing
            </span>
            <h1 className="text-2xl md:text-5xl font-bold text-primary mb-4 md:mb-6">Patient Stories</h1>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Real stories of courage and recovery from the people who trusted us with their care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-16 gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">What Our Patients Say</h2>
              <p className="text-slate-600 text-sm md:text-base">Trusted by 10,000+ families in Mysore.</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 md:px-6 md:py-3 rounded-2xl border border-slate-100 self-start md:self-auto">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-primary text-sm">4.9/5 on Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            {testimonials.map((rev, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 p-5 md:p-10 rounded-2xl md:rounded-[2.5rem] relative overflow-hidden border border-slate-100"
              >
                <Quote className="absolute -top-4 -right-4 w-20 h-20 text-accent/5 rotate-12" />
                <div className="flex text-yellow-400 mb-4 md:mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-base md:text-xl text-slate-700 font-medium leading-relaxed mb-5 md:mb-8 italic">
                  "{rev.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="text-accent w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm md:text-base">{rev.name}</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{rev.tag}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PatientStories;
