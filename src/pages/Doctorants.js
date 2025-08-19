import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import inptLogo from '../assets/logos/inpt-logo.png';

function Doctorants() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('all');

  // Données exemple des doctorants
  const students = [
    {
      id: 1,
      name: "Ahmed Bennani",
      year: "2023",
      subject: "Intelligence Artificielle pour la détection d'anomalies dans les réseaux 5G",
      supervisor: "Dr. Mohammed Alami",
      team: "SIVA",
      publications: [
        "Deep Learning for Network Anomaly Detection (2024)",
        "AI-based Security in 5G Networks (2023)"
      ],
      email: "a.bennani@inpt.ac.ma",
      image: "https://placeholderr.co/100"
    },
    {
      id: 2,
      name: "Laila Moussaoui",
      year: "2024",
      subject: "Optimisation des réseaux IoT par apprentissage automatique",
      supervisor: "Dr. Fatima Zahra El Alami",
      team: "RSSI",
      publications: [
        "Machine Learning for IoT Networks Optimization (2025)"
      ],
      email: "l.moussaoui@inpt.ac.ma",
      image: "https://placeholderr.co/100"
    },
    {
      id: 3,
      name: "Karim Tazi",
      year: "2022",
      subject: "Sécurité des systèmes embarqués dans l'IoT",
      supervisor: "Dr. Hassan Touimi",
      team: "SETM",
      publications: [
        "Security in Embedded IoT Systems (2024)",
        "Blockchain for IoT Security (2023)",
        "Smart Contract Security (2022)"
      ],
      email: "k.tazi@inpt.ac.ma",
      image: "https://placeholderr.co/100"
    }
  ];

  // Liste des années pour le filtre
  const years = ['all', ...new Set(students.map(s => s.year))].sort();

  // Filtrer les doctorants
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = filterYear === 'all' || student.year === filterYear;
    return matchesSearch && matchesYear;
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
        <h1 className="text-3xl font-bold text-center mb-8">Doctorants</h1>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Rechercher un doctorant..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year === 'all' ? 'Toutes les années' : `Promotion ${year}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map(student => (
            <div key={student.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header with image */}
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 text-white">
                <div className="flex items-center gap-4">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16 rounded-full border-2 border-white"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{student.name}</h3>
                    <p className="text-green-100">Promotion {student.year}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Sujet de thèse:</h4>
                  <p className="text-gray-600">{student.subject}</p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">Encadrant:</span> {student.supervisor}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Équipe:</span> {student.team}
                  </p>
                </div>

                {student.publications.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Publications:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {student.publications.map((pub, index) => (
                        <li key={index}>{pub}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href={`mailto:${student.email}`}
                  className="block w-full text-center py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
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

export default Doctorants;
