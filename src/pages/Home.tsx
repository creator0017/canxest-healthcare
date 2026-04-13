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
        {/* Giant ghost "Canxest" text — z-index 5, BEHIND doctor */}
        <div className="hero-ghost-text" aria-hidden="true">Canxest</div>

        {/* Doctor image — z-index 15, IN FRONT of text */}
        <img
          src="/doctor-cutout.png"
          alt="Dr. Nischal Raj L"
          className="hero-doctor"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />

        {/* TOP-RIGHT — Avatar stack + 500+ stat — z-index 20 */}
        <div className="hero-top-right">
          <div style={{ display: 'flex', marginBottom: 10 }}>
            {[
              { letter: 'P', bg: '#c0392b' },
              { letter: 'R', bg: '#27ae60' },
              { letter: 'S', bg: '#e67e22' },
            ].map((av, i) => (
              <div
                key={i}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: av.bg, color: 'white',
                  fontWeight: 700, fontSize: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginLeft: i > 0 ? -10 : 0,
                  border: '2.5px solid #EDE8F5',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
              >
                {av.letter}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 52, fontWeight: 900, color: '#1B1F7A', lineHeight: 1 }}>500+</div>
          <div style={{ fontSize: 13, color: '#5a5a8a', marginTop: 4, maxWidth: 180, lineHeight: 1.4 }}>
            Successfully treated happy patients across Mysore
          </div>
        </div>

        {/* BOTTOM-RIGHT — Tagline — z-index 20 */}
        <div className="hero-bottom-right">
          <p style={{ fontSize: 17, fontWeight: 700, color: '#1B1F7A', lineHeight: 1.6, margin: 0 }}>
            Wherever you are — home, clinic, or hospital,<br />
            Dr. Nischal Raj L. brings expert surgical<br />
            oncology care you can count on.
          </p>
        </div>
      </section>

      {/* ─── USP COMPARISON ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              You've waited in clinic queues. Now, let healthcare come to you.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Traditional Clinics</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                  Traffic &amp; long waits
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                  Delayed reports
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                  Multiple clinic visits
                </li>
              </ul>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 bg-primary text-white items-center justify-center rounded-full font-bold shadow-lg text-sm">
              vs
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-accent">
              <h3 className="text-xl font-bold text-primary mb-4">Canxest Healthcare</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  Free home sample collection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  Reports in 24 hrs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  Doctor-reviewed digital certificates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOCTOR SNIPPET ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="bg-blush text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider inline-block">
              Meet Our Specialist
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Expert Oncology Care by Dr. Nischal Raj L
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Nischal Raj L is a highly experienced surgical oncologist with over 18 years of expertise.
              Having managed more than 10,000 cancer patients and performed over 5,000 complex cancer surgeries,
              he is dedicated to providing the highest quality care.
            </p>
            <Link
              to="/doctors"
              className="text-accent font-bold text-lg flex items-center justify-center gap-2 hover:gap-3 transition-all"
            >
              View Full Profile <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BOOK APPOINTMENT CTA BAND ─── */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to consult Dr. Nischal Raj L?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Book your appointment today. We confirm your slot within 2 hours.
          </p>
          <button
            onClick={onBookClick}
            className="bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20"
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Testimonials</h2>
            <p className="text-slate-600 max-w-xl mx-auto font-medium">What our Patients say about us</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-xl relative border border-slate-100"
            >
              <Quote className="w-12 h-12 text-accent/20 absolute top-10 left-10" />
              <div className="relative z-10 text-center">
                <p className="text-2xl text-slate-700 font-medium leading-relaxed mb-8 italic">
                  "The medical care provided by Dr. Nischal is excellent. I genuinely value his approaches
                  and therapy. A generous and compassionate person."
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-1 bg-accent rounded-full mb-4" />
                  <span className="font-bold text-primary text-xl">Patient Review</span>
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
      <section className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center items-center">
            <div>
              <p className="text-primary text-sm font-bold uppercase mb-1">Our Location</p>
              <p className="font-medium text-slate-700">17/2C, KRS Main Road, Gokulam 1st Stage, Mysore</p>
            </div>
            <div>
              <p className="text-primary text-sm font-bold uppercase mb-1">Call Us</p>
              <a href="tel:8105815577" className="font-medium text-slate-700 hover:text-accent transition-colors">
                8105815577
              </a>
            </div>
            <div>
              <p className="text-primary text-sm font-bold uppercase mb-1">OPD Timings</p>
              <p className="font-medium text-slate-700">Mon – Sat: 10 AM – 1:30 PM, 5 PM – 6:30 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
