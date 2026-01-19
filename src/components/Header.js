import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleMenuToggle = () => {
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('showed');
      }
    };

    const menuToggle = document.querySelector('a.open-menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
        handleMenuToggle();
      });
    }

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', handleMenuToggle);
      }
    };
  }, [menuOpen]);

  const isHomePage = location.pathname === '/';

  return (
    <header className="clearfix">
      <div className="logo">
        <Link to="/">
          <img
            src="/templates.fabric-lab.co/archios/images/logo.png"
            alt="Logo"
            style={{ width: '150px' }}
          />
        </Link>
      </div>

      <button
        type="button"
        className={`open-menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="nav-menu-box">
        <ul className="navigation-menu-list">
          <li className={isHomePage ? 'active' : ''}>
            {isHomePage ? (
              <a href="#home">Home</a>
            ) : (
              <Link to="/#home">Home</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#services">Services</a>
            ) : (
              <Link to="/#services">Services</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#team">Team</a>
            ) : (
              <Link to="/#team">Team</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#services2">Alternative Ser.</a>
            ) : (
              <Link to="/#services2">Alternative Ser.</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a href="#work">Work</a>
            ) : (
              <Link to="/#work">Work</Link>
            )}
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {isHomePage ? (
              <a href="#contact">Contact</a>
            ) : (
              <Link to="/#contact">Contact</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
