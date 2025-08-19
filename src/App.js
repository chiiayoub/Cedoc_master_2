import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SujetsThese from './pages/SujetsThese';
import Login from './pages/Login';
import Register from './pages/Register';
import Candidature from './pages/Candidature';
import SuiviCandidature from './pages/SuiviCandidature';
import EquipesRecherche from './pages/EquipesRecherche';
import Encadrants from './pages/Encadrants';
import Doctorants from './pages/Doctorants';
import EspaceDoctorant from './pages/EspaceDoctorant';
import EspaceDirecteurCEDoc from './pages/EspaceDirecteurCEDoc';
import EspaceChefEquipe from './pages/EspaceChefEquipe';
import EspaceProfesseur from './pages/EspaceProfesseur';


function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
        <main style={{ width: '100%', margin: '0', padding: '0' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sujets-these" element={<SujetsThese />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/candidature" element={<Candidature />} />
            <Route path="/suivi-candidature" element={<SuiviCandidature />} />
            <Route path="/equipes-recherche" element={<EquipesRecherche />} />
            <Route path="/encadrants" element={<Encadrants />} />
            <Route path="/doctorants" element={<Doctorants />} />
             <Route path="/espace-directeur-cedoc" element={<EspaceDirecteurCEDoc />} />
            <Route path="/espace-chef-equipe" element={<EspaceChefEquipe />} />
            <Route path="/espace-professeur" element={<EspaceProfesseur />} />
            
            

        
            <Route path="/espace-doctorant" element={<EspaceDoctorant />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
