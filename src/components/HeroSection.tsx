'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'relative', 
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(168, 237, 234, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(254, 214, 227, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 236, 210, 0.4) 0%, transparent 50%)',
        animation: 'gradientShift 8s ease-in-out infinite'
      }}></div>

      {/* Floating 3D Elements */}
      <div style={{
        position: 'absolute',
        top: `${20 + scrollY * 0.1}px`,
        left: '10%',
        width: '120px',
        height: '120px',
        background: 'linear-gradient(45deg, #667eea, #764ba2)',
        borderRadius: '20px',
        transform: 'rotate(45deg)',
        opacity: 0.6,
        animation: 'float 6s ease-in-out infinite',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: `${50 - scrollY * 0.05}px`,
        right: '15%',
        width: '180px',
        height: '180px',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        borderRadius: '50%',
        opacity: 0.5,
        animation: 'float 8s ease-in-out infinite reverse',
        boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
      }}></div>

      <div style={{
        position: 'absolute',
        top: '60%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(45deg, #a8edea, #fed6e3)',
        borderRadius: '15px',
        transform: 'rotate(-15deg)',
        opacity: 0.5,
        animation: 'float 7s ease-in-out infinite',
        boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
      }}></div>

      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(45deg, #ffecd2, #fcb69f)',
        borderRadius: '50%',
        opacity: 0.4,
        animation: 'float 5s ease-in-out infinite reverse',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
      }}></div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <div className={`animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ 
                fontSize: '1.5rem', 
                color: '#333', 
                fontWeight: 600,
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>✨ Merhaba, Ben</span>
            </div>
            
            <h1 style={{ 
              fontSize: '4rem',
              fontWeight: 800,
              color: '#333',
              marginBottom: '1.5rem',
              textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
              fontFamily: 'var(--font-poppins)',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Melike Demiralay
            </h1>
            
            <p style={{ 
              maxWidth: '48rem', 
              margin: '0 auto 2rem auto', 
              fontSize: '1.25rem',
              color: '#555',
              lineHeight: 1.6,
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              Tutkulu bir <strong style={{ 
                color: '#ff6b6b',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}>Frontend Developer</strong> olarak modern web teknolojileri ile 
              yaratıcı ve kullanıcı dostu dijital deneyimler yaratıyorum.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <Link href="#projects" style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                border: 'none',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}>
                🚀 Projelerimi Gör
              </Link>
              
              <Link href="#contact" style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                border: 'none',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}>
                💬 İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 