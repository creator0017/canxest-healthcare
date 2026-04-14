import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onBookClick: () => void;
}

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Our Doctor" },
  { to: "/stories", label: "Patient Stories" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ onBookClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMobile}>
            <img
              src="/canxest-logo.png"
              alt="Canxest Healthcare"
              className="h-9 md:h-[67px] w-auto object-contain"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = 'none';
                const span = document.createElement('span');
                span.className = 'text-2xl font-bold text-primary tracking-tight';
                span.textContent = 'Canxest Healthcare';
                img.parentElement?.appendChild(span);
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-accent" : "hover:text-accent transition-colors"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBookClick}
              className="hidden sm:flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-full font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
            >
              <User className="w-4 h-4" />
              Book Appointment
            </button>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl font-medium transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-slate-600 hover:bg-slate-50 hover:text-accent"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <button
                onClick={() => { onBookClick(); closeMobile(); }}
                className="w-full mt-3 flex items-center justify-center gap-2 bg-accent text-white px-5 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all"
              >
                <User className="w-4 h-4" />
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
