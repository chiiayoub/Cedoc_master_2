import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import heroBg from '../assets/images/hero-bg.jpg';
import inptLogo from '../assets/logos/inpt-logo.png';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-none flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img src={inptLogo} alt="INPT Logo" className="h-12" />
        </div>
        <nav className="hidden md:flex gap-8 text-[var(--inpt-primary)] font-medium">
          <a href="#" className="hover:text-[var(--inpt-accent)]">Accueil</a>
          <Link to="/equipes-recherche" className="hover:text-[var(--inpt-accent)]">Équipes de recherche</Link>
          <Link to="/doctorants" className="hover:text-[var(--inpt-accent)]">Doctorants</Link>
          <Link to="/encadrants" className="hover:text-[var(--inpt-accent)]">Encadrants</Link>
          <a href="#" className="hover:text-[var(--inpt-accent)]">Contact</a>
        </nav>
        <Link to="/login" className="rounded-full bg-[var(--inpt-primary)] text-white px-6 py-2 font-semibold hover:bg-[var(--inpt-secondary)] transition">Connexion</Link>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-white py-20 px-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E0464]/80 via-[#14127A]/70 to-[#2A2183]/80 z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center drop-shadow-lg">Centre d'Études Doctorales INPT</h1>
          <p className="max-w-2xl text-center mb-8 text-lg md:text-xl text-white/90">Accompagner l'innovation, la recherche et l'excellence scientifique pour les doctorants de demain.</p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/sujets-these')}
              className="rounded-full bg-white text-[var(--inpt-primary)] font-bold px-8 py-3 text-lg shadow-lg hover:bg-[var(--inpt-accent)] hover:text-white transition"
            >
              Découvrir
            </button>
            <button
              onClick={() => navigate('/candidature')}
              className="rounded-full bg-[var(--inpt-accent)] text-white font-bold px-8 py-3 text-lg shadow-lg hover:bg-white hover:text-[var(--inpt-primary)] transition"
            >
              Postuler
            </button>
          </div>
        </div>
      </section>

      {/* Communauté */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--inpt-primary)] mb-6">Rejoignez notre communauté</h2>
          <p className="mb-6 text-gray-700 text-lg">Intégrez un réseau dynamique de doctorants, d'encadrants et de chercheurs engagés pour l'innovation et l'excellence scientifique. Profitez d'un accompagnement personnalisé, d'événements scientifiques et d'un environnement propice à la réussite de votre parcours doctoral.</p>
          <button
            onClick={() => navigate('/sujets-these')}
            className="rounded-full bg-[var(--inpt-primary)] text-white font-bold px-8 py-3 text-lg shadow-lg hover:bg-[var(--inpt-accent)] transition"
          >
            Découvrir
          </button>
        </div>
      </section>

      {/* Statistiques */}
      <section className="bg-[var(--inpt-bg)] py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8">
            <span className="text-3xl md:text-4xl font-bold text-[var(--inpt-primary)]">150+</span>
            <span className="text-gray-700 text-lg mt-2">Doctorants</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8">
            <span className="text-3xl md:text-4xl font-bold text-[var(--inpt-primary)]">9+</span>
            <span className="text-gray-700 text-lg mt-2">Laboratoires</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8">
            <span className="text-3xl md:text-4xl font-bold text-[var(--inpt-primary)]">50+</span>
            <span className="text-gray-700 text-lg mt-2">Encadrants</span>
          </div>
        </div>
      </section>

      {/* Comment Postuler */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--inpt-primary)] mb-4">Comment Postuler ?</h2>
          <p className="text-center text-gray-600 mb-12">Un processus simple et transparent en 3 étapes pour rejoindre nos programmes doctoraux</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Étape 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Choisir un sujet</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Explorez notre catalogue de sujets de thèse</li>
                <li>• Trouvez celui qui correspond à vos intérêts de recherche</li>
                <li>• Filtrage par domaine</li>
                <li>• Consultation des encadrants</li>
                <li>• Prérequis détaillés</li>
              </ul>
            </div>

            {/* Étape 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Préparer votre candidature</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rassemblez tous les documents nécessaires</li>
                <li>• Rédigez votre lettre de motivation</li>
                <li>• CV académique</li>
                <li>• Lettre de motivation</li>
                <li>• Projet de recherche</li>
              </ul>
            </div>

            {/* Étape 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 left-4 w-8 h-8 bg-[#007bff] text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Soumettre votre candidature</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Envoyez votre dossier complet via notre plateforme en ligne sécurisée</li>
                <li>• Dossier en ligne</li>
                <li>• Suivi du statut</li>
                <li>• Entretien si sélectionné</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a237e] text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Première colonne - INPT */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={inptLogo} alt="INPT Logo" className="h-8 brightness-0 invert" />
              <h3 className="font-bold text-xl">INPT</h3>
            </div>
            <p className="text-sm text-gray-300">Institut National des Postes et Telecommunications</p>
            <p className="text-sm text-gray-300">Former les ingénieurs et chercheurs de demain dans les technologies de l'information et de la communication</p>
          </div>

          {/* Deuxième colonne - Liens Utiles */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Liens Utiles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Plan du site</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Accessibilité</a></li>
            </ul>
          </div>

          {/* Troisième colonne - Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300">+212 5 38 00 27 00</p>
              <p className="text-gray-300">Avenue Allal Al Fassi, Madinat Al Irfane</p>
              <p className="text-gray-300">BP 713, Rabat, Maroc</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
