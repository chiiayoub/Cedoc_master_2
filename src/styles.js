// Styles JS pour composants React INPT

export const cardStyles = {
  base: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1.5rem',
    background: '#fff',
    boxShadow: '0 2px 8px 0 rgba(20,18,122,0.06)',
    marginBottom: '1.5rem',
    transition: 'box-shadow 0.2s',
  },
  hover: {
    boxShadow: '0 4px 16px 0 rgba(20,18,122,0.12)'
  },
  responsive: {
    maxWidth: 480,
    width: '100%'
  }
};

export const badgeColors = {
  'IA': '#22c55e',
  'Robotique': '#3b82f6',
  'Télécom': '#8b5cf6',
  'Sécurité': '#ef4444',
  'Blockchain': '#eab308',
  'Informatique': '#6366f1',
  'default': '#a3a3a3'
};

export const headerStyles = {
  base: {
    background: '#fff',
    color: '#0E0464',
    borderBottom: '1px solid #e0e0e0',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 64
  },
  logo: {
    fontWeight: 700,
    fontSize: 22,
    color: '#0E0464',
    letterSpacing: 1
  }
};

export const footerStyles = {
  base: {
    background: '#0E0464',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
    fontSize: 14
  }
};
