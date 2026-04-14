import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, BookOpen, X, Calendar, Phone, Mail, ShieldCheck, MapPin } from "lucide-react";

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  education: string;
  image: string;
  bio: string;
  availability: string;
  email: string;
  phone: string;
  qualifications?: string[];
  awards?: string[];
}

/* 20 hospitals with location context */
const consultingHospitals = [
  { name: "Manipal Hospital", city: "Mysore" },
  { name: "Brindavan Hospital", city: "Mysore" },
  { name: "Nirmala Hospital", city: "Mysore" },
  { name: "Clearmedi Radiant Hospital", city: "Mysore" },
  { name: "Apollo Hospital", city: "Mysore" },
  { name: "Bharath Hospital", city: "Mysore" },
  { name: "CEG Hospital", city: "Mysore" },
  { name: "New Priyadarshini Hospital", city: "Mysore" },
  { name: "Sigma Hospital", city: "Mysore" },
  { name: "Suyog Hospital", city: "Mysore" },
  { name: "Avant BKG", city: "Mysore" },
  { name: "Ramakrishna Hospital", city: "Mysore" },
  { name: "Madeshwara Hospital", city: "Mysore" },
  { name: "Supriya Hospital", city: "Mysore" },
  { name: "NJ Hospital", city: "Mysore" },
  { name: "Spandana Hospital", city: "Mandya" },
  { name: "Archana Hospital", city: "Mandya" },
  { name: "Pragathi Hospital", city: "Mandya" },
  { name: "Trustwell Hospital", city: "Bangalore" },
  { name: "HCG Hospital", city: "Bangalore" },
];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const doctors: Doctor[] = [
    {
      name: "Dr. Nischal Raj L",
      specialty: "Surgical Oncologist & Laparoscopic Surgeon",
      experience: "18+ Years",
      education: "KMC 87246",
      /* Replace /doctor-desk.jpg with the actual consultation photo */
      image: "/doctor-desk.jpg",
      bio: "Dr. Nischal Raj L is a conscientious surgical oncologist, specializing in the diagnosis and treatment of cancer through surgery. Having performed more than 5,000 complex cancer surgeries and managed over 10,000 cancer patients, he is a leader in the field. He works closely with a team of medical and radiation oncologists to create personalized treatment plans. He is skilled in advanced surgical techniques, including minimally invasive, laparoscopic, and robotic procedures.",
      availability: "Mon – Sat: 10 AM – 1:30 PM, 5 PM – 6:30 PM",
      email: "canxesthealthcareclinic@gmail.com",
      phone: "8105815577",
      qualifications: [
        "MBBS (Gold Medal)",
        "MS (General Surgery)",
        "MCh (Surgical Oncology, Kidwai)",
        "Fellowship in Minimal Access Surgery (Gold Medal)",
        "Director — Canxest Healthcare Pvt Ltd",
        "Director — Mysuru Healthcare and Research Innovations Pvt Ltd",
        "Consultant — Surgical Oncologist and Laparoscopic & Robotic Surgeon",
      ],
      awards: [
        "Gold Medal (2009) for Highest Marks in OBG by RGUHS",
        "Gold Medal in Fellowship in Minimal Access Surgery (2014)",
        "2nd Rank in MCh Surgical Oncology exams at RGUHS (2018)",
      ],
    },
  ];

  return (
    <div className="pt-16 md:pt-24 pb-10 md:pb-20">
      {/* Hero */}
      <section className="py-10 md:py-20 bg-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-blush text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider inline-block">
              Our Expert
            </span>
            <h1 className="text-2xl md:text-5xl font-bold text-primary mb-3 md:mb-4">Meet Our Doctor</h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Highly qualified, experienced, and dedicated to providing the best surgical oncology care in Mysore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Card */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-lavender">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      /* Fallback to scrubs photo if desk photo missing */
                      const img = e.target as HTMLImageElement;
                      if (img.src.includes('doctor-desk.jpg')) {
                        img.src = '/doctor-scrubs.jpg';
                      } else {
                        img.style.display = 'none';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-5 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{doctor.name}</h3>
                  <p className="text-accent font-semibold mb-4">{doctor.specialty}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <Award className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{doctor.experience} Experience | 5,000+ Surgeries</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>KMC Reg. 87246</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Mon – Sat: 10 AM–1:30 PM, 5 PM–6:30 PM</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="w-full py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
                  >
                    View Full Profile
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Quick Stats */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-3">
                  Dr. Nischal Raj L
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  A leader in surgical oncology with 18+ years of experience, 5,000+ complex cancer
                  surgeries, and 10,000+ patients managed. Skilled in laparoscopic, minimally invasive,
                  and robotic surgical techniques.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "18+", label: "Years Experience" },
                  { num: "5,000+", label: "Cancer Surgeries" },
                  { num: "10,000+", label: "Patients Managed" },
                  { num: "20+", label: "Hospital Tie-ups" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-lavender rounded-2xl p-5 text-center">
                    <div className="text-2xl font-bold text-primary">{stat.num}</div>
                    <div className="text-sm text-slate-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href="tel:8105815577"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href="mailto:canxesthealthcareclinic@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Hospitals — 20 hospitals */}
      <section className="py-10 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">Consultant &amp; Visiting Consultant</h2>
            <p className="text-blue-100 text-sm md:text-lg max-w-2xl mx-auto">
              Dr. Nischal Raj L holds surgical privileges and serves as a visiting consultant at 20+ leading
              hospitals across Mysore, Mandya, and Bangalore.
            </p>
          </div>

          {/* Mysore */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="text-accent w-5 h-5" />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">Mysore</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {consultingHospitals.filter(h => h.city === "Mysore").map((hospital, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-2xl flex items-center gap-2"
                >
                  <ShieldCheck className="text-accent w-4 h-4 flex-shrink-0" />
                  <span className="font-medium text-sm text-white">{hospital.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mandya */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="text-accent w-5 h-5" />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">Mandya</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {consultingHospitals.filter(h => h.city === "Mandya").map((hospital, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-2xl flex items-center gap-2"
                >
                  <ShieldCheck className="text-accent w-4 h-4 flex-shrink-0" />
                  <span className="font-medium text-sm text-white">{hospital.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bangalore */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="text-accent w-5 h-5" />
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">Bangalore</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {consultingHospitals.filter(h => h.city === "Bangalore").map((hospital, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-2xl flex items-center gap-2"
                >
                  <ShieldCheck className="text-accent w-4 h-4 flex-shrink-0" />
                  <span className="font-medium text-sm text-white">{hospital.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Detail Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={() => setSelectedDoctor(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-600 hover:text-primary transition-colors shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal header image */}
              <div className="h-48 md:h-72 lg:h-[420px] relative bg-lavender">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.src.includes('doctor-desk.jpg')) img.src = '/doctor-scrubs.jpg';
                    else img.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 sm:left-12 text-white">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-1">{selectedDoctor.name}</h2>
                  <p className="text-lg sm:text-xl font-medium text-blue-200">{selectedDoctor.specialty}</p>
                </div>
              </div>

              <div className="p-5 sm:p-8 md:p-12">
                <div className="space-y-8">
                  {/* Bio */}
                  <div>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Biography</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">{selectedDoctor.bio}</p>
                  </div>

                  {/* Quick stats row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/5 rounded-2xl text-primary">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-primary font-bold uppercase tracking-tighter">Experience</p>
                        <p className="font-bold text-base">{selectedDoctor.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/5 rounded-2xl text-primary">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-primary font-bold uppercase tracking-tighter">Registration</p>
                        <p className="font-bold text-base">{selectedDoctor.education}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/5 rounded-2xl text-primary">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-primary font-bold uppercase tracking-tighter">Availability</p>
                        <p className="font-bold text-base text-sm">{selectedDoctor.availability}</p>
                      </div>
                    </div>
                  </div>

                  {/* Qualifications */}
                  {selectedDoctor.qualifications && (
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Qualifications</h4>
                      <ul className="space-y-2">
                        {selectedDoctor.qualifications.map((q, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Awards */}
                  {selectedDoctor.awards && (
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Awards &amp; Recognitions</h4>
                      <ul className="space-y-2">
                        {selectedDoctor.awards.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600">
                            <span className="text-accent font-bold">★</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="tel:8105815577"
                      className="flex-1 min-w-[180px] flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                      <Phone className="w-5 h-5" /> Call Clinic
                    </a>
                    <a
                      href="mailto:canxesthealthcareclinic@gmail.com"
                      className="flex-1 min-w-[180px] flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                    >
                      <Mail className="w-5 h-5" /> Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Doctors;
