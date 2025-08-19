

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TheseCard from '../components/TheseCard';

const sujetsMock = [
  { id: 1, titre: 'IA pour les réseaux intelligents', domaine: 'IA', laboratoire: 'Labo IA', encadrant: 'Dr. A. Benali' },
  { id: 2, titre: 'Cybersécurité des objets connectés', domaine: 'Sécurité', laboratoire: 'Labo Sécu', encadrant: 'Dr. M. El Amrani' },
  { id: 3, titre: 'Optimisation des réseaux 5G', domaine: 'Télécom', laboratoire: 'Labo Télécom', encadrant: 'Dr. S. Kabbaj' },
  { id: 4, titre: 'Robotique collaborative', domaine: 'Robotique', laboratoire: 'Labo Robotique', encadrant: 'Dr. F. Berrada' },
  { id: 5, titre: 'Blockchain et identité numérique', domaine: 'Blockchain', laboratoire: 'Labo Blockchain', encadrant: 'Dr. L. El Idrissi' },
];


function SujetsThese() {
  const domaines = ['Tous', ...Array.from(new Set(sujetsMock.map(s => s.domaine)))];
  const labos = ['Tous', ...Array.from(new Set(sujetsMock.map(s => s.laboratoire)))];

  const [search, setSearch] = useState('');
  const [filtreDomaine, setFiltreDomaine] = useState('Tous');
  const [filtreLabo, setFiltreLabo] = useState('Tous');

  const sujetsFiltres = sujetsMock.filter(sujet => {
    const matchTitre = sujet.titre.toLowerCase().includes(search.toLowerCase());
    const matchDomaine = filtreDomaine === 'Tous' || sujet.domaine === filtreDomaine;
    const matchLabo = filtreLabo === 'Tous' || sujet.laboratoire === filtreLabo;
    return matchTitre && matchDomaine && matchLabo;
  });

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 relative">
      <Link
        to="/"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          marginTop: '2rem',
          marginLeft: '1rem',
          background: '#003366',
          color: '#fff',
          fontWeight: 600,
          borderRadius: 9999,
          padding: '0.75rem 2rem',
          boxShadow: '0 2px 8px 0 rgba(20,18,122,0.08)',
          fontSize: 16,
          textDecoration: 'none',
          transition: 'background 0.2s',
          display: 'inline-block'
        }}
        onMouseOver={e => e.currentTarget.style.background = '#00234d'}
        onMouseOut={e => e.currentTarget.style.background = '#003366'}
      >
        Retour
      </Link>
      <h1 className="text-3xl font-bold mb-2 text-[var(--inpt-primary)]">Sujets de Thèse Disponibles</h1>
      <p className="mb-6 text-gray-700">Découvrez les sujets de thèse proposés par l'INPT et filtrez selon vos intérêts.</p>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          className="border rounded px-3 py-2 flex-1"
          type="text"
          placeholder="Rechercher un sujet..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="border rounded px-3 py-2"
          value={filtreDomaine}
          onChange={e => setFiltreDomaine(e.target.value)}
        >
          {domaines.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select
          className="border rounded px-3 py-2"
          value={filtreLabo}
          onChange={e => setFiltreLabo(e.target.value)}
        >
          {labos.map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sujetsFiltres.map(sujet => (
          <TheseCard key={sujet.id} {...sujet} />
        ))}
      </div>
    </div>
  );
}

export default SujetsThese;
