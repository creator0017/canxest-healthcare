import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, Quote, BookOpen, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const publications = [
  {
    title: "Minimally Invasive Esophagectomy In Semi-Prone Position (Pawar Technique)",
    journal: "Journal of Clinical Otorhinolaryngology, Head, and Neck Surgery",
    details: "Vol. 27, Issue 2, 2023 | ISSN: 1001-1781",
    authors: "Dr. Nischal Raj L, Dr. Adnan Saeed, Dr. Arpitha M R, Dr. Sumalatha A",
  },
  {
    title: "Pelvic And Para-Aortic Lymph Node Positivity Rate In Ca Ovary In Post-Neoadjuvant Chemotherapy Cases",
    journal: "JCHR — Journal of Clinical & Health Research",
    details: "2023, 13(4), 74–80 | ISSN: 2251-6727 | www.jchr.org",
    authors: "Dr. Nischal Raj L, Dr. Adnan Saeed, Dr. Avinash T R, Dr. Sumalatha A",
  },
  {
    title: "A Study On Local Injection Of Methylprednisolone Acetate To Prevent Seroma Formation After Mastectomy In 210 Cases",
    journal: "Journal of Population Therapeutics and Clinical Pharmacology",
    details: "31(2), 2528–2535 | DOI: 10.53555/Jptcp.V3112.4655 | ISSN: 1710-6222",
    authors: "Dr. Nischal Raj L, Dr. Adnan Saeed, Dr. Arpitha M R, Dr. Sumalatha A, Dr. Avinash T R",
  },
  {
    title: "Sensitivity of Core Needle Biopsy in Soft Tissue and Bone Tumors at Clear Mediradiant Hospital, Mysore",
    journal: "International Neurourology Journal (INJ)",
    details: "",
    authors: "Dr. Nischal Raj L, Dr. Adnan Saeed, Dr. Avinash T R",
  },
  {
    title: "2 more publications on the way",
    journal: "",
    details: "",
    authors: "",
    upcoming: true,
  },
];

