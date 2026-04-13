import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "motion/react";
import { User } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import PatientStories from "./pages/PatientStories";
import Contact from "./pages/Contact";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar onBookClick={openBooking} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onBookClick={openBooking} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services onBookClick={openBooking} />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/stories" element={<PatientStories />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating Book Now Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openBooking}
          className="fixed bottom-8 right-8 z-50 bg-accent text-white p-4 rounded-full shadow-2xl shadow-accent/40 flex items-center justify-center group overflow-hidden"
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

        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </Router>
  );
}
