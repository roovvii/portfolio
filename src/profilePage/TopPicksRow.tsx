import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import {
  FaPassport,
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaHandsHelping,
  FaProjectDiagram,
  FaEnvelope,
  FaMusic,
  FaBook,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: 'Work Permit', imgSrc: 'https://picsum.photos/seed/workpermit/250/200', icon: <FaPassport />, route: '/work-permit' },
    { title: 'Skills', imgSrc: 'https://picsum.photos/seed/skills/250/200', icon: <FaCode />, route: '/skills' },
    { title: 'Experience', imgSrc: 'https://picsum.photos/seed/workexperience/250/200', icon: <FaBriefcase />, route: '/work-experience' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/certifications/250/200', icon: <FaCertificate />, route: '/certifications' },
    { title: 'Recommendations', imgSrc: 'https://picsum.photos/seed/recommendations/250/200', icon: <FaHandsHelping />, route: '/recommendations' },
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/projects/250/200', icon: <FaProjectDiagram />, route: '/projects' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/contact/250/200', icon: <FaEnvelope />, route: '/contact-me' },
  ],
  developer: [
    { title: 'Skills', imgSrc: 'https://picsum.photos/seed/coding/250/200', route: '/skills', icon: <FaCode /> },
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/development/250/200', route: '/projects', icon: <FaProjectDiagram /> },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/badge/250/200', route: '/certifications', icon: <FaCertificate /> },
    { title: 'Experience', imgSrc: 'https://picsum.photos/seed/work/250/200', route: '/work-experience', icon: <FaBriefcase /> },
    { title: 'Recommendations', imgSrc: 'https://picsum.photos/seed/networking/250/200', route: '/recommendations', icon: <FaHandsHelping /> },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/connect/250/200', route: '/contact-me', icon: <FaEnvelope /> },
  ],
  stalker: [
    { title: 'Recommendations', imgSrc: 'https://picsum.photos/seed/networking/250/200', route: '/recommendations', icon: <FaHandsHelping /> },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/call/250/200', route: '/contact-me', icon: <FaEnvelope /> },
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/planning/250/200', route: '/projects', icon: <FaProjectDiagram /> },
    { title: 'Experience', imgSrc: 'https://picsum.photos/seed/resume/250/200', route: '/work-experience', icon: <FaBriefcase /> },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/achievements/250/200', route: '/certifications', icon: <FaCertificate /> },
  ],
  adventure: [
    { title: 'Music', imgSrc: 'https://picsum.photos/seed/music/250/200', route: '/music', icon: <FaMusic /> },
    { title: 'Projects', imgSrc: 'https://picsum.photos/seed/innovation/250/200', route: '/projects', icon: <FaProjectDiagram /> },
    { title: 'Reading', imgSrc: 'https://picsum.photos/seed/books/250/200', route: '/reading', icon: <FaBook /> },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/seed/connect/250/200', route: '/contact-me', icon: <FaEnvelope /> },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/seed/medal/250/200', route: '/certifications', icon: <FaCertificate /> },
  ],
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  const rowRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateChevrons = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;

    const threshold = 4;
    setCanScrollLeft(el.scrollLeft > threshold);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - threshold);
  }, []);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    updateChevrons();

    const onScroll = () => updateChevrons();
    const onResize = () => updateChevrons();

    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    const t1 = window.setTimeout(updateChevrons, 100);
    const t2 = window.setTimeout(updateChevrons, 400);
    const t3 = window.setTimeout(updateChevrons, 1200);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [profile, updateChevrons]);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = rowRef.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.85);
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>

      <div className="card-row-wrapper">
        {canScrollLeft && <div className="row-fade row-fade-left" />}
        {canScrollRight && <div className="row-fade row-fade-right" />}

        {canScrollLeft && (
          <button
            type="button"
            className="chevron-btn chevron-left"
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
        )}

        {canScrollRight && (
          <button
            type="button"
            className="chevron-btn chevron-right"
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        )}

        <div className="card-row no-scrollbar" ref={rowRef}>
          {topPicks.map((pick, index) => (
            <div
              key={index}
              className="pick-card"
              onClick={() => navigate(pick.route)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={pick.imgSrc}
                alt={pick.title}
                className="pick-image"
                onLoad={updateChevrons}
                onError={updateChevrons}
              />
              <div className="overlay">
                <div className="pick-label">{pick.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPicksRow;
