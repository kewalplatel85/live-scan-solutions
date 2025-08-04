import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt =
  'Mail All Center - Professional Fingerprinting Services Bay Area';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              marginRight: 24,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
            }}
          >
            🔒
          </div>
          <div style={{ fontWeight: 'bold' }}>Mail All Center</div>
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Professional Fingerprinting Services
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            opacity: 0.9,
            maxWidth: 600,
          }}
        >
          DOJ & FBI Certified • Bay Area • Same Day Service
        </div>
        <div
          style={{
            fontSize: 20,
            marginTop: 32,
            padding: '12px 24px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: 8,
          }}
        >
          (650) 961-4646
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
