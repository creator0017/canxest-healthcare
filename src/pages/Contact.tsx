import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    service: "Oncology Consultation",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setStatus("error");
      setResponseMsg("Name and phone number are required.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message);
        setForm({ name: "", phone: "", service: "Oncology Consultation", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Unable to connect to the server. Please call us directly.");
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-white text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-4 uppercase tracking-wider inline-block">Get in Touch</span>
            <h1 className="text-5xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have questions or want to book an appointment? We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-lavender rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Address</h4>
                      <p className="text-slate-600">17/2C, KRS Main Road, Next to CEG Hospital, Gokulam 1st Stage, VV Mohalla, Mysore 570002</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-lavender rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Phone</h4>
                      <a href="tel:8105815577" className="text-slate-600 hover:text-accent transition-colors">8105815577</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-lavender rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">WhatsApp</h4>
                      <a
                        href="https://wa.me/918105815577"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-accent transition-colors"
                      >
                        8105815577
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-lavender rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Email</h4>
                      <a href="mailto:canxesthealthcareclinic@gmail.com" className="text-slate-600 hover:text-accent transition-colors break-all">
                        canxesthealthcareclinic@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Clock className="text-accent w-6 h-6" /> OPD Timings
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                    <span className="font-semibold text-slate-700">Mon - Sat</span>
                    <div className="text-right">
                      <p className="text-primary font-bold">10:00 AM - 1:30 PM</p>
                      <p className="text-primary font-bold">5:00 PM - 6:30 PM</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                    <span className="font-semibold text-slate-700">Sunday</span>
                    <span className="text-slate-500 font-bold italic">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-primary mb-8">Book an Appointment</h2>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center text-center gap-4 py-16">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                    <h4 className="text-2xl font-bold text-primary">Message Sent!</h4>
                    <p className="text-slate-600 max-w-sm">{responseMsg}</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Service Required</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white"
                      >
                        <option>Oncology Consultation</option>
                        <option>Surgical Procedure</option>
                        <option>Lab Test at Home</option>
                        <option>Medical Certificate</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Message (Optional)</label>
                      <textarea
                        rows={4}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {status === "error" && (
                      <p className="md:col-span-2 text-red-500 text-sm font-medium">{responseMsg}</p>
                    )}

                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                        ) : (
                          <><Send className="w-5 h-5" /> Confirm Booking</>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-24">
            <div className="w-full h-[425px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-inner border border-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.662862842426!2d76.6341233!3d12.3384211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb433b9b3b3b3b%3A0x3afb433b9b3b3b3b!2sCanxest%20Healthcare%20Clinic!5e0!3m2!1sen!2sin!4v1712918400000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Canxest Healthcare Clinic Location"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://share.google/O1z8NkywN0lSbR8m2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
