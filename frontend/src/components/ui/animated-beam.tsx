import {
  forwardRef,
  type ReactNode,
  type RefObject,
  useEffect,
  useId,
  useState,
} from "react";

import { cn } from "@/lib/utils";

type CircleProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ children, className, label }, ref) => (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/25 bg-[#081020]/95 text-[#22d3ee] shadow-[0_0_26px_rgba(0,242,255,0.2),0_12px_34px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl",
          className,
        )}
      >
        {children}
      </div>
      {label ? (
        <span className="max-w-24 text-center text-xs font-medium leading-4 text-purple-100/70">
          {label}
        </span>
      ) : null}
    </div>
  ),
);

Circle.displayName = "Circle";

type AnimatedBeamProps = {
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  className?: string;
  curvature?: number;
  reverse?: boolean;
  dotted?: boolean;
  gradientStartColor?: string;
  gradientStopColor?: string;
  endYOffset?: number;
  delay?: number;
};

type BeamPath = {
  d: string;
  width: number;
  height: number;
};

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  className,
  curvature = 0,
  reverse = false,
  dotted = false,
  gradientStartColor = "#00f2ff",
  gradientStopColor = "#ff3ec1",
  endYOffset = 0,
  delay = 0,
}: AnimatedBeamProps) {
  const id = useId().replace(/:/g, "");
  const [beamPath, setBeamPath] = useState<BeamPath>({
    d: "",
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updatePath = () => {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;

      if (!container || !from || !to) return;

      const containerRect = container.getBoundingClientRect();
      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      const startX = fromRect.left - containerRect.left + fromRect.width / 2;
      const startY = fromRect.top - containerRect.top + fromRect.height / 2;
      const endX = toRect.left - containerRect.left + toRect.width / 2;
      const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset;
      const controlX = (startX + endX) / 2;
      const controlY = (startY + endY) / 2 + curvature;

      setBeamPath({
        d: `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`,
        width: containerRect.width,
        height: containerRect.height,
      });
    };

    updatePath();

    const observer = new ResizeObserver(updatePath);
    const container = containerRef.current;
    const from = fromRef.current;
    const to = toRef.current;

    if (container) observer.observe(container);
    if (from) observer.observe(from);
    if (to) observer.observe(to);

    window.addEventListener("resize", updatePath);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [containerRef, curvature, endYOffset, fromRef, toRef]);

  if (!beamPath.d) return null;

  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      fill="none"
      height={beamPath.height}
      viewBox={`0 0 ${beamPath.width} ${beamPath.height}`}
      width={beamPath.width}
    >
      <defs>
        <linearGradient
          id={`beam-gradient-${id}`}
          gradientUnits="userSpaceOnUse"
          x1={reverse ? beamPath.width : 0}
          x2={reverse ? 0 : beamPath.width}
          y1="0"
          y2={beamPath.height}
        >
          <stop stopColor={gradientStartColor} />
          <stop offset="1" stopColor={gradientStopColor} />
        </linearGradient>
      </defs>
      <path
        d={beamPath.d}
        stroke="rgba(184,132,255,0.22)"
        strokeDasharray={dotted ? "8 10" : undefined}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        className="animated-beam-path"
        d={beamPath.d}
        pathLength="100"
        stroke={`url(#beam-gradient-${id})`}
        strokeDasharray="12 88"
        strokeLinecap="round"
        strokeWidth="2.5"
        style={{
          animationDelay: `${delay}s`,
          animationDirection: reverse ? "reverse" : "normal",
          filter: `drop-shadow(0 0 8px ${gradientStartColor})`,
        }}
      />
    </svg>
  );
}
