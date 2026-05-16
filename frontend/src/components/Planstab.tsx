import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi } from "lucide-react";
import { useState, useEffect } from "react";

type Plan = {
  speed: string;
  info1: string;
  info2: string;
  features: string[];
  price: Array<number | string>;
};

const fallbackPlans: Plan[] = [
  {
    speed: "50 Mbps",
    info1: "Unlimited Data",
    info2: "Home WiFi",
    features: ["1 Month", "3 Months", "6 Months"],
    price: [499, 1399, 2699],
  },
  {
    speed: "100 Mbps",
    info1: "Unlimited Data",
    info2: "Fiber Internet",
    features: ["1 Month", "3 Months", "6 Months"],
    price: [699, 1999, 3799],
  },
  {
    speed: "200 Mbps",
    info1: "Unlimited Data",
    info2: "Priority Speed",
    features: ["1 Month", "3 Months", "6 Months"],
    price: [999, 2899, 5499],
  },
];

const Planstab = ({ showViewAll = false }: { showViewAll?: boolean }) => {
  const [selectedPlan, setSelectedPlan] = useState<Record<string, number>>({});
  const [plans, setPlans] = useState<Plan[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  

  const handleSelectPlan = (p: Plan) => {
    const selectedIndex = selectedPlan[p.speed];
    if (selectedIndex === undefined || selectedIndex === null) {
      setErrors((prev) => ({ ...prev, [p.speed]: "Please select a month plan first" }));
      return;
    }
    setErrors((prev) => ({ ...prev, [p.speed]: "" }));
    const month = p.features[selectedIndex];
    const price = p.price[selectedIndex];
    const msg = `Hii Ekasit, I want to enquire about the ${p.speed} plan priced at ₹${price} for ${month}.`;
    window.open(`https://wa.me/917821025283?text=${encodeURIComponent(msg)}`, "_blank");
  };

  useEffect(() => {
    fetch("/api/get_plans")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Plans API failed with status ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Plans API did not return an array");
        }

        setPlans(data);
      })
      .catch((err) => {
        console.log(err);

        if (import.meta.env.DEV) {
          setPlans(fallbackPlans);
        }
      });
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#070012] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(132,36,255,0.18),transparent_28rem)]" />
      <div className="relative z-10 container px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl md:text-6xl font-medium text-center text-[#d8c8ea] drop-shadow-[0_0_36px_rgba(149,74,255,0.32)]">
            Our Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, planIndex) => (
            <div
              key={p.speed}
              className={`relative animate-rise overflow-hidden rounded-2xl border bg-[#090016]/90 p-5 text-center backdrop-blur-xl transition-all duration-300 ${
                planIndex === 1
                  ? "border-purple-400/55 shadow-[0_0_52px_rgba(132,36,255,0.38),inset_0_1px_0_rgba(255,255,255,0.12)] lg:scale-[1.04]"
                  : "border-purple-300/20 shadow-[0_0_28px_rgba(132,36,255,0.14),inset_0_1px_0_rgba(255,255,255,0.07)] hover:border-purple-400/35 hover:shadow-[0_0_42px_rgba(132,36,255,0.26)]"
              }`}
            >
              {/* Grid overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(179,119,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(179,119,255,0.05)_1px,transparent_1px)] bg-[size:84px_84px]" />

              {planIndex === 1 && (
                <div className="absolute right-5 top-5 rounded-full border border-purple-300/35 bg-purple-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-100 shadow-[0_0_14px_rgba(139,92,246,0.28)]">
                  Featured
                </div>
              )}

              <div className="relative z-10 p-6">
                <div className="flex items-center justify-center gap-2 mb-[48px] text-[#b884ff]">
                  <Wifi className="h-7 w-7" />
                  <h3 className="font-bold text-[36px] text-[#d8c8ea]">{p.speed}</h3>
                </div>

                <div className="flex justify-between border-b border-purple-300/18 pb-5 text-sm text-purple-100/60">
                  <p>{p.info1}</p>
                  <p className="text-purple-100/85">{p.info2}</p>
                </div>

                {/* Duration selector */}
                <ul className="flex gap-2 bg-[#050009]/60 mt-5 mb-[48px] p-1 rounded-full justify-around border border-purple-300/12 backdrop-blur-xl">
                  {p.features.map((f, index) => (
                    <li
                      key={f}
                      onClick={() =>
                        setSelectedPlan((prev) => ({ ...prev, [p.speed]: index }))
                      }
                      className={`custom-choice px-3 py-2 flex-1 rounded-full cursor-pointer text-sm ${
                        selectedPlan[p.speed] === index ? "custom-choice-active" : ""
                      }`}
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6 flex flex-col items-center gap-1">
                  <span className="text-3xl font-extrabold text-[#d8c8ea]">
                    <span className="text-sm align-super font-medium text-[#b884ff]">₹</span>
                    {p.price[selectedPlan[p.speed] || 0]}
                  </span>
                  <span className="text-purple-100/45 text-sm">(All prices include GST)</span>
                </div>

                {errors[p.speed] && (
                  <p className="text-red-400 text-xs mb-3">{errors[p.speed]}</p>
                )}
                <Button
                  onClick={() => handleSelectPlan(p)}
                  className="w-full rounded-full border border-purple-200/40 bg-gradient-to-r from-[#7614ff] via-[#8b22ff] to-[#a955ff] font-semibold text-white shadow-[0_0_28px_rgba(132,36,255,0.55),inset_0_-4px_12px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(167,96,255,0.72)] uppercase"
                >
                  Select Plan
                </Button>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="flex justify-center mt-10">
            <Link
              to="/plans"
              className="rounded-full border border-purple-300/35 bg-purple-500/20 px-6 py-2.5 text-sm font-semibold text-purple-100 hover:bg-purple-500/35 transition-colors"
            >
              View All
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Planstab;
