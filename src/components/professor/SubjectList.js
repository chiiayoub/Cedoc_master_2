import React from 'react';
import DomainBadge from '../DomainBadge';

export default function SubjectList({ subjects, onEdit, onDelete }) {
  if (subjects.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Aucun sujet proposé pour le moment
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {subjects.map(subject => (
        <div 
          key={subject.id} 
          className={`subject-card ${subject.status}`}
        >
          <div className="subject-header">
            <h3 className="text-lg font-semibold">{subject.title}</h3>
            <span className={`status-badge ${subject.status}`}>
              {subject.status === 'pending' ? 'En attente' : 'Validé'}
            </span>
          </div>
          
          <div className="subject-meta">
            <div className="flex items-center">
              <DomainBadge domaine={subject.domain} />
            </div>
            <div className="text-sm">
              <span className="font-medium">Équipe:</span> {subject.team}
            </div>
          </div>
          
          <p className="subject-description">{subject.description}</p>
          
          <div className="subject-actions">
            <button 
              onClick={() => onEdit(subject)}
              className="edit-btn"
            >
              Modifier
            </button>
            <button 
              onClick={() => onDelete(subject.id)}
              className="delete-btn"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}