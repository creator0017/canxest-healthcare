import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, BookOpen, X, Calendar, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  details: string;
  authors: string;
  upcoming?: boolean;
}

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
  publications?: Publication[];
}

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const doctors: Doctor[] = [
    {
      name: "Dr. Nischal Raj L",
      specialty: "Surgical Oncologist & Laparoscopic Surgeon",
      experience: "18+ Years",
      education: "KMC 87246",
      /* Replace /doctor-desk.jpg with the actual consultation photo */
      image: "/docesk.jpg",
      bio: "Dr. Nischal Raj L is a conscientious surgical oncologist, specializing in the diagnosis and treatment of cancer through surgery. Having performed more than 5,000 complex cancer surgeries and managed over 10,000 cancer patients, he is a leader in the field. He works closely with a team of medical and radiation oncologists to create personalized treatment plans. He is skilled in advanced surgical techniques, including minimally invasive, laparoscopic, and robotic procedures.",
      availability: "Mon, Wed, Thu, Sat: 10 AM – 1:30 PM, 5 PM – 6:30 PM | Tue, Fri: 10 AM – 1:30 PM",
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
      publications: [
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
      ],
    },
    {
      name: "Dr. Adnan Saeed",
      specialty: "Surgical Oncologist",
      experience: "23+ Years",
      education: "KMC 56939",
      image: "/dr-adnan-saeed.png",
      bio: "Dr. Adnan Saeed is a highly experienced Surgical Oncologist with over 23 years of dedicated practice in cancer surgery and comprehensive oncologic care. With specialised expertise in thyroid, breast, gastrointestinal (GI), and gynaecological cancers, Dr. Adnan Saeed is committed to delivering evidence-based, patient-centred treatment tailored to each individual’s needs. Known for a meticulous surgical approach and compassionate patient care, he has successfully managed a wide spectrum of complex oncological conditions, combining advanced surgical techniques with multidisciplinary cancer management.",
      availability: "Mon, Wed, Thu, Sat: 10 AM – 1:30 PM, 5 PM – 6:30 PM | Tue, Fri: 10 AM – 1:30 PM",
      email: "canxesthealthcareclinic@gmail.com",
      phone: "8105815577",
      qualifications: [
        "MBBS",
        "MS (General Surgery)",
        "MCh (Surgical Oncology, Kidwai)",
        "Fellowship in Minimal Access Surgery (Gold Medal)",
        "Chief of Oncology Services — Canxest Healthcare Pvt. Ltd.",
      ],
      awards: [
        "Gold Medal in Fellowship in Minimal Access Surgery",
      ],
    },
    {
      name: "Dr. Kiran P K",
      specialty: "Medical Oncology",
      experience: "14+ Years",
      education: "JSS Medical College / NBE",
      image: "/dr-kiran-pk.jpg",
      bio: "Goal oriented, in-depth knowledge and expertise in the field of Medical Oncology. Experienced with team work and motivation skills. To prevent and cure cancer through pioneering interdisciplinary research, to translate new knowledge into better prevention and treatment, and to provide effective and compassionate clinical care that improves the lives of patients with cancer and their families. Served as Assistant and Associate Professor at JSS Medical College.",
      availability: "By Appointment",
      email: "drkiranpk265@gmail.com",
      phone: "+91-9900471070",
      qualifications: [
        "MBBS (JSS Medical College, Mysore)",
        "MD General Medicine (S N Medical College, Agra) - Gold Medalist",
        "DNB Medical Oncology (National Board of Examinations)",
        "HMX Pro Immunology – Immuno-oncology (Harvard Medical School)",
        "Advanced Management of Oncological Diseases (Harvard Medical School)",
      ],
      awards: [
        "Gold Medal as Best Outgoing Resident in MD General Medicine",
      ],
      publications: [
        {
          title: "Study of Peripheral Mononuclear Cells and CD34 Levels as a Predictive Marker for Initiating Apheresis in Autologous Stem Cell Transplant",
          journal: "International Journal of Hematology-Oncology and Stem Cell Research",
          details: "July 2021, Volume 15(3), Page No 170 – 177",
          authors: "Dr. Kiran Pura Krishnamurthy, et al."
        },
        {
          title: "Development and validation of a comprehensive needs assessment tool to assess the burden of cancer chemotherapy patients",
          journal: "Journal of Cancer Research and Therapeutics",
          details: "April 2023, Volume 19 (2), S581 – S586",
          authors: "Dr. G Hari Prakash, Dr. Sunil Kumar D, Dr. Kiran PK, et al."
        },
        {
          title: "Uncommon Presentation of Multiple Myeloma: Pleural Effusion and Extensive Extramedullary Involvement",
          journal: "International Journal of Hematology-Oncology and Stem Cell Research",
          details: "Oct 2024, Volume: 18 (4), Page No 408 – 411",
          authors: "Dr. Kiran PK, Dr. G Hari Prakash, Dr. Sahana KR, Dr. Sunil Kumar D"
        },
        {
          title: "Exploring Multiple Primary Malignancies: An Institutional Experience with Dual Malignancy Cases",
          journal: "Asian Pacific Journal of Cancer Care",
          details: "Sept 2024, Volume 9(4), 699 – 704",
          authors: "Dr. Kiran PK, Dr. G Hari Prakash, Dr. Sahana KR, Dr. Radheshyam Naik"
        },
        {
          title: "Over 35+ more research publications in renowned journals",
          journal: "Various National and International Journals",
          details: "Includes BMC Cancer, Journal of Cancer Therapy, Annals of Oncology",
          authors: "Dr. Kiran P K",
          upcoming: true
        }
      ]
    },
    {
      name: "Dr. Swaroop Revannasiddaiah",
      specialty: "Medical Oncology",
      experience: "12+ Years",
      education: "MBBS, MD, DM, MRCP",
      image: "/dr-swaroop.jpg",
      bio: "Highly accomplished Consultant Medical Oncologist with expertise in solid neoplasms, hematological malignancies, and advanced radiotherapy techniques. Dedicated to integrating precision medicine and artificial intelligence into oncology. Recognized for extensive research with over 90 publications and multiple international certifications, including ESMO and MRCP (UK). Recipient of the Young Oncologist of the Year Award.",
      availability: "By Appointment",
      email: "swaroopwingman@gmail.com",
      phone: "+91-8073479938",
      qualifications: [
        "MBBS (Bangalore Medical College)",
        "MD - Radiotherapy & Clinical Oncology (Regional Cancer Centre, Shimla)",
        "DM - Medical Oncology (Ramaiah Medical College)",
        "MRCP - Medical Oncology (UK)",
        "ESMO Certification (European Society of Medical Oncology)",
        "Preceptorship in Immuno-Oncology (Singapore)",
      ],
      awards: [
        "Young Oncologist of the Year Award (2020) by ISMPO-TYSA",
        "Subject Expert in Oncology (2017) by ICCREEE",
      ],
      publications: [
        {
          title: "Osimertinib in EGFR-Mutated Advanced NSCLC",
          journal: "N Engl J Med",
          details: "2020 May 7;382(19):1864",
          authors: "Revannasiddaiah S, Devadas SK, Maka VV"
        },
        {
          title: "Further clinical interpretation and implications of KEYNOTE-048 findings",
          journal: "Lancet",
          details: "2020 Aug 8;396(10248):378",
          authors: "Revannasiddaiah S, Devadas SK, Maka VV, Kilara N"
        },
        {
          title: "A potential role for cyclophosphamide in the mitigation of acute respiratory distress syndrome among patients with SARS-CoV-2",
          journal: "Med Hypotheses",
          details: "2020 Nov;144:109850",
          authors: "Revannasiddaiah S, Kumar Devadas S, Palassery R, Kumar Pant N, Maka VV"
        },
        {
          title: "Over 85+ additional peer-reviewed publications",
          journal: "Various high-impact medical journals",
          details: "Extensive research in radiochemotherapy, immuno-oncology, and targeted therapies.",
          authors: "Dr. Swaroop Revannasiddaiah",
          upcoming: true
        }
      ]
    }
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
              Our Experts
            </span>
            <h1 className="text-2xl md:text-5xl font-bold text-primary mb-3 md:mb-4">Meet Our Doctors</h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Highly qualified, experienced, and dedicated to providing the best surgical oncology care in Mysore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Mobile Navigation Arrows */}
          <div className="flex justify-end gap-3 mb-6 lg:hidden">
            <button onClick={() => scroll('left')} className="p-2.5 rounded-full bg-slate-50 hover:bg-primary hover:text-white transition-colors text-primary border border-slate-200">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-2.5 rounded-full bg-slate-50 hover:bg-primary hover:text-white transition-colors text-primary border border-slate-200">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex lg:grid lg:grid-cols-4 gap-6 xl:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all flex flex-col flex-shrink-0 w-[85vw] sm:w-[350px] lg:w-auto snap-center"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{doctor.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-4 leading-snug">{doctor.specialty}</p>

                  <div className="space-y-3 mb-6 mt-auto">
                    <div className="flex items-start gap-2 text-slate-600 text-xs">
                      <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{doctor.experience} Experience <br/> 5,000+ Surgeries</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-600 text-xs">
                      <BookOpen className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">KMC Reg: <br/> {doctor.education}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-600 text-xs">
                      <Calendar className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{doctor.availability}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="w-full py-2.5 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all text-sm mt-auto"
                  >
                    View Full Profile
                  </button>
                </div>
              </motion.div>
            ))}
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
              <div className="h-64 md:h-96 lg:h-[480px] relative bg-lavender">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover object-center"
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

                  {/* Publications */}
                  {selectedDoctor.publications && (
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Publications
                      </h4>
                      <div className="space-y-4">
                        {selectedDoctor.publications.map((pub, i) => (
                          <div
                            key={i}
                            className={`flex gap-3 p-4 rounded-2xl border ${
                              pub.upcoming
                                ? "border-dashed border-accent/40 bg-accent/5"
                                : "border-slate-100 bg-slate-50"
                            }`}
                          >
                            <div className={`mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${pub.upcoming ? "bg-accent/50" : "bg-primary"}`} />
                            <div>
                              <p className={`font-bold text-sm leading-snug mb-1 ${pub.upcoming ? "text-accent italic" : "text-slate-800"}`}>
                                {pub.title}
                              </p>
                              {pub.journal && <p className="text-xs font-semibold text-primary mb-0.5">{pub.journal}</p>}
                              {pub.details && <p className="text-xs text-slate-500 mb-1">{pub.details}</p>}
                              {pub.authors && (
                                <p className="text-xs text-slate-600">
                                  <span className="font-semibold">Authors:</span> {pub.authors}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
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
