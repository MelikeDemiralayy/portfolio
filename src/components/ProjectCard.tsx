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
      position: 'relative', 
      overflow: 'hidden',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '25px',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
      transformStyle: 'preserve-3d'
    }} onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02) rotateY(5deg)';
      e.currentTarget.style.boxShadow = '0 35px 70px rgba(0,0,0,0.3)';
    }} onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
      e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
    }}>
      <div style={{
        height: '12rem',
        background: 'linear-gradient(135deg, rgba(255,107,107,0.2), rgba(78,205,196,0.2), rgba(69,183,209,0.2))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '25px 25px 0 0'
      }}>
        <div style={{
          fontSize: '4rem',
          fontWeight: 700,
          color: 'white',
          transition: 'all 0.3s ease',
          opacity: 0.9,
          textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          fontFamily: 'var(--font-poppins)'
        }}>
          {project.title.charAt(0)}
        </div>
        
        {/* Animated background pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          opacity: 0.5,
          animation: 'gradientShift 8s ease-in-out infinite'
        }}></div>
        
        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          width: '2rem',
          height: '2rem',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          borderRadius: '50%',
          opacity: 0.6,
          animation: 'float 6s ease-in-out infinite',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          width: '1.5rem',
          height: '1.5rem',
          background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
          borderRadius: '50%',
          opacity: 0.6,
          animation: 'float 8s ease-in-out infinite reverse',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}></div>
        
        {/* Glow effect */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          animation: 'pulse 3s ease-in-out infinite'
        }}></div>
      </div>
      
      <div style={{ padding: '2rem' }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '0.75rem',
          color: 'white',
          fontFamily: 'var(--font-poppins)',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          {project.title}
        </h3>
        
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '1.5rem',
          lineHeight: '1.75rem',
          fontSize: '1rem'
        }}>
          {project.description}
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 500,
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'white',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'all 0.3s ease',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
        >
          🚀 Projeyi Gör 
          <svg style={{
            width: '1rem',
            height: '1rem',
            marginLeft: '0.5rem',
            transition: 'transform 0.3s ease'
          }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 