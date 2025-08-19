import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import inptLogo from '../assets/logos/inpt-logo.png';

function EquipesRecherche() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Données exemple des équipes de recherche
  const researchTeams = [
    {
      id: 1,
      name: "Systèmes Intelligents et Vision Artificielle",
      shortName: "SIVA",
      specialties: ["Intelligence Artificielle", "Vision par Ordinateur", "Deep Learning"],
      description: "L'équipe SIVA se concentre sur le développement de systèmes intelligents et l'application de techniques avancées de vision artificielle pour résoudre des problèmes complexes.",
      members: [
        { name: "Dr. Mohammed Alami", role: "Directeur d'équipe", specialization: "Deep Learning" },
        { name: "Dr. Sara Bennani", role: "Professeur", specialization: "Computer Vision" },
        { name: "Dr. Karim Idrissi", role: "Professeur", specialization: "Machine Learning" }
      ],
      subjects: [
        { title: "Détection d'anomalies dans les images médicales par Deep Learning", supervisor: "Dr. Mohammed Alami" },
        { title: "Système de surveillance intelligent basé sur la vision artificielle", supervisor: "Dr. Sara Bennani" }
      ]
    },
    {
      id: 2,
      name: "Réseaux et Sécurité des Systèmes d'Information",
      shortName: "RSSI",
      specialties: ["Cybersécurité", "Réseaux 5G", "IoT Security"],
      description: "L'équipe RSSI travaille sur la sécurisation des infrastructures réseau modernes et le développement de solutions de cybersécurité innovantes.",
      members: [
        { name: "Dr. Hassan Touimi", role: "Directeur d'équipe", specialization: "Cybersécurité" },
        { name: "Dr. Fatima Zahra El Alami", role: "Professeur", specialization: "Réseaux 5G" },
        { name: "Dr. Youssef Bennani", role: "Professeur", specialization: "IoT Security" }
      ],
      subjects: [
        { title: "Sécurisation des réseaux 5G : approche basée sur l'IA", supervisor: "Dr. Fatima Zahra El Alami" },
        { title: "Protection des objets connectés contre les cyberattaques", supervisor: "Dr. Youssef Bennani" }
      ]
    },
    {
      id: 3,
      name: "Systèmes Embarqués et Technologies Mobiles",
      shortName: "SETM",
      specialties: ["Systèmes Embarqués", "Applications Mobiles", "IoT"],
      description: "L'équipe SETM se spécialise dans le développement de solutions embarquées et d'applications mobiles innovantes.",
      members: [
        { name: "Dr. Ahmed Moussaoui", role: "Directeur d'équipe", specialization: "Systèmes Embarqués" },
        { name: "Dr. Nadia Tazi", role: "Professeur", specialization: "IoT" },
        { name: "Dr. Omar El Mansouri", role: "Professeur", specialization: "Applications Mobiles" }
      ],
      subjects: [
        { title: "Optimisation énergétique des systèmes IoT", supervisor: "Dr. Nadia Tazi" },
        { title: "Développement d'applications mobiles pour la santé connectée", supervisor: "Dr. Omar El Mansouri" }
      ]
    }
  ];

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
        <h1 className="text-3xl font-bold text-center mb-8">Équipes de Recherche</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Teams List */}
          <div className="md:col-span-1 space-y-4">
            {researchTeams.map(team => (
              <div
                key={team.id}
                onClick={() => setSelectedTeam(team)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedTeam?.id === team.id
                    ? 'bg-blue-50 border-blue-500 border-2'
                    : 'bg-white shadow-md hover:shadow-lg border border-gray-200'
                }`}
              >
                <h3 className="font-bold text-lg mb-2">{team.shortName}</h3>
                <p className="text-sm text-gray-600">{team.name}</p>
              </div>
            ))}
          </div>

          {/* Team Details */}
          <div className="md:col-span-2">
            {selectedTeam ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">{selectedTeam.name}</h2>
                
                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-600">{selectedTeam.description}</p>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Spécialités</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTeam.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Members */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Membres de l'équipe</h3>
                  <div className="grid gap-4">
                    {selectedTeam.members.map((member, index) => (
                      <div key={index} className="flex flex-col p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium">{member.name}</span>
                        <span className="text-sm text-gray-600">{member.role}</span>
                        <span className="text-sm text-blue-600">{member.specialization}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Research Subjects */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Sujets de recherche proposés</h3>
                  <div className="space-y-4">
                    {selectedTeam.subjects.map((subject, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <p className="font-medium mb-2">{subject.title}</p>
                        <p className="text-sm text-gray-600">Encadrant: {subject.supervisor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center min-h-[400px] text-gray-500">
                <span className="material-icons text-6xl mb-4">groups</span>
                <p>Sélectionnez une équipe pour voir les détails</p>
              </div>
            )}
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

export default EquipesRecherche;
