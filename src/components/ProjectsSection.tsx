'use client';

import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" style={{ 
      padding: '8rem 0',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '3rem',
            fontWeight: 700,
            color: '#333',
            marginBottom: '1rem',
            textShadow: '0 4px 8px rgba(0,0,0,0.1)',
            fontFamily: 'var(--font-poppins)'
          }}>Projelerim</h2>
          <p style={{ 
            maxWidth: '32rem', 
            margin: '0 auto',
            color: '#555',
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
  );
} 