import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import inptLogo from '../assets/logos/inpt-logo.png';

function Candidature() {
  const [step, setStep] = useState(1);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // Liste exemple de sujets
  const availableSubjects = [
    { id: 1, title: "Intelligence Artificielle pour la détection d'anomalies", supervisor: "Dr. Mohammed Ahmed" },
    { id: 2, title: "Sécurité des réseaux 5G", supervisor: "Dr. Sara Benali" },
    { id: 3, title: "Blockchain pour l'IoT", supervisor: "Dr. Karim Hassan" },
    { id: 4, title: "Deep Learning pour le traitement d'images médicales", supervisor: "Dr. Laila Mourad" },
    { id: 5, title: "Optimisation des réseaux de télécommunications", supervisor: "Dr. Omar Tazi" },
  ];

  const handleSubjectSelection = (subjectId) => {
    if (selectedSubjects.includes(subjectId)) {
      setSelectedSubjects(selectedSubjects.filter(id => id !== subjectId));
    } else if (selectedSubjects.length < 3) {
      setSelectedSubjects([...selectedSubjects, subjectId]);
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
          <Link to="/" className="text-gray-600 hover:text-gray-800 flex items-center gap-2">
            <span className="material-icons">arrow_back</span>
            Retour au site
          </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Progress bar */}
          <div className="w-full bg-gray-200 h-2">
            <div 
              className="bg-blue-600 h-2 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>

          {/* Steps indicator */}
          <div className="flex justify-around py-4 bg-gray-50 border-b">
            <div className={`flex flex-col items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>1</div>
              <span className="text-sm">Informations personnelles</span>
            </div>
            <div className={`flex flex-col items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>2</div>
              <span className="text-sm">Documents</span>
            </div>
            <div className={`flex flex-col items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>3</div>
              <span className="text-sm">Choix des sujets</span>
            </div>
          </div>

          <div className="p-6">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Informations personnelles</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
                  <input type="date" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nationalité</label>
                  <input type="text" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                  <textarea className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" rows="3"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input type="tel" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Documents requis</h2>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <div className="text-center">
                      <span className="material-icons text-4xl text-gray-400">upload_file</span>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">CV</h3>
                      <p className="mt-1 text-xs text-gray-500">PDF, maximum 2MB</p>
                      <button className="mt-2 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                        Sélectionner un fichier
                      </button>
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <div className="text-center">
                      <span className="material-icons text-4xl text-gray-400">upload_file</span>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">Relevés de notes</h3>
                      <p className="mt-1 text-xs text-gray-500">PDF, maximum 5MB</p>
                      <button className="mt-2 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                        Sélectionner un fichier
                      </button>
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <div className="text-center">
                      <span className="material-icons text-4xl text-gray-400">upload_file</span>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">Diplômes</h3>
                      <p className="mt-1 text-xs text-gray-500">PDF, maximum 5MB</p>
                      <button className="mt-2 px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                        Sélectionner un fichier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Choix des sujets (3 maximum)</h2>
                <p className="text-sm text-gray-600 mb-4">Sélectionnez jusqu'à trois sujets par ordre de préférence</p>
                <div className="space-y-4">
                  {availableSubjects.map((subject) => (
                    <div 
                      key={subject.id}
                      onClick={() => handleSubjectSelection(subject.id)}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedSubjects.includes(subject.id) 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          checked={selectedSubjects.includes(subject.id)}
                          onChange={() => {}}
                          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-900">{subject.title}</h3>
                          <p className="text-sm text-gray-500">Encadrant: {subject.supervisor}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep(step - 1)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  step === 1 
                    ? 'invisible' 
                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Précédent
              </button>
              <button
                onClick={() => {
                  if (step === 3) {
                    // Simuler la soumission
                    alert('Candidature soumise avec succès !');
                    // Rediriger vers la page de suivi
                    window.location.href = '/suivi-candidature';
                  } else {
                    setStep(step + 1);
                  }
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {step === 3 ? 'Soumettre' : 'Suivant'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-gray-600">
            © 2025 INPT. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Candidature;
