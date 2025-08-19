import React from 'react';

export default function SubjectForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = React.useState(
    initialData || {
      title: '',
      description: '',
      domain: 'IA',
      team: '',
      status: 'pending'
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Titre du sujet
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
          Domaine
        </label>
        <select
          id="domain"
          name="domain"
          value={formData.domain}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="IA">Intelligence Artificielle</option>
          <option value="Robotique">Robotique</option>
          <option value="Télécom">Télécom</option>
          <option value="Sécurité">Sécurité</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Informatique">Informatique</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="team" className="block text-sm font-medium text-gray-700 mb-1">
          Équipe de recherche
        </label>
        <input
          type="text"
          id="team"
          name="team"
          value={formData.team}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {initialData ? "Mettre à jour" : "Ajouter le sujet"}
        </button>
      </div>
    </form>
  );
}