import { Card } from "@/components/ui/card";
import broadbandImg from "@/assets/broadband.jpg";
import fiberImg from "@/assets/fiber.jpg";
import wifiImg from "@/assets/wifi.jpg";
import businessImg from "@/assets/business.jpg";

const services = [
  { title: "Broadband Internet", img: broadbandImg },
  { title: "Fiber Connection", img: fiberImg },
  { title: "WiFi Setup", img: wifiImg },
  { title: "Business Internet", img: businessImg },
];

const Services = () => (
  <div>
    <section className="page-hero py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="soft-heading-glow text-4xl font-extrabold mb-2 text-white">Our Services</h1>
        <p className="text-white/70">What we offer</p>
      </div>
    </section>

    <section className="ai-section px-4 py-16">
      <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="glass-card group overflow-hidden cursor-pointer rounded-2xl">
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-white">{s.title}</h3>
            </div>
          </Card>
        ))}
      </div>
      </div>
    </section>
  </div>
);

export default Services;
