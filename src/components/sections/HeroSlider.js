import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const slideIntervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const slideDuration = 9000; // 9 seconds

  const slides = [
    {
      backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80')",
      subtitle: 'Architecture | Design | Build',
      title: 'TheStudioVS',
      description: 'Innovative Designs. Timeless Spaces.',
      link: '#contact',
      cta: 'Get in Touch'
    },
    {
      backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      subtitle: 'Design & Build Practice',
      title: 'Timeless Spaces',
      description: 'Thoughtful design. Intelligent construction.',
      link: '/portfolio',
      cta: 'All Projects'
    }
  ];

  useEffect(() => {
    // Hide loader after 500ms
    const loaderTimer = setTimeout(() => {
      setLoaderHidden(true);
    }, 500);

    return () => clearTimeout(loaderTimer);
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();

    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    startProgress();
  };

  const stopAutoPlay = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const startProgress = () => {
    setProgress(0);
    const increment = 100 / (slideDuration / 100);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + increment;
      });
    }, 100);
  };

  const resetProgress = () => {
    setProgress(0);
    if (isPlaying) {
      startProgress();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetProgress();
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!startX || !startY) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (Math.abs(diffX) > 50) {
          if (diffX > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      }

      startX = 0;
      startY = 0;
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = (e.clientX - centerX) / centerX;
      const mouseY = (e.clientY - centerY) / centerY;

      document.querySelectorAll('.parallax-layer').forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed) || 0.3;
        const x = mouseX * 20 * speed;
        const y = mouseY * 20 * speed;
        layer.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="slider-section" id="home">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: slide.backgroundImage }}
        >
          <div className="slide-content">
            <div className="subtitle parallax-layer" data-speed="0.3">
              {slide.subtitle}
            </div>
            <h1 className="title parallax-layer" data-speed="0.4">
              {slide.title}
            </h1>
            <p className="description parallax-layer" data-speed="0.3">
              {slide.description}
            </p>
            {slide.link.startsWith('#') ? (
              <a href={slide.link} className="cta-button parallax-layer" data-speed="0.3">
                {slide.cta}
              </a>
            ) : (
              <Link to={slide.link} className="cta-button parallax-layer" data-speed="0.3">
                {slide.cta}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="nav-controls">
        <button className="play-pause-btn" onClick={togglePlayPause}>
          <span>{isPlaying ? '⏸' : '▶'}</span>
        </button>
      </div>

      <div className="arrow-nav">
        <button className="arrow-btn" onClick={prevSlide}>
          ‹
        </button>
        <button className="arrow-btn" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="bullet-nav">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`bullet ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">Slide by scroll</div>

      {/* Loading Animation */}
      <div className={`loader ${loaderHidden ? 'hidden' : ''}`} id="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
};

export default HeroSlider;
