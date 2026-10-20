import Reveal from "./Reveal";

export default function SectionHead({
  index,
  eyebrow,
  heading,
  subtitle,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  heading: { start: string; accent: string };
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={`sec-head sec-head--${align}`}>
      <span className="eyebrow">
        <span className="eyebrow__num">{index}</span>
        <span className="eyebrow__line" />
        {eyebrow}
      </span>
      <h2 className="title">
        {heading.start} <em className="accent">{heading.accent}</em>
      </h2>
      {subtitle && <p className="lead">{subtitle}</p>}
    </Reveal>
  );
}
