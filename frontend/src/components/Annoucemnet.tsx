import { cn } from "@/lib/utils";

type ScrollBaseAnimationProps = {
  children: React.ReactNode;
  baseVelocity?: number;
  clasname?: string;
  scrollDependent?: boolean;
  delay?: number;
};

function ScrollBaseAnimation({
  children,
  baseVelocity = -5,
  clasname,
  delay = 0,
}: ScrollBaseAnimationProps) {
  const duration = `${Math.max(12, 70 / Math.abs(baseVelocity))}s`;

  return (
    <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
      <div
        className="announcement-track flex flex-nowrap gap-10 whitespace-nowrap"
        style={{
          animationDuration: duration,
          animationDelay: `${delay}ms`,
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className={cn("block text-sm sm:text-base", clasname)}
          >
            {children}
          </span>
        ))}
      </div>
    </div>
  );
}

const Announcement = () => {
  return (
    <section className="relative flex items-center border-y border-purple-300/15 bg-purple-400/5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_34px_rgba(132,36,255,0.1)] backdrop-blur-2xl">
      <ScrollBaseAnimation
        baseVelocity={-5}
        clasname="text-base sm:text-lg font-medium text-purple-100/85"
      >
        <span className="mr-10">Ultra-Fast Fiber Internet Now Live</span>
        <span className="mr-10">Unlimited Plans Available</span>
        <span className="mr-10">24/7 Customer Support</span>
        <span className="mr-10">Serving Your Area Now</span>
        <span className="mr-10">Special Launch Offers</span>
      </ScrollBaseAnimation>
    </section>
  );
};

export default Announcement;
