import { motion } from "motion/react";
import { Quote, Star, Heart, MessageSquare } from "lucide-react";

const PatientStories = () => {
  const testimonials = [
    {
      name: "Anitha R.",
      tag: "Breast Cancer Survivor",
      quote:
        "Dr. Nischal Raj L and the team at Canxest Healthcare provided exceptional care during my treatment. The personalized attention and clear communication made a difficult journey much easier.",
      rating: 5,
    },
    {
      name: "Karthik S.",
      tag: "Thyroid Surgery Patient",
      quote:
        "I was worried about my surgery, but the expertise shown here was remarkable. The recovery was swift, and the post-operative support was outstanding.",
      rating: 5,
    },
    {
      name: "Priya M.",
      tag: "Oncology Consultation",
      quote:
        "The best place for cancer consultation in Mysore. They don't just treat the disease; they care for the person. Highly recommended.",
      rating: 5,
    },
    {
      name: "Rajesh V.",
      tag: "GI Oncology Patient",
      quote:
        "The diagnostic coordination was seamless. I got my reports fast, and the treatment plan was explained in detail. Truly professional.",
      rating: 5,
    },
  ];

  const stories = [
    {
      title: "Overcoming Stage II Breast Cancer",
      desc: "A detailed look at how we managed a complex case through multidisciplinary care and advanced surgical techniques.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Swift Recovery from Thyroidectomy",
      desc: "How minimally invasive approaches helped a patient return to their daily life within days of a major surgery.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-white text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider inline-block">
              Hope &amp; Healing
            </span>
            <h1 className="text-5xl font-bold text-primary mb-6">Patient Stories</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Real stories of courage and recovery from the people who trusted us with their care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">What Our Patients Say</h2>
              <p className="text-slate-600">Trusted by 10,000+ families in Mysore.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-primary">4.9/5 on Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((rev, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] relative overflow-hidden border border-slate-100"
              >
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-accent/5 rotate-12" />
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8 italic">
                  "{rev.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{rev.name}</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{rev.tag}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Stories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Recovery Narratives</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              In-depth stories of successful treatments and the path to wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {stories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-[3rem] overflow-hidden shadow-xl group">
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                    <Heart className="text-accent w-4 h-4 fill-current" />
                    <span className="text-sm font-bold text-primary uppercase">Success Story</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-primary mb-4">{story.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">{story.desc}</p>
                  <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all">
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientStories;