const reviews = [
  {
    text: "Dr. Nischal Raj L and the team at Canxest Healthcare provided exceptional care during my treatment. The personalized attention and clear communication made a difficult journey much easier.",
    name: "Anitha R.",
    tag: "Breast Cancer Survivor",
  },
  {
    text: "I was worried about my surgery, but the expertise shown here was remarkable. The recovery was swift, and the post-operative support was outstanding.",
    name: "Karthik S.",
    tag: "Thyroid Surgery Patient",
  },
  {
    text: "The best place for cancer consultation in Mysore. They don't just treat the disease; they care for the person. Highly recommended.",
    name: "Priya M.",
    tag: "Oncology Consultation",
  },
  {
    text: "The diagnostic coordination was seamless. I got my reports fast, and the treatment plan was explained in detail. Truly professional.",
    name: "Rajesh V.",
    tag: "GI Oncology Patient",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Testimonials</h2>
          <p className="text-slate-500 font-medium">Trusted by 10,000+ families in Mysore.</p>
          <p className="text-accent font-bold mt-1">4.9/5 on Google</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[220px] md:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 relative"
              >
                <Quote className="w-10 h-10 text-accent/20 absolute top-6 left-6" />
                <div className="relative z-10 text-center">
                  <p className="text-base md:text-xl text-slate-700 font-medium leading-relaxed mb-6 italic">
                    "{reviews[current].text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-1 bg-accent rounded-full mb-3" />
                    <span className="font-bold text-primary text-base md:text-lg">{reviews[current].name}</span>
                    <span className="text-accent font-semibold text-sm mt-0.5">{reviews[current].tag}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-accent w-6" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface HomeProps {
  onBookClick: () => void;
}

const Home = ({ onBookClick }: HomeProps) => {
  const [showPublications, setShowPublications] = useState(false);

  return (
    <div>
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-16 md:pt-24 min-h-[500px] md:min-h-[650px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef4fa 0%, #f5f0eb 100%)' }}>
        
        {/* Background image — right half, starts right below navbar */}
        <div 
          className="absolute top-16 md:top-24 right-0 w-full lg:w-[60%] bottom-0 z-0 bg-cover bg-[center_top] bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-doctor-patient.png), url(/hope-patient.png)',
          }}
        >
          {/* Fade-out gradient on left edge so text blends nicely */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef4fa] via-[#eef4fa]/60 to-transparent lg:w-[40%]" />
        </div>

        {/* Text content — left side, on top of gradient */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center min-h-[450px] md:min-h-[550px]">
          <div className="max-w-xl py-10 md:py-16">
            <h1 className="text-5xl md:text-[4.5rem] font-serif font-bold leading-[1.08] text-[#0A5B68] mb-5 tracking-tight" style={{ fontStyle: 'italic' }}>
              BELIEVE{' '}
              THERE IS{' '}
              <br className="hidden md:block" />
              <span className="text-[#E79538]">HOPE </span>
              FOR
              <br />
              A <span className="text-[#E79538]">CURE.</span>
            </h1>

            <div className="w-10 h-1 bg-[#E79538] mb-7"></div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-9 max-w-md">
              You can monitor and manage your health with the platform we provide. Our care, your comfort, better tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 bg-[#0A5B68] text-white rounded-lg font-semibold hover:bg-[#084954] transition-all shadow-lg shadow-[#0A5B68]/20 text-sm"
              >
                Book Appointment
              </button>
              <Link
                to="/services"
                className="px-7 py-3.5 bg-transparent text-[#0A5B68] border-2 border-[#0A5B68] rounded-lg font-semibold hover:bg-[#0A5B68] hover:text-white transition-all text-center text-sm"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* ─── WHY CANXEST ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
              Why Canxest Healthcare
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              What makes Canxest Healthcare different?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {[
              { title: 'Comprehensive Personalized Cancer Care', desc: 'Every treatment plan is tailored to the individual patient — no one-size-fits-all approach.' },
              { title: 'Advanced Surgical Techniques', desc: 'Laparoscopic, robotic, and oncoplastic methods for precision and faster recovery.' },
              { title: 'Multidisciplinary Approach', desc: 'Surgical, medical, radiation oncology, and support teams working together for the best outcomes.' },
              { title: 'Affordable Treatment', desc: 'Accessible, high-quality cancer care that caters to patients from all walks of life.' },
              { title: 'Multiple Hospital Options', desc: 'Surgical privileges at 20+ leading hospitals across Mysore, Mandya, and Bangalore.' },
              { title: 'Chemotherapy ', desc: 'Personalized chemotherapy plans using the latest protocols to effectively target and control cancer while minimizing side effects.'},
              { title: 'immuntherapy', desc: 'Harnessing the body’s immune system to fight cancer with cutting-edge immunotherapy treatments for improved outcomes.'},
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base md:text-lg font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOCTOR SNIPPET ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Doctor Image */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-center md:hidden">
                <span className="bg-blush text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-3 uppercase tracking-wider inline-block">
                  Meet Our Specialist
                </span>
                <h2 className="text-2xl font-bold text-primary">
                  Expert Oncology Care by Dr. Nischal Raj L
                </h2>
              </div>
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl bg-lavender">
                <img
                  src="/doctor-desk.jpg"
                  alt="Dr. Nischal Raj L"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4">
                  <p className="text-white font-bold text-sm">Dr. Nischal Raj L</p>
                  <p className="text-blue-200 text-xs">MCh Surgical Oncology</p>
                </div>
              </div>
            </div>
            {/* Text */}
            <div>
              <span className="bg-blush text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider hidden md:inline-block">
                Meet Our Specialist
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 hidden md:block">
                Expert Oncology Care by Dr. Nischal Raj L
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Dr. Nischal Raj L is a highly experienced surgical oncologist with over 18 years of expertise.
                Having managed more than 10,000 cancer patients and performed over 5,000 complex cancer surgeries,
                he is dedicated to providing the highest quality care.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="tel:8105815577"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/90 transition-all"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/918105815577?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20with%20Dr.%20Nischal%20Raj%20L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#25D366]/90 transition-all"
                >
                  💬 WhatsApp
                </a>
                <button
                  onClick={() => setShowPublications(true)}
                  className="flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-all"
                >
                  <BookOpen className="w-4 h-4" /> Publications
                </button>
              </div>
              <Link
                to="/doctors"
                className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Full Profile <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEET OUR DOCTORS CTA BAND ─── */}
      <section className="py-14 md:py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Meet Our Doctors</h2>
          <Link
            to="/doctors"
            className="inline-block bg-accent text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20"
          >
            View Doctors
          </Link>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <TestimonialsSection />

      {/* ─── QUICK CONTACT BAR ─── */}
      <section className="py-10 md:py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center">
            <div>
              <p className="text-primary text-sm font-bold uppercase mb-1">Our Location</p>
              <p className="font-medium text-slate-700 text-sm md:text-base">17/2C, KRS Main Road, Next to CEG Hospital, Gokulam 1st Stage, VV Mohalla, Mysore 570002</p>
            </div>
            <div>
              <p className="text-primary text-sm font-bold uppercase mb-1">Call Us</p>
              <a href="tel:8105815577" className="font-medium text-slate-700 hover:text-accent transition-colors">
                8105815577
              </a>
            </div>
            <div>
              <p className="text-primary text-sm font-bold uppercase mb-1">OPD Timings</p>
              <p className="font-medium text-slate-700 text-sm md:text-base">Mon, Wed, Thu, Sat: 10 AM – 1:30 PM, 5 PM – 6:30 PM<br/>Tue, Fri: 10 AM – 1:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PUBLICATIONS POPUP ─── */}
      <AnimatePresence>
        {showPublications && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={() => setShowPublications(false)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100 bg-primary">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Publications</h2>
                    <p className="text-xs text-blue-200">Dr. Nischal Raj L</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPublications(false)}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto px-7 py-6 space-y-5">
                {publications.map((pub, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 p-5 rounded-2xl border ${
                      pub.upcoming
                        ? "border-dashed border-accent/40 bg-accent/5"
                        : "border-slate-100 bg-slate-50"
                    }`}
                  >
                    <div className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${pub.upcoming ? "bg-accent/50" : "bg-primary"}`} />
                    <div>
                      <p className={`font-bold leading-snug mb-1 ${pub.upcoming ? "text-accent italic" : "text-slate-800"}`}>
                        {pub.title}
                      </p>
                      {pub.journal && (
                        <p className="text-xs font-semibold text-primary mb-0.5">{pub.journal}</p>
                      )}
                      {pub.details && (
                        <p className="text-xs text-slate-500 mb-1">{pub.details}</p>
                      )}
                      {pub.authors && (
                        <p className="text-xs text-slate-600">
                          <span className="font-semibold">Authors:</span> {pub.authors}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-7 py-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                <button
                  onClick={() => setShowPublications(false)}
                  className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary/90 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
