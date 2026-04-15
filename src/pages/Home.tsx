import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

interface HomeProps {
  onBookClick: () => void;
}

const Home = ({ onBookClick }: HomeProps) => {
  return (
    <div>
      {/* ─── HERO SECTION ─── */}
      <section className="hero-section">

        {/* Giant ghost text — "Canxest" + "Healthcare" stacked */}
        <div className="hero-ghost-text" aria-hidden="true">
          Canxest<br />Healthcare
        </div>

        {/* Doctor image — wrapper isolates blend mode so ghost text stays BEHIND */}
        <div className="hero-doctor-wrap">
          <img
            src="/doctor-cutout.png"
            alt="Dr. Nischal Raj L"
            className="hero-doctor"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              if (!img.dataset.fallback) {
                img.dataset.fallback = "1";
                img.src = "/doctor-scrubs.jpg";
              } else {
                img.style.display = 'none';
              }
            }}
          />
        </div>

        {/* BOTTOM-LEFT — Avatar stack + 500+ stat */}
        <div className="hero-bottom-left">
          <div style={{ display: 'flex', marginBottom: 8 }}>
            {[
              { letter: 'P', bg: '#c0392b' },
              { letter: 'R', bg: '#27ae60' },
              { letter: 'S', bg: '#e67e22' },
            ].map((av, i) => (
              <div
                key={i}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: av.bg, color: 'white',
                  fontWeight: 700, fontSize: 13,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginLeft: i > 0 ? -9 : 0,
                  border: '2.5px solid #EDE8F5',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
              >
                {av.letter}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, color: '#1B1F7A', lineHeight: 1 }}>500+</div>
          <div style={{ fontSize: 12, color: '#5a5a8a', marginTop: 3, maxWidth: 160, lineHeight: 1.4 }}>
            Successfully treated happy patients across Mysore
          </div>
        </div>

        {/* BOTTOM-RIGHT — Tagline (desktop only) */}
        <div className="hero-bottom-right">
          <p style={{ fontSize: 16, fontWeight: 800, color: '#1B1F7A', lineHeight: 1.3, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
            Expert Surgical Oncology Care — Wherever You Are
          </p>
          <p style={{ fontSize: 13, color: '#5a5a8a', fontWeight: 500, lineHeight: 1.5, margin: '0 0 8px 0' }}>
            Compassionate, precise, and personalized cancer treatment from a trusted specialist.
          </p>
          <p style={{ fontSize: 13, color: '#3a3a6a', fontWeight: 600, lineHeight: 1.5, margin: '0 0 10px 0' }}>
            Dr. Nischal Raj L. delivers advanced surgical oncology care you can rely on — anytime, anywhere.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[
              '✔ 18+ Years Experience',
              '✔ 5,000+ Successful Surgeries',
              '✔ Online & In-Person Available',
            ].map((item) => (
              <span key={item} style={{ fontSize: 13, color: '#1B1F7A', fontWeight: 700 }}>{item}</span>
            ))}
          </div>
        </div>

      </section>

      {/* Mobile-only tagline — visible below hero on small screens */}
      <section className="md:hidden bg-[#EDE8F5] px-5 py-5 border-t border-primary/10">
        <p className="text-sm font-bold text-primary uppercase tracking-wide mb-3">
          Expert Surgical Oncology Care — Wherever You Are
        </p>
        <div className="flex flex-col gap-1.5">
          {[
            '✔ 18+ Years Experience',
            '✔ 5,000+ Successful Surgeries',
            '✔ Online & In-Person Available',
          ].map((item) => (
            <span key={item} className="text-sm text-primary font-semibold">{item}</span>
          ))}
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
              { title: 'Multiple Hospital Options', desc: 'Surgical privileges at 20+ leading hospitals across Mysore, Mandya, and Bangalore.' },
              { title: 'Affordable Treatment', desc: 'Accessible, high-quality cancer care that caters to patients from all walks of life.' },
              { title: 'Advanced Surgical Techniques', desc: 'Laparoscopic, robotic, and oncoplastic methods for precision and faster recovery.' },
              { title: 'Multidisciplinary Approach', desc: 'Surgical, medical, radiation oncology, and support teams working together for the best outcomes.' },
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

      {/* ─── BOOK APPOINTMENT CTA BAND ─── */}
      <section className="py-14 md:py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to consult Dr. Nischal Raj L?</h2>
          <p className="text-blue-100 mb-8 text-base md:text-lg">
            Book your appointment today. We confirm your slot within 2 hours.
          </p>
          <button
            onClick={onBookClick}
            className="bg-accent text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20"
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Testimonials</h2>
            <p className="text-slate-600 max-w-xl mx-auto font-medium">What our Patients say about us</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl relative border border-slate-100"
            >
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-accent/20 absolute top-8 left-8 md:top-10 md:left-10" />
              <div className="relative z-10 text-center">
                <p className="text-lg md:text-2xl text-slate-700 font-medium leading-relaxed mb-8 italic">
                  "The medical care provided by Dr. Nischal is excellent. I genuinely value his approaches
                  and therapy. A generous and compassionate person."
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-1 bg-accent rounded-full mb-4" />
                  <span className="font-bold text-primary text-lg md:text-xl">Patient Review</span>
                  <span className="text-accent font-bold uppercase text-sm mt-1 tracking-wider">
                    Verified Google Review
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              <p className="font-medium text-slate-700 text-sm md:text-base">Mon – Sat: 10 AM – 1:30 PM, 5 PM – 6:30 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
