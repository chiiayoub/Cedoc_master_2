import React from 'react';

const domainColors = {
  'IA': '#22c55e',
  'Robotique': '#3b82f6',
  'Télécom': '#8b5cf6',
  'Sécurité': '#ef4444',
  'Blockchain': '#eab308',
  'Informatique': '#6366f1',
  'default': '#a3a3a3'
};

const cardStyle = {
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 2px 8px 0 rgba(20,18,122,0.08)',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  borderLeft: '6px solid #003366',
  transition: 'box-shadow 0.2s',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};
const badgeStyle = domain => ({
  display: 'inline-block',
  background: domainColors[domain] || domainColors['default'],
  color: '#fff',
  fontWeight: 600,
  fontSize: 13,
  borderRadius: 9999,
  padding: '0.25rem 0.75rem',
  marginBottom: 8,
  marginRight: 8
});
const btnStyle = {
  marginTop: 12,
  alignSelf: 'flex-start',
  background: '#003366',
  color: '#fff',
  border: 'none',
  borderRadius: 9999,
  padding: '0.5rem 1.5rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background 0.2s',
};

function TheseCard({ titre, domaine, laboratoire, encadrant }) {
  return (
    <div style={cardStyle} className="hover:shadow-lg transition">
      <span style={badgeStyle(domaine)}>{domaine}</span>
      <h3 style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>{titre}</h3>
      <div style={{ color: '#6366f1', fontSize: 14, marginBottom: 4 }}>Laboratoire : {laboratoire}</div>
      <div style={{ color: '#22223b', fontSize: 14, marginBottom: 4 }}>Encadrant : {encadrant}</div>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: 12 }}>
        <button style={btnStyle}>Découvrir</button>
        <button style={{ ...btnStyle, background: '#22c55e' }}>Postuler</button>
      </div>
    </div>
  );
}

export default TheseCard;
