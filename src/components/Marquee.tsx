export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const content = items.join("    ✦    ") + "    ✦    ";

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <div className="inline-flex animate-marquee">
        <span className="pr-0">{content}</span>
        <span className="pr-0" aria-hidden>
          {content}
        </span>
      </div>
    </div>
  );
}
