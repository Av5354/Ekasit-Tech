import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative isolate overflow-hidden bg-[#070012] py-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(132,36,255,0.42),transparent_22rem),linear-gradient(180deg,#080012_0%,#070012_54%,#0b0216_100%)]" />
        <div className="hero-grid absolute inset-x-0 top-0 mx-auto h-full max-w-[1300px] opacity-75" />
        <div className="hero-checkers hero-checkers-left" />
        <div className="hero-checkers hero-checkers-right" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-300/35 bg-purple-500/20 px-4 py-2 text-xs font-medium uppercase tracking-wider text-purple-100 shadow-[0_0_28px_rgba(139,92,246,0.28)] backdrop-blur-2xl">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#efe1ff] drop-shadow-[0_0_42px_rgba(149,74,255,0.38)] mb-6">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-[#9f63ff] via-[#b884ff] to-[#e8d8ff] bg-clip-text text-transparent">
              Connection
            </span>
          </h1>
          <p className="text-purple-100/70 max-w-3xl mx-auto text-base leading-8">
            Reach out for fast, reliable support and seamless connectivity
            solutions tailored to your needs. Our team is ready to assist you
            anytime.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#070012]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(132,36,255,0.18),transparent_26rem)]" />
        <div className="relative z-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;
