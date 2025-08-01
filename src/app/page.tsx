'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce App",
      description: "Next.js ile geliştirilen modern e-ticaret uygulaması",
      image: "/projects/ecommerce.jpg",
      tags: ["Next.js", "React", "JavaScript", "TailwindCSS"],
      link: "https://github.com/MelikeDemiralayy/e-commerce-app"
    },
    {
      id: 2,
      title: "Chatbot",
      description: "İnteraktif chatbot uygulaması",
      image: "/projects/chatbot.jpg",
      tags: ["CSS", "JavaScript", "AI"],
      link: "https://github.com/MelikeDemiralayy/chatbot"
    },
    {
      id: 3,
      title: "React Quiz App",
      description: "React ile geliştirilen quiz uygulaması",
      image: "/projects/quiz.jpg",
      tags: ["React", "JavaScript", "CSS"],
      link: "https://github.com/MelikeDemiralayy/react-quiz-app"
    },
    {
      id: 4,
      title: "Developer Website",
      description: "Modern geliştirici web sitesi",
      image: "/projects/developer.jpg",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/MelikeDemiralayy/developer-website"
    },
    {
      id: 5,
      title: "Movie Tailwind Work",
      description: "Tailwind CSS ile film sitesi",
      image: "/projects/movie.jpg",
      tags: ["HTML", "TailwindCSS", "CSS"],
      link: "https://github.com/MelikeDemiralayy/movie-tailwind-work"
    },
    {
      id: 6,
      title: "Guess Number Game",
      description: "Sayı tahmin oyunu",
      image: "/projects/game.jpg",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/MelikeDemiralayy/guess-number"
    }
  ];

  const skills = [
    "HTML5", "CSS3", "JavaScript", "React", "Next.js", 
    "Redux", "TailwindCSS", "MUI", "NPM", "Netlify", "Vercel", "GitHub Pages"
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2023 - Günümüz",
      description: "Modern web teknolojileri ile responsive ve kullanıcı dostu web siteleri geliştirme"
    },
    {
      title: "Web Development",
      company: "Personal Projects",
      period: "2022 - Günümüz",
      description: "React, Next.js ve modern frontend teknolojileri ile projeler geliştirme"
    }
  ];

  return (
    <main style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Navigation />

      {/* Hero Section - 3D Parallax */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        {/* Animated Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
          animation: 'gradientShift 8s ease-in-out infinite'
        }}></div>

        {/* Floating 3D Elements */}
        <div style={{
          position: 'absolute',
          top: `${20 + scrollY * 0.1}px`,
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          borderRadius: '20px',
          transform: 'rotate(45deg)',
          opacity: 0.6,
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: `${50 - scrollY * 0.05}px`,
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, #a8edea, #fed6e3)',
          borderRadius: '50%',
          opacity: 0.4,
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>

        <div style={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, #ffecd2, #fcb69f)',
          borderRadius: '15px',
          transform: 'rotate(-15deg)',
          opacity: 0.5,
          animation: 'float 7s ease-in-out infinite'
        }}></div>

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
            <div className={`animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ 
                  fontSize: '1.5rem', 
                  color: 'white', 
                  fontWeight: 600,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>✨ Merhaba, Ben</span>
              </div>
              
              <h1 style={{ 
                fontSize: '4rem',
                fontWeight: 800,
                color: 'white',
                marginBottom: '1.5rem',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'var(--font-poppins)'
              }}>
                Melike Demiralay
              </h1>
              
              <p style={{ 
                maxWidth: '48rem', 
                margin: '0 auto 2rem auto', 
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.6,
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                Tutkulu bir <strong style={{ color: '#ffd700' }}>Frontend Developer</strong> olarak modern web teknolojileri ile 
                yaratıcı ve kullanıcı dostu dijital deneyimler yaratıyorum.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                <Link href="#projects" style={{
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
                  🚀 Projelerimi Gör
                </Link>
                
                <Link href="#contact" style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}>
                  💬 İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Glassmorphism */}
      <section id="about" style={{ 
        padding: '8rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }}></div>

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ 
                fontSize: '3rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '1rem',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                fontFamily: 'var(--font-poppins)'
              }}>Hakkımda</h2>
              <p style={{ 
                maxWidth: '48rem', 
                margin: '0 auto',
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1.125rem',
                lineHeight: 1.6
              }}>
                Frontend geliştirme konusunda tutkulu, modern web teknolojileri ile 
                yaratıcı çözümler üreten bir geliştiriciyim.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div className="animate-slide-in-left">
                <div style={{ 
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '30px',
                  padding: '3rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                      React, Next.js ve modern JavaScript teknolojileri ile güzel, işlevsel 
                      web uygulamaları geliştiriyorum. Kullanıcı deneyimini ön planda tutarak 
                      responsive ve performanslı siteler tasarlıyorum.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', lineHeight: 1.6 }}>
                      Sürekli öğrenmeye odaklı, yeni teknolojileri keşfetmeyi ve 
                      açık kaynak projelere katkıda bulunmayı seviyorum.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h3 style={{ 
                        fontFamily: 'var(--font-poppins)', 
                        fontWeight: 600, 
                        fontSize: '1.5rem', 
                        color: 'white',
                        marginBottom: '1rem'
                      }}>Yeteneklerim</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {skills.map((skill, index) => (
                          <span 
                            key={index}
                            style={{
                              background: 'rgba(255,255,255,0.2)',
                              color: 'white',
                              padding: '0.75rem 1.5rem',
                              borderRadius: '25px',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              transition: 'all 0.3s ease',
                              border: '1px solid rgba(255,255,255,0.3)',
                              backdropFilter: 'blur(10px)',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                              e.currentTarget.style.transform = 'translateY(0) scale(1)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <div style={{ position: 'relative', textAlign: 'center' }}>
                  <div style={{
                    width: '300px',
                    height: '300px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                    position: 'relative',
                    animation: 'rotate 20s linear infinite'
                  }}>
                    <div style={{ 
                      color: 'white', 
                      fontSize: '4rem', 
                      fontWeight: 700, 
                      fontFamily: 'var(--font-poppins)',
                      textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                    }}>MD</div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#ffd700',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                    animation: 'orbit 8s linear infinite',
                    transform: 'translate(-50%, -50%)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>💻</span>
                  </div>
                  
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                    animation: 'orbit 6s linear infinite reverse',
                    transform: 'translate(-50%, -50%)'
                  }}>
                    <span style={{ fontSize: '1rem' }}>⚡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Modern Cards */}
      <section style={{ 
        padding: '8rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative'
      }}>
        <div className="container-custom">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ 
                fontSize: '3rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '1rem',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                fontFamily: 'var(--font-poppins)'
              }}>Deneyim</h2>
              <p style={{ 
                maxWidth: '32rem', 
                margin: '0 auto',
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1.125rem',
                lineHeight: 1.6
              }}>
                Kariyerim boyunca edindiğim deneyimler ve çalıştığım projeler
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {experiences.map((exp, index) => (
                <div key={index} style={{ 
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '25px',
                  padding: '3rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 0.2}s`
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 35px 70px rgba(0,0,0,0.3)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ 
                        fontFamily: 'var(--font-poppins)', 
                        fontWeight: 600, 
                        fontSize: '1.5rem', 
                        color: 'white', 
                        marginBottom: '0.5rem' 
                      }}>
                        {exp.title}
                      </h3>
                      <p style={{ color: '#ffd700', fontWeight: 500, fontSize: '1.125rem' }}>{exp.company}</p>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>{exp.period}</span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem', lineHeight: 1.6 }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - 3D Grid */}
      <section id="projects" style={{ 
        padding: '8rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative'
      }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              fontFamily: 'var(--font-poppins)'
            }}>Projelerim</h2>
            <p style={{ 
              maxWidth: '32rem', 
              margin: '0 auto',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.125rem',
              lineHeight: 1.6
            }}>
              Geliştirdiğim bazı projeler ve kullandığım teknolojiler
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            perspective: '1000px'
          }}>
            {projects.map((project, index) => (
              <div key={project.id} style={{ 
                animationDelay: `${index * 0.1}s`,
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateY(10deg) rotateX(5deg) translateZ(20px)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
              }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Interactive */}
      <section id="contact" style={{ 
        padding: '8rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container-custom">
          <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '3rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '2rem',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              fontFamily: 'var(--font-poppins)'
            }}>Birlikte Çalışalım</h2>
            <p style={{ 
              marginBottom: '3rem',
              color: 'rgba(255,255,255,0.9)',
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
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
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
                color: 'white', 
                transition: 'all 0.3s ease',
                padding: '1rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}>
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>LinkedIn</span>
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              
              <Link href="https://medium.com/@melikedemiralay" target="_blank" style={{ 
                color: 'white', 
                transition: 'all 0.3s ease',
                padding: '1rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
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

      {/* Footer */}
      <footer style={{ 
        padding: '3rem 0', 
        backgroundColor: '#111827', 
        color: 'white',
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
      }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#9ca3af' }}>&copy; 2024 Melike Demiralay. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
