// src/pages/EspaceDoctorant.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import inptLogo from '../assets/logos/inpt-logo.png';

function EspaceDoctorant() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('publications');
  const [publications, setPublications] = useState([]);
  const [communications, setCommunications] = useState([]);
  const [vacations, setVacations] = useState([]);
  const [prix, setPrix] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [newPublication, setNewPublication] = useState({
    type: 'journal',
    titre: '',
    date: '',
    auteurs: '',
    journal: '',
    justificatif: null
  });

  // Données mock pour le doctorant
  const doctorant = {
    nom: "Ahmed Bennani",
    equipe: "Systèmes Intelligents et Vision Artificielle (SIVA)",
    directeur: "Dr. Mohammed Alami",
    sujet: "Intelligence Artificielle pour la détection d'anomalies dans les réseaux 5G",
    inscription: "2023",
    status: "Inscrit",
    publicationsValidees: 1,
    communicationsValidees: 0
  };

  // Vérification du seuil de publications
  useEffect(() => {
    const journalCount = publications.filter(p => p.type === 'journal' && p.status === 'validé').length;
    const conferenceCount = publications.filter(p => p.type === 'conference' && p.status === 'validé').length;
    
    const seuilAtteint = (journalCount >= 2) || 
                         (journalCount >= 1 && conferenceCount >= 2);
    
    setShowNotification(seuilAtteint);
  }, [publications]);

  // Données mock initiales
  useEffect(() => {
    // Publications
    const mockPublications = [
      {
        id: 1,
        type: 'journal',
        titre: "Deep Learning for Network Anomaly Detection",
        date: "2024-03-15",
        auteurs: "A. Bennani, M. Alami",
        journal: "IEEE Transactions on Network Science",
        justificatif: "lien-journal-1.pdf",
        status: "validé"
      },
      {
        id: 2,
        type: 'conference',
        titre: "AI-based Security in 5G Networks",
        date: "2024-06-20",
        auteurs: "A. Bennani, M. Alami, S. Bennani",
        conference: "International Conference on Communications",
        lieu: "Paris, France",
        justificatif: "lien-conference-1.pdf",
        status: "en attente"
      }
    ];
    setPublications(mockPublications);
    
    // Communications
    const mockCommunications = [
      {
        id: 1,
        titre: "Optimisation des réseaux IoT",
        conference: "IEEE IoT Conference",
        date: "2024-05-10",
        lieu: "Berlin, Allemagne",
        auteurs: "A. Bennani, F. Zahra",
        justificatif: "communication-1.pdf",
        status: "validé"
      }
    ];
    setCommunications(mockCommunications);
    
    // Vacations
    const mockVacations = [
      {
        id: 1,
        titre: "Cours d'IA avancée",
        etablissement: "INPT",
        date: "2024-01-15",
        duree: "30 heures",
        niveau: "Master",
        justificatif: "vacation-1.pdf",
        status: "en attente"
      }
    ];
    setVacations(mockVacations);
    
    // Prix et distinctions
    const mockPrix = [
      {
        id: 1,
        titre: "Meilleur jeune chercheur",
        organisation: "IEEE Maroc",
        date: "2024-02-20",
        justificatif: "prix-1.pdf",
        status: "validé"
      }
    ];
    setPrix(mockPrix);
  }, []);

  // Ajouter une nouvelle publication
  const handleAddPublication = () => {
    const newPub = {
      ...newPublication,
      id: Date.now(),
      status: "en attente"
    };
    setPublications([...publications, newPub]);
    setNewPublication({
      type: 'journal',
      titre: '',
      date: '',
      auteurs: '',
      journal: '',
      justificatif: null
    });
  };

  // Gestion des changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPublication({
      ...newPublication,
      [name]: value
    });
  };

  // Gestion du fichier justificatif
  const handleFileChange = (e) => {
    setNewPublication({
      ...newPublication,
      justificatif: e.target.files[0]
    });
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

      {/* Notification de seuil atteint */}
      {showNotification && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <p className="font-bold">Félicitations !</p>
            <p>
              Vous avez atteint le nombre minimum de publications requis pour la soutenance de thèse.
            </p>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-green-700 hover:text-green-900"
            >
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <div className="flex-grow py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#003366] mb-2">
                  Espace Doctorant
                </h1>
                <p className="text-gray-600">
                  Bienvenue, {doctorant.nom} | Équipe: {doctorant.equipe}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">Statut: <span className="font-bold">{doctorant.status}</span></p>
                <p className="text-sm text-blue-700">Directeur: {doctorant.directeur}</p>
              </div>
            </div>
            
            {/* Statistiques rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">Publications validées</p>
                <p className="text-2xl font-bold">{doctorant.publicationsValidees}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">Communications validées</p>
                <p className="text-2xl font-bold">{doctorant.communicationsValidees}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-700">Vacations</p>
                <p className="text-2xl font-bold">{vacations.length}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-700">Prix & distinctions</p>
                <p className="text-2xl font-bold">{prix.length}</p>
              </div>
            </div>
            
            {/* Onglets */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex flex-wrap gap-4 md:gap-8">
                <button
                  onClick={() => setActiveTab('publications')}
                  className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'publications' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Publications
                </button>
                <button
                  onClick={() => setActiveTab('communications')}
                  className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'communications' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Communications
                </button>
                <button
                  onClick={() => setActiveTab('vacations')}
                  className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'vacations' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Vacations
                </button>
                <button
                  onClick={() => setActiveTab('prix')}
                  className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'prix' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Prix & distinctions
                </button>
                <button
                  onClick={() => setActiveTab('profil')}
                  className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === 'profil' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Mon profil
                </button>
              </nav>
            </div>
            
            {/* Contenu des onglets */}
            {activeTab === 'publications' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Gestion des publications</h2>
                
                {/* Formulaire d'ajout */}
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-lg font-medium mb-4">Ajouter une nouvelle publication</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                      <select
                        name="type"
                        value={newPublication.type}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="journal">Journal indexé</option>
                        <option value="conference">Conférence internationale</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Titre *</label>
                      <input
                        type="text"
                        name="titre"
                        value={newPublication.titre}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Titre de la publication"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date de publication *</label>
                      <input
                        type="date"
                        name="date"
                        value={newPublication.date}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {newPublication.type === 'journal' ? 'Journal *' : 'Conférence *'}
                      </label>
                      <input
                        type="text"
                        name="journal"
                        value={newPublication.journal}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder={newPublication.type === 'journal' ? 'Nom du journal' : 'Nom de la conférence'}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Auteurs *</label>
                    <input
                      type="text"
                      name="auteurs"
                      value={newPublication.auteurs}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Liste des auteurs séparés par des virgules"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Justificatif *</label>
                    <div className="flex items-center">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={handleAddPublication}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Ajouter la publication
                  </button>
                </div>
                
                {/* Liste des publications */}
                <h3 className="text-lg font-medium mb-4">Mes publications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Titre
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Revue/Conférence
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {publications.map(pub => (
                        <tr key={pub.id}>
                          <td className="px-6 py-4 whitespace-normal">
                            <div className="text-sm font-medium text-gray-900">{pub.titre}</div>
                            <div className="text-sm text-gray-500">{pub.auteurs}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                              {pub.type === 'journal' ? 'Journal' : 'Conférence'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {pub.date}
                          </td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                            {pub.journal || pub.conference}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              pub.status === 'validé' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {pub.status === 'validé' ? 'Validé' : 'En attente'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Seuil de soutenance */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Conditions de soutenance</h3>
                  <p className="text-sm text-blue-700">
                    Pour pouvoir soutenir votre thèse, vous devez avoir au moins :<br />
                    - 2 publications dans des journaux indexés <strong>OU</strong><br />
                    - 1 publication dans un journal indexé + 2 communications dans des conférences internationales
                  </p>
                  <p className="text-sm text-blue-700 mt-2">
                    Votre progression actuelle :<br />
                    - Publications dans journaux indexés: {publications.filter(p => p.type === 'journal' && p.status === 'validé').length}/2<br />
                    - Communications internationales: {publications.filter(p => p.type === 'conference' && p.status === 'validé').length}/2
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'communications' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Communications scientifiques</h2>
                {/* Contenu similaire aux publications */}
              </div>
            )}
            
            {activeTab === 'vacations' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Vacations d'enseignement</h2>
                {/* Contenu des vacations */}
              </div>
            )}
            
            {activeTab === 'prix' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Prix et distinctions</h2>
                {/* Contenu des prix */}
              </div>
            )}
            
            {activeTab === 'profil' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Mon profil doctoral</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Informations personnelles</h3>
                    {/* Formulaire de profil */}
                  </div>
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-4">Sujet de thèse</h3>
                    <p className="mb-4">{doctorant.sujet}</p>
                    <div className="mt-4">
                      <h4 className="font-medium">Encadrement</h4>
                      <p>Directeur: {doctorant.directeur}</p>
                      <p>Équipe: {doctorant.equipe}</p>
                    </div>
                  </div>
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

export default EspaceDoctorant;