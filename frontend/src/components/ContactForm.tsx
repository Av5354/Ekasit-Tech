import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "rounded-full border border-purple-300/20 bg-[#080012]/80 text-purple-100 placeholder:text-purple-100/40 focus-visible:ring-1 focus-visible:ring-[#8b22ff] focus-visible:border-purple-400/50 transition-colors";

  return (
    <section className="container mx-auto px-4 py-10 sm:py-16">
      <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto lg:grid-cols-2 lg:gap-12">
        {/* Form card */}
        <div className="relative overflow-hidden rounded-2xl border border-purple-300/20 bg-[#090016]/90 p-8 shadow-[0_0_42px_rgba(132,36,255,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(179,119,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(179,119,255,0.06)_1px,transparent_1px)] bg-[size:84px_84px] pointer-events-none" />
          <div className="absolute left-1/2 top-0 h-24 w-64 -translate-x-1/2 rounded-full bg-[#8b22ff]/25 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-6 text-[#d8c8ea] drop-shadow-[0_0_18px_rgba(149,74,255,0.4)]">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className={inputClass}
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className={inputClass}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="rounded-2xl border border-purple-300/20 bg-[#080012]/80 text-purple-100 placeholder:text-purple-100/40 focus-visible:ring-1 focus-visible:ring-[#8b22ff] focus-visible:border-purple-400/50 transition-colors"
              />
              <Button
                type="submit"
                className="w-full rounded-full border border-purple-200/40 bg-gradient-to-r from-[#7614ff] via-[#8b22ff] to-[#a955ff] font-semibold text-white shadow-[0_0_28px_rgba(132,36,255,0.55),inset_0_-4px_12px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(167,96,255,0.72)]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Info + map */}
        <div className="space-y-8">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "+91 98765 43210" },
              { icon: Mail, label: "info@ekasittech.com" },
              { icon: MapPin, label: "EKASIT TECH, India" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-2xl border border-purple-300/18 bg-[#090016]/80 p-4 shadow-[0_0_22px_rgba(132,36,255,0.14),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/35 hover:shadow-[0_0_32px_rgba(132,36,255,0.26)]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7614ff] to-[#b884ff] text-white shadow-[0_0_18px_rgba(132,36,255,0.45)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="text-purple-100/85">{c.label}</span>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-purple-300/18 shadow-[0_0_28px_rgba(132,36,255,0.18)] h-48 sm:h-56">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672000!2d78.9629!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM1JzM3LjMiTiA3OMKwNTcnNDYuNCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
