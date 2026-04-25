import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, MessageCircle, Clock, Loader2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  date: string;
  service: string;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    service: "Oncology Consultation",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) return;

    setLoading(true);

    const formattedDate = new Date(form.date).toLocaleDateString("en-IN", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    const message =
      `🏥 *New Appointment Request — Canxest Healthcare*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Patient Phone:* ${form.phone}\n` +
      `📅 *Preferred Date:* ${formattedDate}\n` +
      `🩺 *Service:* ${form.service}\n\n` +
      `_Booked via Canxest Healthcare website._`;

    const waUrl = `https://wa.me/918105815577?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", phone: "", date: "", service: "Oncology Consultation" });
      onClose();
    }, 800);
  };

  const handleClose = () => {
    setForm({ name: "", phone: "", date: "", service: "Oncology Consultation" });
    setLoading(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60]"
        >
          {/* Backdrop */}
          <div
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative max-h-[95vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              <div className="grid md:grid-cols-5 h-full">
                {/* Left Sidebar */}
                <div className="hidden md:flex md:col-span-2 bg-primary p-8 text-white flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Book Your Visit</h3>
                    <p className="text-blue-100 text-sm leading-relaxed mb-8">
                      Fill the form and your appointment will be added to our calendar. We'll confirm within 2 hours.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <Phone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-blue-300">Call Us</p>
                          <p className="text-sm font-semibold">+91 81058 15577</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-blue-300">WhatsApp</p>
                          <p className="text-sm font-semibold">+91 81058 15577</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">
                      <Clock className="w-3 h-3" /> Timings
                    </div>
                    <p className="text-sm">Mon – Sat: 10 AM – 1:30 PM</p>
                    <p className="text-sm">5 PM – 6:30 PM</p>
                  </div>
                </div>

                {/* Right Side — Form */}
                <div className="md:col-span-3 p-5 md:p-8">
                  {/* Mobile top bar */}
                  <div className="md:hidden bg-primary rounded-xl p-4 mb-5 text-white flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm">Book Your Visit</p>
                      <p className="text-blue-200 text-xs">Confirmed within 2 hours</p>
                    </div>
                    <a href="tel:8105815577" className="bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold">
                      Call Us
                    </a>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all text-sm"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all text-sm"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Preferred Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all text-sm bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Service</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all text-sm bg-white"
                      >
                        <option>Oncology Consultation</option>
                        <option>Surgical Procedure</option>
                        <option>Lab Test at Home</option>
                        <option>Medical Certificate</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent text-white py-4 rounded-2xl font-bold text-sm hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Opening WhatsApp...</>
                      ) : (
                        <><MessageCircle className="w-4 h-4" /> Confirm Appointment</>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-slate-400 mt-2">
                      Your details will be sent to us via WhatsApp for confirmation.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
