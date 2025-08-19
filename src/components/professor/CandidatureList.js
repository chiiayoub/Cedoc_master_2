import React from 'react';

export default function CandidatureList({ candidatures, onStatusChange }) {
  const handleStatusChange = (id, event) => {
    onStatusChange(id, event.target.value);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "Acceptée":
        return "bg-green-100 text-green-800";
      case "Refusée":
        return "bg-red-100 text-red-800";
      case "En attente":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Candidat
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sujet
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date de candidature
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Statut
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {candidatures.map((candidature) => (
            <tr key={candidature.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{candidature.nom}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{candidature.sujet}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {candidature.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  value={candidature.statut}
                  onChange={(e) => handleStatusChange(candidature.id, e)}
                  className={`text-sm font-medium rounded-full px-3 py-1 ${getStatusColor(candidature.statut)}`}
                >
                  <option value="En attente">En attente</option>
                  <option value="Acceptée">Acceptée</option>
                  <option value="Refusée">Refusée</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-3 flex items-center">
                  <span className="material-icons mr-1">visibility</span>
                  Voir dossier
                </button>
                <button className="text-green-600 hover:text-green-900 flex items-center">
                  <span className="material-icons mr-1">calendar_today</span>
                  Entretien
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {candidatures.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucune candidature pour le moment
        </div>
      )}
    </div>
  );
}