import React from 'react';

export default function ZenHtmlLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <title>zen HTML</title>
      <text
        transform="translate(6 60)"
        style={{
          color: '#fafafa',
          fill: 'currentColor',
          fontSize: '72px',
          fontFamily: 'SegoeUI-LightItalic, Segoe UI',
          fontStyle: 'italic',
          fontWeight: '300',
        }}
      >
        zen
      </text>
      <text
        transform="translate(0 100)"
        style={{
          color: '#fafafa',
          fill: 'currentColor',
          fontSize: '48px',
          fontFamily: 'SegoeUIMono-Bold, Segoe UI',
          fontWeight: '700',
        }}
      >
        HTML
      </text>
    </svg>
  );
}
