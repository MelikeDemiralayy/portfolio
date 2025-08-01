'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'Hakkımda' },
    { href: '#projects', label: 'Projeler' },
    { href: '#contact', label: 'İletişim' },
  ];

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      zIndex: 50,
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }}>
      <div className="container-custom">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          <Link href="/" style={{ 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            ✨ Melike
          </Link>
          
          {/* Desktop Navigation */}
          <div style={{ display: 'none', gap: '2rem' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
              >
                {item.label}
                <span style={{
                  position: 'absolute',
                  bottom: '-0.25rem',
                  left: '50%',
                  width: 0,
                  height: '2px',
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(-50%)'
                }}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: 'none',
              padding: '0.75rem',
              borderRadius: '15px',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: '1.5rem', height: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{
                display: 'block',
                width: '1.25rem',
                height: '2px',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
                boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}></span>
              <span style={{
                display: 'block',
                width: '1.25rem',
                height: '2px',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                marginTop: '0.25rem',
                opacity: isMenuOpen ? 0 : 1,
                boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}></span>
              <span style={{
                display: 'block',
                width: '1.25rem',
                height: '2px',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                marginTop: '0.25rem',
                transform: isMenuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
                boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            display: 'none',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            animation: 'slideDown 0.3s ease-out',
            borderRadius: '0 0 25px 25px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
          }}>
            <div style={{ padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.9)',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    padding: '1rem 1.5rem',
                    borderRadius: '15px',
                    margin: '0 0.5rem',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.transform = 'translateX(0.5rem) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateX(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 