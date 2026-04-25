import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onBookClick: () => void;
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Our Doctors" },
  { to: "/contact", label: "Contact" },
];

/* ── Modern Instagram SVG with full gradient (self-contained defs) ── */
const InstagramIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id={`ig-rg-${size}`} cx="30%" cy="107%" r="150%">
        <stop offset="0%"  stopColor="#fdf497" />
        <stop offset="5%"  stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    {/* Background rounded square */}
    <rect x="1" y="1" width="22" height="22" rx="6" fill={`url(#ig-rg-${size})`} />
    {/* Camera lens circle */}
    <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.8" />
    {/* Flash dot */}
    <circle cx="17.5" cy="6.5" r="1.1" fill="#fff" />
    {/* Outer rounded square (inner stroke) */}
    <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="#fff" strokeWidth="1.5" />
  </svg>
);

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
                img.style.display = "none";
                const span = document.createElement("span");
                span.className = "text-2xl font-bold text-primary tracking-tight";
                span.textContent = "Canxest Healthcare";
                img.parentElement?.appendChild(span);
              }}
            />
          </Link>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  isActive ? "text-accent" : "hover:text-accent transition-colors"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop right area: Instagram | Book Appointment | Hamburger */}
          <div className="flex items-center gap-3">
            {/* Instagram — between Contact and Book Appointment */}
            <a
              href="https://www.instagram.com/canxesthealthcare?igsh=Znh4eHg2a3hnbTQ5"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex hover:opacity-80 transition-opacity items-center justify-center"
              aria-label="Instagram"
            >
              <InstagramIcon size={30} />
            </a>

            {/* Book Appointment */}
            <button
              onClick={onBookClick}
              className="hidden sm:flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-full font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
            >
              <User className="w-4 h-4" />
              Book Appointment
            </button>

            {/* Hamburger (mobile only) */}
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
                  end={to === "/"}
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

              {/* Mobile bottom row: Book + Instagram */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => { onBookClick(); closeMobile(); }}
                  className="flex-1 flex items-center justify-center gap-2 bg-accent text-white px-5 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all"
                >
                  <User className="w-4 h-4" />
                  Book Appointment
                </button>
                <a
                  href="https://www.instagram.com/canxesthealthcare?igsh=Znh4eHg2a3hnbTQ5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                  onClick={closeMobile}
                >
                  <InstagramIcon size={32} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
