import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import './Skills.css';
import { skillsPageContent } from '../queries/localContent';

type SkillItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Constant speed for ALL rows (pixels per second). Lower = slower.
const SPEED_PX_PER_SEC = 35;

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="skills-section-title">
      <span className="skills-red-line" />
      <h2 className="skills-heading">{title}</h2>
    </div>
  );
}

function MarqueeRow({ items }: { items: SkillItem[] }) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);
  const [durationSeconds, setDurationSeconds] = useState<number>(60);

  // Make sure small categories (like 2 items) are repeated enough so the track is long.
  const filled = useMemo(() => {
    const out: SkillItem[] = [...items];
    // Repeat until we have a reasonable minimum count
    while (out.length < 18) out.push(...items);
    return out;
  }, [items]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;

    const compute = () => {
      // Ensure group is at least wider than the viewport (helps avoid gaps)
      const viewportW = viewport.getBoundingClientRect().width;
      const groupW = group.scrollWidth;

      // Distance traveled per loop = width of ONE group
      const distancePx = Math.max(groupW, viewportW * 1.2);

      // Duration so that px/sec is constant across ALL rows
      const seconds = distancePx / SPEED_PX_PER_SEC;

      // Keep it slow and stable (avoid extremely short durations)
      setDurationSeconds(Math.max(35, Math.round(seconds)));
    };

    compute();

    // Recompute on resize (responsive)
    const ro = new ResizeObserver(compute);
    ro.observe(viewport);
    ro.observe(group);

    return () => ro.disconnect();
  }, [filled]);

  return (
    <div className="skills-marquee" ref={viewportRef}>
      <div
        className="skills-track"
        style={{ ['--marquee-duration' as any]: `${durationSeconds}s` }}
      >
        <div className="skills-group" ref={groupRef}>
          {filled.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span className="skills-chip" key={`a-${item.label}-${idx}`}>
                <Icon className="skills-chip-icon" />
                <span className="skills-chip-text">{item.label}</span>
              </span>
            );
          })}
        </div>

        {/* Duplicate group for true seamless loop */}
        <div className="skills-group" aria-hidden="true">
          {filled.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span className="skills-chip" key={`b-${item.label}-${idx}`}>
                <Icon className="skills-chip-icon" />
                <span className="skills-chip-text">{item.label}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="skills-page">
      <section className="skills-section">
        <SectionTitle title="Core Stack" />
        <MarqueeRow items={skillsPageContent.coreStack} />
      </section>

      {skillsPageContent.categories.map((cat) => (
        <section className="skills-section" key={cat.title}>
          <SectionTitle title={cat.title} />
          <MarqueeRow items={cat.items} />
        </section>
      ))}
    </div>
  );
}
