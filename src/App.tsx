import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import { User, Share2, X, Instagram, Youtube, Phone } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import BookingModal from "./components/BookingModal";

/* WhatsApp SVG icon */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const socialLinks = [
  {
    href: "https://youtube.com/@canxesthealthcare",
    bg: "#FF0000",
    shadow: "rgba(255,0,0,0.35)",
    icon: <Youtube className="w-5 h-5 text-white" />,
    label: "YouTube",
  },
  {
    href: "https://instagram.com/canxesthealthcare",
    bg: "radial-gradient(circle at 30% 110%, #fdf497, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    shadow: "rgba(214,36,159,0.35)",
    icon: <Instagram className="w-5 h-5 text-white" />,
    label: "Instagram",
  },
  {
    href: "https://wa.me/918105815577",
    bg: "#25D366",
    shadow: "rgba(37,211,102,0.35)",
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
  },
];

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar onBookClick={openBooking} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onBookClick={openBooking} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services onBookClick={openBooking} />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating buttons — bottom RIGHT (call above, book below) */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
          {/* Call button */}
          <motion.a
            href="tel:8105815577"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-green-500 rounded-full -z-10"
            />
            <Phone className="w-6 h-6 relative z-10" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold relative z-10">
              Call Now
            </span>
          </motion.a>

          {/* Book Appointment button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openBooking}
            className="bg-accent text-white p-4 rounded-full shadow-2xl shadow-accent/40 flex items-center justify-center group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent rounded-full -z-10"
            />
            <User className="w-6 h-6 relative z-10" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold relative z-10">
              Book Now
            </span>
          </motion.button>
        </div>

        {/* Social Speed Dial Removed */}

        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </Router>
  );
}
