import { useState } from 'react'; // Importe le hook useState de React pour gérer l'état (ouverture/fermeture).
import ChevronUp from '../assets/icons/ChevronUp'; // Importe l'icône ChevronUp personnalisée.
import './Collapse.scss';
// Importe les styles spécifiques pour ce composant (fichier SCSS).

// Déclare un composant fonctionnel "Collapse" qui reçoit des props :
// - title : le titre de la section
const Collapse = ({ title, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Déclare un état local "isOpen" (false au départ) pour savoir si le contenu est ouvert ou fermé.

 // Fonction qui inverse la valeur de "isOpen" à chaque clic.
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };


  // Retourne le JSX (la structure HTML du composant).
  return (
    <div className={`collapse ${className}`}>
      <button
        className="collapse-header"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <span className="collapse-title">{title}</span>
        <ChevronUp
          className={`collapse-icon ${isOpen ? 'open' : ''}`}
          size={24}
        />
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <div className="collapse-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse; // Exporte le composant Collapse pour pouvoir l'utiliser ailleurs.
