'use client';

import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.25)',
      backdropFilter: 'blur(20px)',
      borderRadius: '25px',
      padding: '2rem',
      border: '2px solid rgba(255,255,255,0.4)',
      boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '400px'
    }} onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
      e.currentTarget.style.boxShadow = '0 35px 70px rgba(0,0,0,0.25)';
      e.currentTarget.style.border = '2px solid rgba(255,255,255,0.6)';
    }} onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
      e.currentTarget.style.border = '2px solid rgba(255,255,255,0.4)';
    }}>
      {/* Image Placeholder */}
      <div style={{
        width: '100%',
        height: '200px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '15px',
        marginBottom: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          color: 'white',
          fontSize: '3rem',
          fontWeight: 700,
          textShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          {project.title.charAt(0)}
        </div>
        
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '30px',
          height: '30px',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '50%',
          animation: 'float 3s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          width: '20px',
          height: '20px',
          background: 'rgba(255,255,255,0.4)',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse'
        }}></div>
        
        {/* Pulse glow effect */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse 2s ease-in-out infinite'
        }}></div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: 'var(--font-poppins)',
          fontWeight: 600,
          fontSize: '1.5rem',
          color: '#333',
          marginBottom: '1rem',
          lineHeight: 1.3
        }}>
          {project.title}
        </h3>
        
        <p style={{
          color: '#555',
          fontSize: '1rem',
          lineHeight: 1.6,
          marginBottom: '1.5rem',
          flex: 1
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.tags.map((tag, index) => (
            <span key={index} style={{
              background: 'rgba(255,255,255,0.5)',
              color: '#333',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255,255,255,0.6)',
              backdropFilter: 'blur(10px)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.7)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link href={project.link} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '25px',
          fontWeight: 600,
          textDecoration: 'none',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          transform: 'translateY(0)',
          border: 'none',
          cursor: 'pointer',
          marginTop: 'auto',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.3)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        }}>
          Projeyi Gör
        </Link>
      </div>
    </div>
  );
} 