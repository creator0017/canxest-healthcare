import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Building2, Heart, ShieldCheck, Stethoscope, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const clinicImages = [
  { src: "/clinic-exterior.jpg", alt: "Canxest Healthcare Clinic — Exterior" },
  { src: "/clinic-waiting-1.jpg", alt: "Patient Waiting Area" },
  { src: "/clinic-waiting-2.jpg", alt: "Modern Clinic Interior" },
];

const affiliatedHospitals = [
  { name: "Manipal Hospital", city: "Mysore" },
  { name: "Nirmala Hospital", city: "Mysore" },
  { name: "Brindavan Hospital", city: "Mysore" },
  { name: "Clear medi Radiant Hospital", city: "Mysore" },
  { name: "Apollo Hospital", city: "Mysore" },
  { name: "Bharath hospital", city: "Mysore" },
  { name: "CEG Hospital", city: "Mysore" },
  { name: "New Priyadarshini Hospital", city: "Mysore" },
  { name: "Suyog Hospital", city: "Mysore" },
  { name: "SIGMA Hospital", city: "Mysore" },
  { name: "Avant BKG", city: "Mysore" },
  { name: "Ramakrishna Hospital", city: "Mysore" },
  { name: "Madeshwara Hospital", city: "Mysore" },
  { name: "Supriya Hospital", city: "Mysore" },
  { name: "NJ Hospital", city: "Mysore" },
  { name: "Archana Hospital", city: "Mandya" },
  { name: "Pragathi Hospital", city: "Mandya" },
  { name: "Spandana Hospital", city: "Mandya" },
  { name: "Trustwel Hospital", city: "Bangalore" },
  { name: "HCG Hospital", city: "Banglore" },
  
];

const awards = [
  {
    year: "2009",
    title: "Gold Medal — RGUHS",
    desc: "Highest Marks in Obstetrics & Gynaecology, awarded by Rajiv Gandhi University of Health Sciences, Karnataka",
  },
  {
    year: "2014",
    title: "Gold Medal — Fellowship in Minimal Access Surgery",
    desc: "World Laparoscopy Hospital, Gurgaon — conducted by World Association of Laparoscopic Surgeons",
  },
  {
    year: "2018",
    title: "2nd Rank — MCh Surgical Oncology",
    desc: "MCh Surgical Oncology examinations at RGUHS, Kidwai Memorial Institute of Oncology, Bangalore",
  },
];

