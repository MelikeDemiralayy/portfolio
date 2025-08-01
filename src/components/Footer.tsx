'use client';

export default function Footer() {
  return (
    <footer style={{ 
      padding: '3rem 0', 
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      color: '#333'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#555', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>&copy; 2024 Melike Demiralay. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 