import React from 'react';

function FilterBar({ searchTerm, setSearchTerm, selectedDomain, setSelectedDomain, selectedTeam, setSelectedTeam, domains = [], teams = [] }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        className="border rounded px-3 py-2 flex-1"
        type="text"
        placeholder="Rechercher un sujet..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select
        className="border rounded px-3 py-2"
        value={selectedDomain}
        onChange={e => setSelectedDomain(e.target.value)}
      >
        <option value="">Tous domaines</option>
        {domains.map(d => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <select
        className="border rounded px-3 py-2"
        value={selectedTeam}
        onChange={e => setSelectedTeam(e.target.value)}
      >
        <option value="">Toutes équipes</option>
        {teams.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
