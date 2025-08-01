'use client';

import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" style={{ 
      padding: '8rem 0',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container-custom">
        <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '3rem',
            fontWeight: 700,
            color: '#333',
            marginBottom: '2rem',
            textShadow: '0 4px 8px rgba(0,0,0,0.1)',
            fontFamily: 'var(--font-poppins)'
          }}>Birlikte Çalışalım</h2>
          <p style={{ 
            marginBottom: '3rem',
            color: '#555',
            fontSize: '1.125rem',
            lineHeight: 1.6
          }}>
            Yeni fırsatlar ve heyecan verici projeler için her zaman ilgiliyim. 
            Bir sorunuz varsa veya sadece merhaba demek istiyorsanız, çekinmeden ulaşın!
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem', 
            maxWidth: '24rem', 
            margin: '0 auto' 
          }}>
            <Link 
              href="mailto:demiralaymelikeirem@gmail.com"
              style={{
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
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
            >
              📧 Email Gönder
            </Link>
            
            <Link 
              href="https://github.com/MelikeDemiralayy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.4)',
                color: '#333',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.6)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
            >
              🐙 GitHub&rsquo;ı Gör
            </Link>
          </div>
          
          <div style={{ 
            marginTop: '3rem', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem' 
          }}>
            <Link href="https://linkedin.com/in/melike-demiralay" target="_blank" style={{ 
              color: '#333', 
              transition: 'all 0.3s ease',
              padding: '1rem',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.6)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}>
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>LinkedIn</span>
              <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            
            <Link href="https://medium.com/@melikedemiralay" target="_blank" style={{ 
              color: '#333', 
              transition: 'all 0.3s ease',
              padding: '1rem',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.6)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}>
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Medium</span>
              <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 