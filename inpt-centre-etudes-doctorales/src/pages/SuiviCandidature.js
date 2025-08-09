import React from 'react';
import { Link } from 'react-router-dom';
import inptLogo from '../assets/logos/inpt-logo.png';

function SuiviCandidature() {
  // Exemple de données de candidature
  const candidature = {
    id: "INPT-2025-001",
    status: "En cours",
    submittedDate: "2025-08-01",
    lastUpdate: "2025-08-05",
    selectedSubjects: [
      "Intelligence Artificielle pour la détection d'anomalies",
      "Sécurité des réseaux 5G",
      "Blockchain pour l'IoT"
    ]
  };

  // Exemple d'historique des actions
  const history = [
    {
      date: "2025-08-05 14:30",
      action: "Dossier en cours d'évaluation par le comité scientifique",
      type: "info"
    },
    {
      date: "2025-08-03 09:15",
      action: "Documents validés par le service administratif",
      type: "success"
    },
    {
      date: "2025-08-01 10:00",
      action: "Candidature soumise",
      type: "success"
    }
  ];

  // Exemple de notifications
  const notifications = [
    {
      date: "2025-08-05",
      message: "Votre dossier est actuellement en cours d'évaluation. Vous recevrez une réponse dans les prochains jours.",
      read: false
    },
    {
      date: "2025-08-03",
      message: "Vos documents ont été validés avec succès. Votre dossier va être transmis au comité scientifique.",
      read: true
    },
    {
      date: "2025-08-01",
      message: "Nous avons bien reçu votre candidature. Elle sera traitée dans les plus brefs délais.",
      read: true
    }
  ];

  // Fonction pour obtenir la couleur du statut
  const getStatusColor = (status) => {
    switch (status) {
      case "Soumise": return "bg-yellow-500";
      case "En cours": return "bg-blue-500";
      case "Acceptée": return "bg-green-500";
      case "Refusée": return "bg-red-500";
      default: return "bg-gray-500";
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
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Retour au site
          </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Status Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Suivi de candidature</h1>
                <p className="text-gray-600">Référence: {candidature.id}</p>
              </div>
              <div className={`px-4 py-2 rounded-full text-white font-semibold ${getStatusColor(candidature.status)}`}>
                {candidature.status}
              </div>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Sujets sélectionnés :</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {candidature.selectedSubjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* History Timeline */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Historique des actions</h2>
              <div className="space-y-4">
                {history.map((item, index) => (
                  <div key={index} className="relative pl-6 pb-4 border-l-2 border-gray-200">
                    <div className={`absolute left-[-5px] top-2 w-2 h-2 rounded-full ${
                      item.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <p className="text-sm text-gray-500">{item.date}</p>
                    <p className="text-gray-700">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Messages et notifications</h2>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    notification.read ? 'bg-gray-50' : 'bg-blue-50 border-l-4 border-blue-500'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm text-gray-500">{notification.date}</p>
                      {!notification.read && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          Nouveau
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700">{notification.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

export default SuiviCandidature;
