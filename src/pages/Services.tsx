import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, ChevronRight, X, Info, MapPin } from "lucide-react";

interface ServicesProps {
  onBookClick: () => void;
}

const Services = ({ onBookClick }: ServicesProps) => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const specializedProcedures = [
    {
      title: "Thyroid Cancer",
      desc: "Specialized surgical management for thyroid nodules and malignancies.",
      fullDesc: "Our thyroid cancer services include comprehensive evaluation of thyroid nodules, total thyroidectomy, and advanced neck dissections. We focus on preserving the parathyroid glands and laryngeal nerves while ensuring complete tumor removal.",
      image: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/blogs/october2023/detail-main-Thyroid-Cancer.jpeg?w=828&q=75"
    },
    {
      title: "Breast Cancer",
      desc: "Comprehensive care including lumpectomy and oncoplastic reconstruction.",
      fullDesc: "We offer a full range of breast cancer surgeries, from breast-conserving lumpectomies to radical mastectomies. Our expertise in oncoplastic reconstruction ensures that patients achieve the best possible aesthetic outcomes alongside curative treatment.",
      image: "https://ascensushealth.b-cdn.net/wp-content/uploads/2025/02/blog-breast-symptoms.jpg"
    },
    {
      title: "Intestinal Cancers",
      desc: "Advanced surgical treatment for stomach, colon, and rectal cancers.",
      fullDesc: "Specializing in the surgical management of gastrointestinal malignancies. We utilize laparoscopic and minimally invasive techniques for stomach (gastrectomy), colon (colectomy), and rectal cancer surgeries to promote faster recovery and less pain.",
      image: "https://www.roswellpark.org/sites/default/files/styles/max_1300x1300/public/adobestock_66830781.jpg?itok=07pqTXgF"
    },
    {
      title: "Liver and Pancreatic Cancer",
      desc: "Complex hepatobiliary surgeries for liver and pancreatic tumors.",
      fullDesc: "Our team performs highly complex procedures such as the Whipple's procedure for pancreatic cancer, liver resections for primary and metastatic tumors, and surgeries for bile duct malignancies (cholangiocarcinoma).",
      image: "https://www.parkwaycancercentre.com/images/default-source/cancer-type/pcc_pancreatic-cancer_en.webp?sfvrsn=d2a0faec_1"
    },
    {
      title: "Gynaecological Cancer",
      desc: "Expert surgical care for cervical and uterine cancers.",
      fullDesc: "Comprehensive surgical management for cervical, uterine, and vulvar cancers. We specialize in radical hysterectomies, pelvic lymphadenectomy, and staging procedures to provide targeted and effective treatment.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6CO6_-bg8Wvk9YAzrUKPfmGWllQ2q9Oa_g&s"
    },
    {
      title: "Kidney and Bladder Cancer",
      desc: "Surgical treatment for renal and bladder malignancies.",
      fullDesc: "We provide advanced surgical options for urological cancers, including partial and radical nephrectomy for kidney tumors, and transurethral resection or cystectomy for bladder cancer, often utilizing minimally invasive approaches.",
      image: "https://drsanjoyroy.com/wp-content/uploads/2021/09/Genitourinary-Malignancies-2-1024x683.jpg"
    },
    {
      title: "Neck Cancer",
      desc: "Comprehensive management of head and neck malignancies.",
      fullDesc: "Specialized care for oral cavity, larynx, pharynx, and salivary gland cancers. Our surgical approach focuses on complete tumor clearance while prioritizing the preservation of speech, swallowing, and appearance.",
      image: "https://www.oncoplus.co.in/wp-content/uploads/2024/07/head-and-neck-cancer-treatment.png"
    },
    {
      title: "Ovarian Cancer",
      desc: "Specialized cytoreductive surgery and staging for ovarian malignancies.",
      fullDesc: "Ovarian cancer requires meticulous surgical staging and cytoreduction (debulking). We are experts in performing extensive surgeries to remove all visible tumor, which is critical for the success of subsequent chemotherapy.",
      image: "https://dkygqlsdsxtj9.cloudfront.net/assets/images/blogs/blogDetails/overian1.png"
    },
    {
      title: "Prostate Cancer",
      desc: "Advanced surgical management focusing on nerve-sparing techniques.",
      fullDesc: "For localized prostate cancer, we offer radical prostatectomy with a focus on nerve-sparing techniques to preserve urinary continence and sexual function. We coordinate closely with radiation oncologists for multi-modal care.",
      image: "https://urologicsurgerynwi.com/wp-content/uploads/2024/11/prostate-cancer.png"
    },
    {
      title: "Lung Cancer",
      desc: "Thoracic surgical procedures for lung nodules and malignancies.",
      fullDesc: "Our thoracic oncology services include lobectomy, pneumonectomy, and wedge resections for lung cancer. We also perform diagnostic procedures like mediastinoscopy and VATS (Video-Assisted Thoracoscopic Surgery).",
      image: "https://images.emedicinehealth.com/images/article/main_image/lung-cancer.jpg?output-quality=75"
    }
  ];

  return (
    <div className="pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="py-10 md:py-20 bg-cyan-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-white text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider inline-block">Our Expertise</span>
            <h1 className="text-2xl md:text-5xl font-bold text-primary mb-4 md:mb-6">Treatments & Services</h1>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We provide a full spectrum of oncology services, from initial diagnosis to complex surgical interventions and post-operative care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES / TREATMENTS OFFERED ─── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Services / Treatments Offered</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Core Oncology Services */}
            <div className="bg-lavender rounded-3xl p-6 md:p-10">
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-5">Core Oncology Services</h3>
              <ul className="space-y-3">
                {[
                  'Comprehensive cancer opinion',
                  'Surgical oncology',
                  'Medical oncology',
                  'Immunotherapy',
                  'Radiation oncology',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialized Procedures */}
            <div className="bg-blush rounded-3xl p-6 md:p-10">
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-5">Specialized Procedures</h3>
              <ul className="space-y-3">
                {[
                  'Breast cancer and reconstructive surgery',
                  'Thyroid surgery',
                  'Gynaecological cancer surgeries',
                  'Oral cancer surgery',
                  'GI and pancreatic / liver cancer procedures',
                  'Kidney, bladder and prostate cancer surgeries',
                  'Soft tissue and bone cancer surgeries',
                  'Lung and thoracic cancer surgeries',
                  'Laparoscopic and robotic surgeries',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Procedures */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {specializedProcedures.map((proc, idx) => (
              <div key={idx} className="bg-white rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
                <div className="h-44 md:h-64 overflow-hidden relative">
                  <img src={proc.image} alt={proc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-5 md:p-8">
                  <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">{proc.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{proc.desc}</p>
                  <button
                    onClick={() => setSelectedService(proc)}
                    className="text-accent font-bold flex items-center gap-2 group/btn"
                  >
                    View Details <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors z-20"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              <div className="h-44 md:h-64 overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 md:p-10">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-lavender rounded-xl md:rounded-2xl flex items-center justify-center">
                    <Info className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-primary">{selectedService.title}</h2>
                </div>

                <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                  {selectedService.fullDesc}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    className="flex-1 bg-primary text-white py-4 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    onClick={() => {
                      setSelectedService(null);
                      onBookClick();
                    }}
                  >
                    Consult Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hospital Tie-ups */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl md:rounded-[3rem] p-5 md:p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">Hospital Attachments & Tie-ups</h2>
              <p className="text-blue-100 text-sm md:text-lg mb-6 md:mb-12 leading-relaxed max-w-3xl">
                Dr. Nischal Raj L has surgical privileges and is a visiting consultant at 20+ leading hospitals across Mysore, Mandya, and Bangalore, ensuring seamless inpatient care and advanced surgical facilities.
              </p>

              {[
                {
                  city: "Mysore",
                  hospitals: [
                    "Manipal Hospital", "Brindavan Hospital", "Nirmala Hospital",
                    "Clearmedi Radiant", "Apollo Hospital", "Bharath Hospital",
                    "CEG Hospital", "New Priyadarshini Hospital", "Sigma Hospital",
                    "Suyog Hospital", "Avant BKG Hospital", "Ramakrishna Hospital",
                    "Madeshwara Hospital", "Supriya Hospital", "NJ Hospital",
                  ],
                },
                {
                  city: "Mandya",
                  hospitals: ["Spandana Hospital", "Archana Hospital", "Pragathi Hospital"],
                },
                {
                  city: "Bangalore",
                  hospitals: ["Trustwell Hospital", "HCG Hospital"],
                },
              ].map((group) => (
                <div key={group.city} className="mb-10 last:mb-0">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="text-accent w-5 h-5 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-accent uppercase tracking-wider">{group.city}</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {group.hospitals.map((hospital, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3">
                        <ShieldCheck className="text-accent w-4 h-4 flex-shrink-0" />
                        <span className="font-medium text-sm">{hospital}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
