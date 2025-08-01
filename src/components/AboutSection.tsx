'use client';

interface AboutSectionProps {
  skills: string[];
}

export default function AboutSection({ skills }: AboutSectionProps) {
  return (
         <section id="about" style={{ 
       padding: '8rem 0',
       background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
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
         background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23333" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
         opacity: 0.3
       }}></div>

       <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
         <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
           <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ 
               fontSize: '3rem',
               fontWeight: 700,
               color: '#333',
               marginBottom: '1rem',
               textShadow: '0 4px 8px rgba(0,0,0,0.1)',
               fontFamily: 'var(--font-poppins)'
             }}>Hakkımda</h2>
             <p style={{ 
               maxWidth: '48rem', 
               margin: '0 auto',
               color: '#555',
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
                 background: 'rgba(255,255,255,0.3)',
                 backdropFilter: 'blur(20px)',
                 borderRadius: '30px',
                 padding: '3rem',
                 border: '1px solid rgba(255,255,255,0.4)',
                 boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
               }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   <p style={{ color: '#555', fontSize: '1.125rem', lineHeight: 1.6 }}>
                     React, Next.js ve modern JavaScript teknolojileri ile güzel, işlevsel 
                     web uygulamaları geliştiriyorum. Kullanıcı deneyimini ön planda tutarak 
                     responsive ve performanslı siteler tasarlıyorum.
                   </p>
                   <p style={{ color: '#555', fontSize: '1.125rem', lineHeight: 1.6 }}>
                     Sürekli öğrenmeye odaklı, yeni teknolojileri keşfetmeyi ve 
                     açık kaynak projelere katkıda bulunmayı seviyorum.
                   </p>
                   
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     <h3 style={{ 
                       fontFamily: 'var(--font-poppins)', 
                       fontWeight: 600, 
                       fontSize: '1.5rem', 
                       color: '#333',
                       marginBottom: '1rem'
                     }}>Yeteneklerim</h3>
                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                       {skills.map((skill, index) => (
                         <span 
                           key={index}
                           style={{
                             background: 'rgba(255,255,255,0.4)',
                             color: '#333',
                             padding: '0.75rem 1.5rem',
                             borderRadius: '25px',
                             fontSize: '0.875rem',
                             fontWeight: 500,
                             transition: 'all 0.3s ease',
                             border: '1px solid rgba(255,255,255,0.5)',
                             backdropFilter: 'blur(10px)',
                             cursor: 'pointer'
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                             e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                             e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.background = 'rgba(255,255,255,0.4)';
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
                 {/* Code Editor Animation */}
                 <div style={{
                   width: '350px',
                   height: '330px',
                   margin: '0 auto',
                   background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                   borderRadius: '20px',
                   padding: '1.5rem',
                   boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                   position: 'relative',
                   border: '2px solid rgba(255,255,255,0.1)'
                 }}>
                   {/* Code Editor Header */}
                   <div style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     marginBottom: '1rem'
                   }}>
                     <div style={{
                       width: '12px',
                       height: '12px',
                       borderRadius: '50%',
                       background: '#ef4444'
                     }}></div>
                     <div style={{
                       width: '12px',
                       height: '12px',
                       borderRadius: '50%',
                       background: '#f59e0b'
                     }}></div>
                     <div style={{
                       width: '12px',
                       height: '12px',
                       borderRadius: '50%',
                       background: '#10b981'
                     }}></div>
                     <span style={{
                       color: 'rgba(255,255,255,0.7)',
                       fontSize: '0.875rem',
                       marginLeft: '1rem'
                     }}>portfolio.tsx</span>
                   </div>

                   {/* Code Content */}
                   <div style={{
                     fontFamily: 'monospace',
                     fontSize: '0.8rem',
                     lineHeight: 1.5,
                     color: 'rgba(255,255,255,0.9)',
                     overflow: 'hidden'
                   }}>
                     <div style={{ color: '#8b5cf6' }}>const</div>
                     <div style={{ color: '#f59e0b' }}> Developer</div>
                     <div style={{ color: '#10b981' }}>=</div>
                     <div style={{ color: '#ef4444' }}>{'{'}</div>
                     <div style={{ marginLeft: '1rem' }}>
                       <div style={{ color: '#8b5cf6' }}>name:</div>
                       <div style={{ color: '#f59e0b' }}>'Melike Demiralay',</div>
                       <div style={{ color: '#8b5cf6' }}>role:</div>
                       <div style={{ color: '#f59e0b' }}>'Frontend Developer',</div>
                       <div style={{ color: '#8b5cf6' }}>skills:</div>
                       <div style={{ color: '#f59e0b' }}>['React', 'Next.js', 'TypeScript'],</div>
                       <div style={{ color: '#8b5cf6' }}>passion:</div>
                       <div style={{ color: '#f59e0b' }}>'Creating amazing UIs'</div>
                     </div>
                     <div style={{ color: '#ef4444' }}>{'}'}</div>
                   </div>

                  {/* Cursor Blink */}
                  <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    right: '2rem',
                    width: '2px',
                    height: '1rem',
                    background: '#10b981',
                    animation: 'cursorBlink 1s infinite'
                  }}></div>

                  {/* Floating Code Elements */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    color: '#8b5cf6',
                    fontSize: '0.75rem',
                    animation: 'float 4s ease-in-out infinite'
                  }}>&lt;/&gt;</div>
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '10px',
                    color: '#f59e0b',
                    fontSize: '0.75rem',
                    animation: 'float 3s ease-in-out infinite reverse'
                  }}>{'{}'}</div>

                  {/* Matrix Rain Effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none'
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} style={{
                        position: 'absolute',
                        top: `${i * 20}%`,
                        left: `${i * 15}%`,
                        color: '#10b981',
                        fontSize: '0.75rem',
                        animation: 'matrixRain 3s linear infinite',
                        animationDelay: `${i * 0.5}s`
                      }}>
                        01
                      </div>
                    ))}
                  </div>
                </div>

                {/* Binary Pulse Elements */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '10%',
                  color: '#8b5cf6',
                  fontSize: '1rem',
                  animation: 'binaryPulse 2s ease-in-out infinite'
                }}>101</div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '10%',
                  color: '#f59e0b',
                  fontSize: '1rem',
                  animation: 'binaryPulse 2s ease-in-out infinite reverse'
                }}>010</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 