import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Candidature() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations personnelles
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    lieuNaissance: '',
    nationalite: '',
    genre: '',
    etatCivil: '',
    statutProfessionnel: '',
    
    // Formation
    mentionBac: '',
    diplome: '',
    specialiteDiplome: '',
    typeEtablissement: '',
    mentionDiplome: '',
    intitulePFE: '',
    
    // Choix des sujets
    sujet1: '',
    sujet2: '',
    sujet3: '',
    
    // Documents
    dossierCandidature: null
  });

  // Données mock des sujets disponibles
  const sujetsDisponibles = [
    { id: 1, titre: "Intelligence Artificielle pour l'optimisation des réseaux 5G", equipe: "RSSI" },
    { id: 2, titre: "Cybersécurité des systèmes IoT industriels", equipe: "SETM" },
    { id: 3, titre: "Blockchain pour la sécurisation des données médicales", equipe: "SIVA" },
    { id: 4, titre: "Vision artificielle pour la détection d'anomalies", equipe: "SIVA" },
    { id: 5, titre: "Optimisation des protocoles de communication 5G", equipe: "RSSI" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Candidature soumise:', formData);
    // Ici vous ajouteriez la logique pour envoyer les données
    alert('Candidature soumise avec succès !');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Informations personnelles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date de naissance *</label>
                <input
                  type="date"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lieu de naissance *</label>
                <input
                  type="text"
                  name="lieuNaissance"
                  value={formData.lieuNaissance}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Genre *</label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="M">Masculin</option>
                  <option value="F">Féminin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">État civil *</label>
                <select
                  name="etatCivil"
                  value={formData.etatCivil}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="Celibataire">Célibataire</option>
                  <option value="Marie">Marié(e)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statut professionnel *</label>
                <select
                  name="statutProfessionnel"
                  value={formData.statutProfessionnel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="Salarie">Salarié</option>
                  <option value="Non-Salarie">Non Salarié</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nationalité *</label>
              <input
                type="text"
                name="nationalite"
                value={formData.nationalite}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Formation et diplômes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mention du Bac *</label>
                <select
                  name="mentionBac"
                  value={formData.mentionBac}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="P">Passable</option>
                  <option value="AB">Assez Bien</option>
                  <option value="B">Bien</option>
                  <option value="TB">Très Bien</option>
                  <option value="E">Excellent</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Diplôme *</label>
                <select
                  name="diplome"
                  value={formData.diplome}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="Ingenieur">Ingénieur</option>
                  <option value="Master">Master</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Spécialité ou discipline du diplôme *</label>
              <input
                type="text"
                name="specialiteDiplome"
                value={formData.specialiteDiplome}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type d'établissement *</label>
                <select
                  name="typeEtablissement"
                  value={formData.typeEtablissement}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="Ecole">École</option>
                  <option value="Universite">Université/Faculté</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mention du diplôme *</label>
                <select
                  name="mentionDiplome"
                  value={formData.mentionDiplome}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="P">Passable</option>
                  <option value="AB">Assez Bien</option>
                  <option value="B">Bien</option>
                  <option value="TB">Très Bien</option>
                  <option value="E">Excellent</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Intitulé du PFE *</label>
              <textarea
                name="intitulePFE"
                value={formData.intitulePFE}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Choix des sujets de thèse</h3>
            <p className="text-gray-600 mb-6">Veuillez choisir 3 sujets par ordre de préférence</p>
            
            {[1, 2, 3].map(num => (
              <div key={num}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Choix {num} {num === 1 && '*'}
                </label>
                <select
                  name={`sujet${num}`}
                  value={formData[`sujet${num}`]}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={num === 1}
                >
                  <option value="">Sélectionner un sujet</option>
                  {sujetsDisponibles
                    .filter(sujet => 
                      !Object.values(formData).includes(sujet.id.toString()) || 
                      formData[`sujet${num}`] === sujet.id.toString()
                    )
                    .map(sujet => (
                    <option key={sujet.id} value={sujet.id}>
                      {sujet.titre} - {sujet.equipe}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Documents de candidature</h3>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="mt-4">
                  <label htmlFor="dossierCandidature" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Télécharger le dossier de candidature (.zip)
                    </span>
                    <input
                      id="dossierCandidature"
                      name="dossierCandidature"
                      type="file"
                      accept=".zip"
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="mt-2 block text-sm text-gray-500">
                      Fichier ZIP contenant : CV, Relevés de notes, Diplômes
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {formData.dossierCandidature && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm text-green-700">
                  Fichier sélectionné: {formData.dossierCandidature.name}
                </p>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Documents requis dans le fichier ZIP :</h4>
              <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                <li>CV détaillé</li>
                <li>Relevés de notes (Licence + Master/Ingénieur)</li>
                <li>Copie des diplômes</li>
                <li>Lettre de motivation (optionnel)</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">INPT</span>
            </div>
            <span className="font-bold text-xl">INPT</span>
          </div>
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Retour au site
          </Link>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {[
              { step: 1, title: "Informations personnelles" },
              { step: 2, title: "Formation" },
              { step: 3, title: "Choix des sujets" },
              { step: 4, title: "Documents" }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep >= item.step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {item.step}
                </div>
                <span className={`ml-2 text-sm ${currentStep >= item.step ? 'text-blue-600' : 'text-gray-500'}`}>
                  {item.title}
                </span>
                {index < 3 && (
                  <div className={`w-12 h-0.5 mx-4 ${currentStep > item.step ? 'bg-blue-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6">Candidature Doctorale</h1>
          
          <form onSubmit={handleSubmit}>
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-md ${
                  currentStep === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                Précédent
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Soumettre la candidature
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Candidature;