'use client';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section style={{ 
      padding: '8rem 0',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem',
              fontWeight: 700,
              color: '#333',
              marginBottom: '1rem',
              textShadow: '0 4px 8px rgba(0,0,0,0.1)',
              fontFamily: 'var(--font-poppins)'
            }}>Deneyim</h2>
            <p style={{ 
              maxWidth: '32rem', 
              margin: '0 auto',
              color: '#555',
              fontSize: '1.125rem',
              lineHeight: 1.6
            }}>
              Kariyerim boyunca edindiğim deneyimler ve çalıştığım projeler
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{ 
                background: 'rgba(255,255,255,0.3)',
                backdropFilter: 'blur(20px)',
                borderRadius: '25px',
                padding: '3rem',
                border: '1px solid rgba(255,255,255,0.4)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                animationDelay: `${index * 0.2}s`
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 35px 70px rgba(0,0,0,0.2)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.1)';
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ 
                      fontFamily: 'var(--font-poppins)', 
                      fontWeight: 600, 
                      fontSize: '1.5rem', 
                      color: '#333', 
                      marginBottom: '0.5rem' 
                    }}>
                      {exp.title}
                    </h3>
                    <p style={{ color: '#ff6b6b', fontWeight: 500, fontSize: '1.125rem' }}>{exp.company}</p>
                  </div>
                  <span style={{ color: '#666', fontSize: '1rem' }}>{exp.period}</span>
                </div>
                <p style={{ color: '#555', fontSize: '1.125rem', lineHeight: 1.6 }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 