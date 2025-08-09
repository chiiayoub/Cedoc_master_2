import React from 'react';
import { User, BookOpen, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const inptLogo = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#0E0464" />
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" dy=".3em">INPT</text>
  </svg>
);

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--inpt-bg)]">
      {/* Header */}
      <header className="w-full bg-white shadow flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          {inptLogo}
          <span className="text-xl font-bold text-[var(--inpt-primary)]">INPT</span>
        </div>
        <nav className="hidden md:flex gap-8 text-[var(--inpt-primary)] font-medium">
          <a href="#" className="hover:text-[var(--inpt-accent)]">Accueil</a>
          <a href="#" className="hover:text-[var(--inpt-accent)]">Doctorants</a>
          <a href="#" className="hover:text-[var(--inpt-accent)]">Encadrants</a>
          <a href="#" className="hover:text-[var(--inpt-accent)]">Contact</a>
        </nav>
        <button className="rounded-full bg-[var(--inpt-primary)] text-white px-6 py-2 font-semibold hover:bg-[var(--inpt-secondary)] transition">Connexion</button>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0E0464] via-[#14127A] to-[#2A2183] text-white py-16 px-4 flex flex-col items-center">
        <span className="mb-4 inline-block bg-white/10 border border-white/30 text-xs font-semibold rounded-full px-4 py-1 tracking-widest uppercase">Excellence en Recherche Doctorale</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-center drop-shadow-lg">Centre d'Études Doctorales INPT</h1>
        <p className="max-w-2xl text-center mb-8 text-lg md:text-xl text-white/90">Accompagner l'innovation, la recherche et l'excellence scientifique pour les doctorants de demain.</p>
        <div className="flex gap-4 mb-10 flex-wrap justify-center">
          <Link to="/sujets-these" className="rounded-full bg-white text-[var(--inpt-primary)] font-bold px-6 py-2 shadow hover:bg-[var(--inpt-accent)] hover:text-white transition discover-btn">Découvrir</Link>
          <button className="rounded-full bg-white text-[var(--inpt-primary)] font-bold px-6 py-2 shadow hover:bg-[var(--inpt-secondary)] hover:text-white transition">Postuler</button>
        </div>
        {/* Stats */}
        <div className="flex gap-8 mt-6 mb-2 flex-wrap justify-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">150+</span>
            <span className="text-white/80 text-sm">Doctorants</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">9+</span>
            <span className="text-white/80 text-sm">Laboratoires</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold">50+</span>
            <span className="text-white/80 text-sm">Encadrants</span>
          </div>
        </div>
      </section>

      {/* Comment Postuler */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--inpt-primary)] mb-10">Comment Postuler ?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-[var(--inpt-primary)] text-white rounded-xl shadow-lg p-8 relative">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[var(--inpt-primary)] text-2xl font-bold border-4 border-[var(--inpt-primary)]">1</span>
            <User className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Créer un compte</h3>
            <p className="text-white/90 text-center">Inscrivez-vous sur la plateforme et accédez à votre espace candidat.</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center bg-[var(--inpt-secondary)] text-white rounded-xl shadow-lg p-8 relative">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[var(--inpt-secondary)] text-2xl font-bold border-4 border-[var(--inpt-secondary)]">2</span>
            <BookOpen className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Déposer le dossier</h3>
            <p className="text-white/90 text-center">Complétez votre dossier de candidature et soumettez-le en ligne.</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center bg-[var(--inpt-accent)] text-white rounded-xl shadow-lg p-8 relative">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[var(--inpt-accent)] text-2xl font-bold border-4 border-[var(--inpt-accent)]">3</span>
            <Mail className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg mb-2">Confirmation</h3>
            <p className="text-white/90 text-center">Recevez la confirmation et suivez l'avancement de votre candidature.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E0464] text-white py-10 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 mb-2">{inptLogo}<span className="font-bold text-lg">INPT</span></div>
            <span className="text-white/70 text-sm">Centre d'Études Doctorales</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold mb-1">Liens Utiles</span>
            <a href="#" className="text-white/80 hover:underline">Accueil</a>
            <a href="#" className="text-white/80 hover:underline">Doctorants</a>
            <a href="#" className="text-white/80 hover:underline">Encadrants</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold mb-1">Contact</span>
            <span className="text-white/80 text-sm">Avenue Allal El Fassi, Rabat</span>
            <span className="text-white/80 text-sm">contact@inpt.ac.ma</span>
          </div>
        </div>
        <div className="text-center text-white/60 text-xs mt-8">&copy; {new Date().getFullYear()} INPT - Centre d'Études Doctorales. Tous droits réservés.</div>
      </footer>
    </div>
  );
}

export default HomePage;
