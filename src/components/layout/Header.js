import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { images } from '../../assets';
import { homeAnchorItems } from '../../navigation/navItems';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  useEffect(() => {
    if (!isHomePage) return undefined;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + Math.max(window.innerHeight * 0.35, 120);
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

      if (nearBottom) {
        setActiveSection(homeAnchorItems[homeAnchorItems.length - 1].id);
        return;
      }

      let current = homeAnchorItems[0].id;

      homeAnchorItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('home');
    }
  }, [isHomePage]);

  const handleAnchorClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`clearfix ${menuOpen ? 'showed' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={images.logo} alt="TheStudioVS" style={{ width: '150px' }} />
        </Link>
      </div>

      <button
        type="button"
        className={`open-menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="nav-menu-box">
        <ul className="navigation-menu-list">
          {homeAnchorItems.map((item) => (
            <li
              key={item.id}
              className={isHomePage && activeSection === item.id ? 'active' : ''}
            >
              {isHomePage ? (
                <a href={item.href} onClick={handleAnchorClick}>
                  {item.label}
                </a>
              ) : (
                <Link to={`/#${item.id}`} onClick={handleAnchorClick}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
