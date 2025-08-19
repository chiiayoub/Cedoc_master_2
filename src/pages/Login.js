// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import inptLogo from '../assets/logos/inpt-logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
   
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simuler un délai de connexion
    setTimeout(() => {
      // Validation basique
      if (!email || !password) {
        setError('Veuillez remplir tous les champs');
        setIsLoading(false);
        return;
      }

      // Vérification des identifiants et redirection
      if (email === 'candidat@inpt.ac.ma' && password === 'password123') {
        navigate('/suivi-candidature');
      } 
      else if (email === 'professeur@inpt.ac.ma' && password === 'password123') {
        navigate('/espace-professeur');
      }
      else if (email === 'chef@inpt.ac.ma' && password === 'password123') {
        navigate('/espace-chef-equipe');
      }
      else if (email === 'directeur@inpt.ac.ma' && password === 'password123') {
        navigate('/espace-directeur-cedoc');
      }
      else {
        setError('Email ou mot de passe incorrect');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header avec logo et retour */}
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

      {/* Formulaire de connexion */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-2">Connexion à la plateforme</h1>
          <p className="text-gray-600 text-center mb-8">Accédez à votre espace personnel</p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="votre.email@inpt.ac.ma"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Votre mot de passe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <span className="material-icons">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-md transition-colors ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <span className="material-icons animate-spin mr-2">autorenew</span>
                  Connexion en cours...
                </span>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800">Mot de passe oublié ?</a>
          </div>

          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Link to="/register" className="text-blue-600 hover:text-blue-800">
                Créer un compte candidat
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={inptLogo} alt="INPT Logo" className="h-8" />
              <span className="font-bold">INPT</span>
            </div>
            <p className="text-sm text-gray-600">
              Institut National des Postes et Télécommunications
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Formation</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Programmes doctoraux</a></li>
              <li><a href="#">Admission</a></li>
              <li><a href="#">Bourses</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recherche</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Laboratoires</a></li>
              <li><a href="#">Publications</a></li>
              <li><a href="#">Projets</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Avenue Allal Al Fassi</li>
              <li>Rabat, Maroc</li>
              <li>+212 5 37 77 73 50</li>
              <li>contact@inpt.ac.ma</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t">
          <p className="text-center text-sm text-gray-600">
            © 2025 INPT. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Login;