const About = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setSlideIndex((i) => (i - 1 + clinicImages.length) % clinicImages.length);
  const next = () => setSlideIndex((i) => (i + 1) % clinicImages.length);

  return (
    <div className="pt-16 md:pt-24">

      {/* ─── HERO ─── */}
      <section className="py-10 md:py-20 bg-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="bg-blush text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider inline-block">
              About the Clinic
            </span>
            <h1 className="text-2xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
              Canxest Healthcare
            </h1>
            <p className="text-base md:text-xl text-accent font-bold italic mb-4">"Choose Well, Be Well"</p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
               Canxest Healthcare is a specialized surgical oncology consultation clinic in Mysore, dedicated to providing expert cancer opinions and personalised treatment roadmaps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CLINIC IMAGES SLIDER ─── */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Our Clinic</h2>

          {/* Slider */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-100" style={{ height: "420px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setLightbox(slideIndex)}
              >
                <img
                  src={clinicImages[slideIndex].src}
                  alt={clinicImages[slideIndex].alt}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* Zoom hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
                  <p className="text-white font-semibold text-sm">{clinicImages[slideIndex].alt}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Dot indicators + thumbnails */}
          <div className="flex items-center justify-center gap-3 mt-5">
            {clinicImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`w-16 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                  i === slideIndex ? "border-accent scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-90"
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! - 1 + clinicImages.length) % clinicImages.length); }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              src={clinicImages[lightbox].src}
              alt={clinicImages[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! + 1) % clinicImages.length); }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Caption */}
            <p className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm">
              {clinicImages[lightbox].alt} &nbsp;·&nbsp; {lightbox + 1} / {clinicImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CLINIC OVERVIEW ─── */}
      <section className="py-10 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Stethoscope className="w-7 h-7 text-accent" />, label: "Clinic Type", value: "Consultation Clinic" },
              { icon: <Building2 className="w-7 h-7 text-accent" />, label: "Specialities medical", value: "radiation,surgical" },
              { icon: <Heart className="w-7 h-7 text-accent" />, label: "Speciality", value: "Surgical Oncology" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-4 items-start">
                <div className="w-12 h-12 bg-blush rounded-xl flex items-center justify-center flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-bold text-primary text-lg">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOCTOR PROFILE ─── */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="bg-blush text-accent px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider inline-block mb-4">
              Meet Our Specialist
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary">Dr. Nischal Raj L</h2>
            <p className="text-accent font-bold mt-1">Surgical Oncologist &amp; Laparoscopic &amp; Robotic Surgeon</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            {/* Left — Qualifications */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent" /> Qualifications
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {[
                    "MBBS (Gold Medal)",
                    "MS — General Surgery",
                    "MCh — Surgical Oncology, Kidwai Memorial Institute, Bangalore",
                    "Fellowship in Minimal Access Surgery (Gold Medal)",
                    "Director — Canxest Healthcare Pvt Ltd",
                    "Director — Mysuru Healthcare and Research Innovations Pvt Ltd",
                    "Consultant — Surgical Oncologist, Laparoscopic & Robotic Surgeon",
                    "KMC Registration No: 87246",
                  ].map((q, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-primary text-lg mb-4">Experience</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "18+", label: "Years Experience" },
                    { num: "10,000+", label: "Cancer Patients" },
                    { num: "5,000+", label: "Complex Surgeries" },
                    { num: "14+", label: "Hospital Affiliations" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 text-center border border-slate-100">
                      <p className="text-2xl font-black text-primary">{s.num}</p>
                      <p className="text-xs text-slate-500 font-semibold mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-primary text-lg mb-4">Previous Hospitals</h3>
                <ul className="space-y-1.5 text-slate-600 text-sm">
                  {[
                    "Clearmedi Radiant Hospital, Mysuru",
                    "Kidwai Memorial Institute of Oncology, Bangalore",
                    "Suyog Hospital, Mysore",
                    "CEG Hospital, Mysore",
                    "Brindavan Hospital, Mysore",
                    "Nirmala Hospital, Mysore",
                  ].map((h, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — Awards + Photo */}
            <div className="space-y-6">
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" /> Awards &amp; Recognitions
                </h3>
                <div className="space-y-5">
                  {awards.map((a, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-accent text-sm">
                        {a.year}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{a.title}</p>
                        <p className="text-blue-200 text-xs mt-1 leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blush rounded-2xl p-6 border border-accent/10">
                <h3 className="font-bold text-primary text-lg mb-3">Specialisations</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Breast Cancer Surgery",
                    "Thyroid Surgery",
                    "Gynaecological Oncology",
                    "Oral Cancer Surgery",
                    "GI & Pancreatic Cancer",
                    "Liver Cancer Surgery",
                    "Kidney / Bladder / Prostate",
                    "Soft Tissue & Bone Tumours",
                    "Lung & Thoracic Surgery",
                    "Laparoscopic Surgery",
                    "Robotic Surgery",
                    "Medical Oncology",
                    "Radiation Oncology",
                    "Immunotherapy",
                  ].map((s, i) => (
                    <span key={i} className="bg-white text-primary text-xs font-semibold px-3 py-1.5 rounded-full border border-accent/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOSPITAL AFFILIATIONS ─── */}
      <section className="py-10 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Hospital Affiliations</h2>
            <p className="text-slate-600">Visiting consultant &amp; surgical privileges at leading hospitals</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {affiliatedHospitals.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <p className="font-bold text-slate-800 text-sm">{h.name}</p>
                <p className="text-xs text-accent font-semibold mt-0.5">{h.city}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
