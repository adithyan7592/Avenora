import useInView from "../hooks/useInView.js";

// Wraps any element and fades + slides it up the first time it scrolls
// into view. `delay` (ms) lets a list stagger its children, e.g.
// items.map((item, i) => <Reveal delay={i * 80}>...</Reveal>)
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}