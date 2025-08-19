// src/pages/EspaceChefEquipe.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import inptLogo from '../assets/logos/inpt-logo.png';

function EspaceChefEquipe() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('sujets');
  const [subjects, setSubjects] = useState([]);
  const [candidatures, setCandidatures] = useState([]);
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [candidatureFilter, setCandidatureFilter] = useState('all');

  // Données simulées pour les sujets
  useEffect(() => {
    const mockSubjects = [
      {
        id: 1,
        title: "IA pour réseaux 5G",
        description: "Recherche sur l'optimisation des réseaux 5G par IA",
        domain: "IA",
        professor: "Pr. Ahmed Benali",
        status: "pending",
        createdAt: new Date(),
        team: "SIVA"
      },
      {
        id: 2,
        title: "Blockchain pour la supply chain",
        description: "Application de la blockchain dans les chaînes logistiques",
        domain: "Blockchain",
        professor: "Pr. Karim Idrissi",
        status: "pending",
        createdAt: new Date(),
        team: "DISCO"
      },
      {
        id: 3,
        title: "Sécurité des systèmes IoT",
        description: "Protection des dispositifs IoT contre les cyberattaques",
        domain: "Cybersécurité",
        professor: "Pr. Fatima Zahra",
        status: "validated",
        createdAt: new Date(),
        team: "RSSI"
      }
    ];
    setSubjects(mockSubjects);
    
    const mockCandidatures = [
      {
        id: 1,
        nom: "Karim El Mansouri",
        sujet: "IA pour réseaux 5G",
        statut: "En attente",
        date: "2023-10-15",
        dossier: "dossier1.zip",
        team: "SIVA"
      },
      {
        id: 2,
        nom: "Fatima Zahra Benjelloun",
        sujet: "Blockchain pour la supply chain",
        statut: "Acceptée",
        date: "2023-10-10",
        dossier: "dossier2.zip",
        team: "DISCO"
      },
      {
        id: 3,
        nom: "Youssef Alaoui",
        sujet: "Sécurité des systèmes IoT",
        statut: "Refusée",
        date: "2023-10-12",
        dossier: "dossier3.zip",
        team: "RSSI"
      }
    ];
    setCandidatures(mockCandidatures);
  }, []);

  // Filtrer les sujets par statut
  const filteredSubjects = subjects.filter(sub => 
    subjectFilter === 'all' || sub.status === subjectFilter
  );

  // Filtrer les candidatures par statut
  const filteredCandidatures = candidatures.filter(cand => 
    candidatureFilter === 'all' || cand.statut === candidatureFilter
  );

  // Valider un sujet
  const validateSubject = (subjectId) => {
    setSubjects(subjects.map(sub => 
      sub.id === subjectId ? { ...sub, status: 'validated' } : sub
    ));
  };

  // Refuser un sujet
  const rejectSubject = (subjectId) => {
    setSubjects(subjects.map(sub => 
      sub.id === subjectId ? { ...sub, status: 'rejected' } : sub
    ));
  };

  // Modifier le statut d'une candidature
  const updateCandidatureStatus = (candidatureId, newStatus) => {
    setCandidatures(candidatures.map(cand => 
      cand.id === candidatureId ? { ...cand, statut: newStatus } : cand
    ));
  };

  // Télécharger un dossier
  const downloadDossier = (dossierName) => {
    alert(`Téléchargement du dossier: ${dossierName}`);
    // Ici, vous implémenteriez la logique de téléchargement réelle
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={inptLogo} alt="INPT Logo" className="h-8" />
            <span className="font-bold text-xl">INPT</span>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <span className="material-icons">arrow_back</span>
            Retour au site
          </button>
        </div>
      </header>

      {/* Contenu principal */}
      <div className="flex-grow py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                  Espace Chef d'Équipe
                </h1>
                <p className="text-gray-600">Bienvenue, Dr. Ahmed Benali (Équipe SIVA)</p>
              </div>
            </div>
            
            {/* Onglets */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('sujets')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'sujets'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Gestion des sujets
                </button>
                <button
                  onClick={() => setActiveTab('candidatures')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'candidatures'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Gestion des candidatures
                </button>
              </nav>
            </div>
            
            {/* Contenu des onglets */}
            {activeTab === 'sujets' && (
              <div>
                <div className="filters flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Sujets proposés par votre équipe</h2>
                  <select 
                    value={subjectFilter} 
                    onChange={(e) => setSubjectFilter(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="all">Tous les sujets</option>
                    <option value="pending">En attente</option>
                    <option value="validated">Validés</option>
                    <option value="rejected">Refusés</option>
                  </select>
                </div>
                
                <div className="space-y-6">
                  {filteredSubjects.map(subject => (
                    <div 
                      key={subject.id}
                      className={`p-6 border rounded-lg ${
                        subject.status === 'validated' ? 'border-green-200 bg-green-50' :
                        subject.status === 'rejected' ? 'border-red-200 bg-red-50' :
                        'border-yellow-200 bg-yellow-50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{subject.title}</h3>
                          <p className="text-gray-600">{subject.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          subject.status === 'validated' ? 'bg-green-100 text-green-800' :
                          subject.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {subject.status === 'validated' ? 'Validé' : 
                           subject.status === 'rejected' ? 'Refusé' : 'En attente'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600"><strong>Domaine:</strong> {subject.domain}</p>
                          <p className="text-sm text-gray-600"><strong>Proposé par:</strong> {subject.professor}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600"><strong>Date de proposition:</strong> {subject.createdAt.toLocaleDateString()}</p>
                          <p className="text-sm text-gray-600"><strong>Équipe:</strong> {subject.team}</p>
                        </div>
                      </div>
                      
                      {subject.status === 'pending' && (
                        <div className="flex gap-3">
                          <button
                            onClick={() => validateSubject(subject.id)}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                          >
                            Valider le sujet
                          </button>
                          <button
                            onClick={() => rejectSubject(subject.id)}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                          >
                            Refuser le sujet
                          </button>
                          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                            Modifier
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {filteredSubjects.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                      Aucun sujet à afficher pour le moment
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {activeTab === 'candidatures' && (
              <div>
                <div className="filters flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Candidatures pour votre équipe</h2>
                  <select 
                    value={candidatureFilter} 
                    onChange={(e) => setCandidatureFilter(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="all">Toutes les candidatures</option>
                    <option value="En attente">En attente</option>
                    <option value="Acceptée">Acceptées</option>
                    <option value="Refusée">Refusées</option>
                  </select>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Candidat
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sujet
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredCandidatures.map(candidature => (
                        <tr key={candidature.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{candidature.nom}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{candidature.sujet}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {candidature.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              candidature.statut === 'Acceptée' ? 'bg-green-100 text-green-800' :
                              candidature.statut === 'Refusée' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {candidature.statut}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex gap-2">
                              <button
                                onClick={() => downloadDossier(candidature.dossier)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Dossier
                              </button>
                              <button
                                onClick={() => updateCandidatureStatus(candidature.id, 'Acceptée')}
                                className="text-green-600 hover:text-green-900"
                              >
                                Accepter
                              </button>
                              <button
                                onClick={() => updateCandidatureStatus(candidature.id, 'Refusée')}
                                className="text-red-600 hover:text-red-900"
                              >
                                Refuser
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {filteredCandidatures.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                      Aucune candidature à afficher pour le moment
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a237e] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} INPT - Centre d'Études Doctorales. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default EspaceChefEquipe;