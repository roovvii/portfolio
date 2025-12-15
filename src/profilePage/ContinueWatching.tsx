import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: 'Music', imgSrc: 'https://picsum.photos/id/1025/300/200', link: '/music' },
    { title: 'Reading', imgSrc: 'https://picsum.photos/id/1026/300/200', link: '/reading' },
    { title: 'Blogs', imgSrc: 'https://picsum.photos/id/1027/300/200', link: '/blogs' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/id/1029/300/200', link: '/contact-me' },
  ],
  developer: [
    { title: 'Music', imgSrc: 'https://picsum.photos/id/1025/300/200', link: '/music' },
    { title: 'Reading', imgSrc: 'https://picsum.photos/id/1026/300/200', link: '/reading' },
    { title: 'Blogs', imgSrc: 'https://picsum.photos/id/1027/300/200', link: '/blogs' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/id/1028/300/200', link: '/certifications' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/id/1029/300/200', link: '/contact-me' },
  ],
  stalker: [
    { title: 'Reading', imgSrc: 'https://picsum.photos/id/1026/300/200', link: '/reading' },
    { title: 'Blogs', imgSrc: 'https://picsum.photos/id/1027/300/200', link: '/blogs' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/id/1029/300/200', link: '/contact-me' },
  ],
  adventure: [
    { title: 'Music', imgSrc: 'https://picsum.photos/id/1025/300/200', link: '/music' },
    { title: 'Reading', imgSrc: 'https://picsum.photos/id/1026/300/200', link: '/reading' },
    { title: 'Certifications', imgSrc: 'https://picsum.photos/id/1028/300/200', link: '/certifications' },
    { title: 'Contact Me', imgSrc: 'https://picsum.photos/id/1029/300/200', link: '/contact-me' },
  ],
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

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

    // Re-check after layout/images settle
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
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>

      <div className="cw-row-wrapper">
        {canScrollLeft && <div className="cw-fade cw-fade-left" />}
        {canScrollRight && <div className="cw-fade cw-fade-right" />}

        {canScrollLeft && (
          <button
            type="button"
            className="cw-chevron cw-chevron-left"
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
        )}

        {canScrollRight && (
          <button
            type="button"
            className="cw-chevron cw-chevron-right"
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        )}

        <div className="card-row no-scrollbar" ref={rowRef}>
          {continueWatching.map((pick, index) => (
            <Link to={pick.link} key={index} className="pick-card">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
