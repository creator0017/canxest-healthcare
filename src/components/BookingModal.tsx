import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Phone, MessageCircle, Calendar, Clock, CheckCircle2, Loader2 } from "lucide-react";

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

type Status = "idle" | "loading" | "success" | "error";

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", date: "", service: "Oncology Consultation" });
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) {
      setStatus("error");
      setMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setForm({ name: "", phone: "", date: "", service: "Oncology Consultation" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Unable to connect to the server. Please call us directly.");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setMessage("");
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
              className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              <div className="grid md:grid-cols-5 h-full">
                {/* Left Sidebar */}
                <div className="md:col-span-2 bg-primary p-8 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Book Your Visit</h3>
                    <p className="text-blue-100 text-sm leading-relaxed mb-8">
                      Schedule a consultation with our oncology specialists. We'll confirm your slot within 2 hours.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <Phone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-blue-300">Call Us</p>
                          <p className="text-sm font-semibold">8105815577</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-blue-300">WhatsApp</p>
                          <p className="text-sm font-semibold">8105815577</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">
                      <Clock className="w-3 h-3" /> Timings
                    </div>
                    <p className="text-sm">Mon - Sat: 10 AM - 1:30 PM</p>
                    <p className="text-sm">5 PM - 6:30 PM</p>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:col-span-3 p-8">
                  {status === "success" ? (
                    <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                      <CheckCircle2 className="w-16 h-16 text-green-500" />
                      <h4 className="text-2xl font-bold text-primary">Appointment Requested!</h4>
                      <p className="text-slate-600">{message}</p>
                      <button
                        onClick={handleClose}
                        className="mt-4 bg-accent text-white px-8 py-3 rounded-full font-bold hover:bg-accent/90 transition-all"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
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

                      {status === "error" && (
                        <p className="text-red-500 text-xs font-medium">{message}</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-accent text-white py-4 rounded-2xl font-bold text-sm hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Booking...</>
                        ) : (
                          <><Calendar className="w-4 h-4" /> Confirm Appointment</>
                        )}
                      </button>

                      <p className="text-[10px] text-center text-slate-400 mt-4">
                        By clicking confirm, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  )}
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
