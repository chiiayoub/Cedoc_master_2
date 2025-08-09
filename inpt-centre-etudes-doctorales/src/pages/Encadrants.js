import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import inptLogo from '../assets/logos/inpt-logo.png';

function Encadrants() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpeciality, setFilterSpeciality] = useState('all');

  // Données exemple des encadrants
  const supervisors = [
    {
      id: 1,
      name: "Dr. Mohammed Alami",
      title: "Professeur",
      speciality: "Intelligence Artificielle",
      email: "m.alami@inpt.ac.ma",
      research: "Deep Learning, Computer Vision",
      currentStudents: 3,
      publications: 45,
      projects: ["Projet IA Santé", "Vision par ordinateur pour l'industrie 4.0"],
      image: "https://placeholderr.co/100"
    },
    {
      id: 2,
      name: "Dr. Fatima Zahra El Alami",
      title: "Professeur",
      speciality: "Réseaux et Télécommunications",
      email: "f.elalami@inpt.ac.ma",
      research: "5G, IoT, Réseaux intelligents",
      currentStudents: 4,
      publications: 38,
      projects: ["Optimisation des réseaux 5G", "IoT pour les villes intelligentes"],
      image: "https://placeholderr.co/100"
    },
    {
      id: 3,
      name: "Dr. Hassan Touimi",
      title: "Professeur",
      speciality: "Cybersécurité",
      email: "h.touimi@inpt.ac.ma",
      research: "Sécurité des réseaux, Cryptographie",
      currentStudents: 2,
      publications: 42,
      projects: ["Sécurité des systèmes embarqués", "Blockchain pour l'IoT"],
      image: "https://placeholderr.co/100"
    }
  ];

  // Liste des spécialités uniques pour le filtre
  const specialities = ['all', ...new Set(supervisors.map(s => s.speciality))];

  // Filtrer les encadrants
  const filteredSupervisors = supervisors.filter(supervisor => {
    const matchesSearch = supervisor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supervisor.research.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpeciality = filterSpeciality === 'all' || supervisor.speciality === filterSpeciality;
    return matchesSearch && matchesSpeciality;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={inptLogo} alt="INPT Logo" className="h-8" />
            <span className="font-bold text-xl">INPT</span>
          </div>
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Retour au site
          </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Encadrants</h1>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Rechercher un encadrant..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={filterSpeciality}
                onChange={(e) => setFilterSpeciality(e.target.value)}
              >
                {specialities.map((speciality, index) => (
                  <option key={index} value={speciality}>
                    {speciality === 'all' ? 'Toutes les spécialités' : speciality}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Supervisors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSupervisors.map(supervisor => (
            <div key={supervisor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header with image */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
                <div className="flex items-center gap-4">
                  <img
                    src={supervisor.image}
                    alt={supervisor.name}
                    className="w-16 h-16 rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{supervisor.name}</h3>
                    <p className="text-blue-100">{supervisor.title}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">Spécialité:</span> {supervisor.speciality}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Recherche:</span> {supervisor.research}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Projets en cours:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {supervisor.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="text-sm text-gray-600">Doctorants actuels</p>
                    <p className="font-bold text-blue-600">{supervisor.currentStudents}</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="text-sm text-gray-600">Publications</p>
                    <p className="font-bold text-blue-600">{supervisor.publications}</p>
                  </div>
                </div>

                <a
                  href={`mailto:${supervisor.email}`}
                  className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Contacter
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-8 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-600">
            © 2025 INPT. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Encadrants;
