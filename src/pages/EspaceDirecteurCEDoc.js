// src/pages/EspaceDirecteurCEDoc.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import inptLogo from '../assets/logos/inpt-logo.png';

function EspaceDirecteurCEDoc() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('candidatures');
  const [candidatures, setCandidatures] = useState([]);
  const [preinscriptions, setPreinscriptions] = useState([]);
  const [pvs, setPVs] = useState([]);
  const [candidatureFilter, setCandidatureFilter] = useState('all');
  const [preinscriptionFilter, setPreinscriptionFilter] = useState('incomplet');

  // Données simulées
  useEffect(() => {
    // Candidatures
    const mockCandidatures = [
      {
        id: 1,
        nom: "Karim El Mansouri",
        sujet: "IA pour réseaux 5G",
        statut: "Acceptée",
        date: "2023-10-15",
        equipe: "SIVA",
        dossier: "dossier1.zip",
        entretien: true,
        pv: "pv1.pdf"
      },
      {
        id: 2,
        nom: "Fatima Zahra Benjelloun",
        sujet: "Blockchain pour la supply chain",
        statut: "En attente",
        date: "2023-10-10",
        equipe: "DISCO",
        dossier: "dossier2.zip",
        entretien: false,
        pv: null
      },
      {
        id: 3,
        nom: "Youssef Alaoui",
        sujet: "Sécurité des systèmes IoT",
        statut: "Refusée",
        date: "2023-10-12",
        equipe: "RSSI",
        dossier: "dossier3.zip",
        entretien: false,
        pv: null
      },
      {
        id: 4,
        nom: "Leila Benomar",
        sujet: "Vision artificielle médicale",
        statut: "Acceptée",
        date: "2023-10-18",
        equipe: "SIVA",
        dossier: "dossier4.zip",
        entretien: true,
        pv: "pv4.pdf"
      },
      {
        id: 5,
        nom: "Mehdi Zitouni",
        sujet: "Optimisation réseaux 6G",
        statut: "En cours",
        date: "2023-10-20",
        equipe: "RSSI",
        dossier: "dossier5.zip",
        entretien: false,
        pv: null
      }
    ];
    setCandidatures(mockCandidatures);
    
    // Préinscriptions (dossiers incomplets)
    const mockPreinscriptions = [
      {
        id: 1,
        nom: "Ahmed Bennis",
        sujet: "IA pour la santé",
        date: "2023-10-05",
        equipe: "SIVA",
        manquant: "Diplôme de master",
        delai: "30 jours"
      },
      {
        id: 2,
        nom: "Sara El Fassi",
        sujet: "Sécurité cloud",
        date: "2023-10-08",
        equipe: "RSSI",
        manquant: "Relevé de notes",
        delai: "15 jours"
      },
      {
        id: 3,
        nom: "Omar Touimi",
        sujet: "Robotique industrielle",
        date: "2023-10-12",
        equipe: "SETM",
        manquant: "Attestation de préinscription",
        delai: "45 jours"
      }
    ];
    setPreinscriptions(mockPreinscriptions);
    
    // PVs d'entretien à valider
    const mockPVs = [
      {
        id: 1,
        candidat: "Karim El Mansouri",
        equipe: "SIVA",
        dateEntretien: "2023-10-25",
        pv: "pv1.pdf",
        signes: ["Pr. Ahmed Benali", "Dr. Sara Bennani"],
        statut: "À valider"
      },
      {
        id: 2,
        candidat: "Leila Benomar",
        equipe: "SIVA",
        dateEntretien: "2023-10-26",
        pv: "pv4.pdf",
        signes: ["Pr. Ahmed Benali"],
        statut: "À valider"
      },
      {
        id: 3,
        candidat: "Mehdi Zitouni",
        equipe: "RSSI",
        dateEntretien: "2023-10-27",
        pv: "pv3.pdf",
        signes: ["Pr. Hassan Touimi", "Dr. Youssef Bennani"],
        statut: "Validé"
      }
    ];
    setPVs(mockPVs);
  }, []);

  // Filtrer les candidatures
  const filteredCandidatures = candidatures.filter(cand => 
    candidatureFilter === 'all' || cand.statut === candidatureFilter
  );

  // Filtrer les préinscriptions
  const filteredPreinscriptions = preinscriptions.filter(pre => 
    preinscriptionFilter === 'all' || pre.manquant.toLowerCase().includes(preinscriptionFilter)
  );

  // Télécharger un document
  const downloadDocument = (docName) => {
    alert(`Téléchargement du document: ${docName}`);
    // Logique réelle de téléchargement
  };

  // Valider un PV
  const validatePV = (pvId) => {
    setPVs(pvs.map(pv => 
      pv.id === pvId ? { ...pv, statut: 'Validé' } : pv
    ));
    alert("PV validé avec succès !");
  };

  // Rejeter un PV
  const rejectPV = (pvId) => {
    setPVs(pvs.map(pv => 
      pv.id === pvId ? { ...pv, statut: 'Rejeté' } : pv
    ));
  };

  // Obtenir la couleur du statut
  const getStatusColor = (status) => {
    switch (status) {
      case "Acceptée": return "bg-green-100 text-green-800";
      case "Refusée": return "bg-red-100 text-red-800";
      case "En attente": return "bg-yellow-100 text-yellow-800";
      case "En cours": return "bg-blue-100 text-blue-800";
      case "À valider": return "bg-yellow-100 text-yellow-800";
      case "Validé": return "bg-green-100 text-green-800";
      case "Rejeté": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
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
                  Espace Directeur du CEDoc
                </h1>
                <p className="text-gray-600">Tableau de bord de gestion des candidatures et entretiens</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                  <span className="material-icons mr-2">notifications</span>
                  Alertes
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                  <span className="material-icons mr-2">bar_chart</span>
                  Statistiques
                </button>
              </div>
            </div>
            
            {/* Onglets */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('candidatures')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'candidatures'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Toutes les candidatures
                </button>
                <button
                  onClick={() => setActiveTab('preinscriptions')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'preinscriptions'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Préinscriptions
                </button>
                <button
                  onClick={() => setActiveTab('pvs')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'pvs'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  PVs d'entretien
                </button>
              </nav>
            </div>
            
            {/* Contenu des onglets */}
            {activeTab === 'candidatures' && (
              <div>
                <div className="filters flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Vue globale des candidatures</h2>
                  <select 
                    value={candidatureFilter} 
                    onChange={(e) => setCandidatureFilter(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="Acceptée">Acceptées</option>
                    <option value="Refusée">Refusées</option>
                    <option value="En attente">En attente</option>
                    <option value="En cours">En cours</option>
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
                          Équipe
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
                            {candidature.equipe}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {candidature.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(candidature.statut)}`}>
                              {candidature.statut}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                              onClick={() => downloadDocument(candidature.dossier)}
                              className="text-blue-600 hover:text-blue-900 mr-3"
                            >
                              Dossier
                            </button>
                            {candidature.pv && (
                              <button
                                onClick={() => downloadDocument(candidature.pv)}
                                className="text-green-600 hover:text-green-900"
                              >
                                PV
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {filteredCandidatures.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                      Aucune candidature à afficher
                    </div>
                  )}
                </div>
                
                {/* Statistiques rapides */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-700">Total candidatures</p>
                    <p className="text-2xl font-bold">{candidatures.length}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-700">Candidatures acceptées</p>
                    <p className="text-2xl font-bold">{candidatures.filter(c => c.statut === 'Acceptée').length}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-700">En cours de traitement</p>
                    <p className="text-2xl font-bold">{candidatures.filter(c => c.statut === 'En cours').length}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-red-700">Candidatures refusées</p>
                    <p className="text-2xl font-bold">{candidatures.filter(c => c.statut === 'Refusée').length}</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'preinscriptions' && (
              <div>
                <div className="filters flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Gestion des préinscriptions</h2>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      className="border border-gray-300 rounded-md px-3 py-2"
                      onChange={(e) => setPreinscriptionFilter(e.target.value)}
                    />
                    <select 
                      className="border border-gray-300 rounded-md px-3 py-2"
                      onChange={(e) => setPreinscriptionFilter(e.target.value)}
                    >
                      <option value="incomplet">Dossiers incomplets</option>
                      <option value="all">Tous les dossiers</option>
                    </select>
                  </div>
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
                          Équipe
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Élément manquant
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Délai restant
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredPreinscriptions.map(preinscription => (
                        <tr key={preinscription.id} className="bg-yellow-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{preinscription.nom}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{preinscription.sujet}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {preinscription.equipe}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {preinscription.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                              {preinscription.manquant}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                              {preinscription.delai}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                              Notifier
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              Suivi
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {filteredPreinscriptions.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                      Aucune préinscription à afficher
                    </div>
                  )}
                </div>
                
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Procédure de préinscription</h3>
                  <p className="text-sm text-blue-700">
                    Les candidats en préinscription ont un dossier incomplet. Ils disposent d'un délai maximum d'un an pour compléter leur dossier. 
                    Veuillez suivre l'état d'avancement de chaque dossier et notifier les candidats si nécessaire.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'pvs' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Validation des PVs d'entretien</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pvs.map(pv => (
                    <div key={pv.id} className={`border rounded-lg p-4 ${pv.statut === 'À valider' ? 'bg-yellow-50 border-yellow-200' : 'bg-white border-gray-200'}`}>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold">{pv.candidat}</h3>
                          <p className="text-sm text-gray-600">Équipe: {pv.equipe}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(pv.statut)}`}>
                          {pv.statut}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm"><strong>Date entretien:</strong> {pv.dateEntretien}</p>
                        <p className="text-sm"><strong>Signataires:</strong> {pv.signes.join(', ')}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => downloadDocument(pv.pv)}
                          className="text-blue-600 hover:text-blue-900 flex items-center"
                        >
                          <span className="material-icons mr-1">description</span>
                          Consulter PV
                        </button>
                        
                        {pv.statut === 'À valider' && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => rejectPV(pv.id)}
                              className="px-3 py-1 text-red-600 border border-red-600 rounded hover:bg-red-50"
                            >
                              Rejeter
                            </button>
                            <button
                              onClick={() => validatePV(pv.id)}
                              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                              Valider
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {pvs.length === 0 && (
                  <div className="text-center py-10 text-gray-500">
                    Aucun PV à valider pour le moment
                  </div>
                )}
                
                <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Validation des PVs</h3>
                  <p className="text-sm text-green-700">
                    Les PVs d'entretien doivent être signés par au moins deux professeurs de l'équipe concernée. 
                    Veuillez vérifier la complétude du document avant validation.
                  </p>
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

export default EspaceDirecteurCEDoc;