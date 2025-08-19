import React from 'react';

const colorMap = {
  'IA': 'bg-green-500',
  'Robotique': 'bg-blue-500',
  'Télécom': 'bg-purple-500',
  'Sécurité': 'bg-red-500',
  'Blockchain': 'bg-yellow-500',
  'Informatique': 'bg-indigo-500',
  'default': 'bg-gray-400'
};

function DomainBadge({ domaine }) {
  const color = colorMap[domaine] || colorMap['default'];
  return (
    <span className={`inline-block ${color} text-white text-xs font-semibold rounded-full px-3 py-1`}>{domaine}</span>
  );
}

export default DomainBadge;
