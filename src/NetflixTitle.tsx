import React, { useEffect, useRef, useState } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-2.png';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  // Web Audio refs
  const ctxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function preloadAudio() {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx: AudioContext = new Ctx();
      ctxRef.current = ctx;

      const res = await fetch('/netflix-sound.ogg');
      const arr = await res.arrayBuffer();
      const buf = await ctx.decodeAudioData(arr);

      if (!cancelled) {
        bufferRef.current = buf;
        setAudioReady(true);
      }
    }

    preloadAudio().catch(console.error);

    return () => {
      cancelled = true;
      bufferRef.current = null;
      ctxRef.current?.close().catch(() => {});
      ctxRef.current = null;
    };
  }, []);

  const handleClick = async () => {
    if (isClicked) return;
    setIsClicked(true);

    const ctx = ctxRef.current;
    const buf = bufferRef.current;

    let navDelayMs = 4000; // fallback if audio isn't ready

    if (ctx && buf && audioReady) {
      try {
        // Must be resumed from a user gesture on many browsers
        await ctx.resume();

        const src = ctx.createBufferSource();
        src.buffer = buf;
        src.connect(ctx.destination);

        // Small scheduling delay helps avoid wake-up clipping on some systems
        const startAt = ctx.currentTime + 0.03;
        src.start(startAt);

        // Navigate after audio finishes (+ small buffer)
        navDelayMs = Math.ceil(buf.duration * 900) +150;
      } catch (e) {
        console.error(e);
      }
    }

    setTimeout(() => {
      navigate('/browse');
    }, navDelayMs);
  };

  return (
    <div className="netflix-container" onClick={handleClick}>
      <img
        src={logoImage}
        alt="Custom Logo"
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
      />
    </div>
  );
};

export default NetflixTitle;
