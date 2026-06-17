import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt    = 'Ahmed Assaad — Software Engineer, Founder & Community Leader';
export const size   = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          background: '#090e10',
          position: 'relative',
        }}
      >
        {/* Teal radial glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '560px',
            height: '560px',
            background: 'radial-gradient(circle at 80% 20%, rgba(92,230,208,0.18) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* AA monogram top-left */}
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: '80px',
            fontSize: '18px',
            fontWeight: 500,
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.9)',
            fontFamily: 'system-ui, sans-serif',
            display: 'flex',
          }}
        >
          AA
        </div>

        {/* Teal status dot */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '80px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#5ce6d0',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'rgba(255,255,255,0.95)',
              fontFamily: 'system-ui, sans-serif',
              display: 'flex',
            }}
          >
            Ahmed Assaad
          </div>

          <div
            style={{
              fontSize: '22px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.01em',
              fontFamily: 'system-ui, sans-serif',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
            }}
          >
            <span>Software Engineer</span>
            <span style={{ color: '#5ce6d0' }}>·</span>
            <span>Founder</span>
            <span style={{ color: '#5ce6d0' }}>·</span>
            <span>Community Leader</span>
          </div>

          {/* Teal divider line */}
          <div
            style={{
              width: '48px',
              height: '2px',
              background: '#5ce6d0',
              display: 'flex',
              marginTop: '4px',
            }}
          />

          <div
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'system-ui, sans-serif',
              display: 'flex',
            }}
          >
            Sarajevo, Bosnia &amp; Herzegovina
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
