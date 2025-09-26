// On importe le composant "Link" de react-router-dom.
// Il sert à créer des liens internes dans une Single Page Application (SPA)
// sans recharger la page complète (navigation client-side).

import { Link } from 'react-router-dom';

// Importation du fichier SCSS contenant les styles propres à la carte.
import './Card.scss';
// Déclaration d’un composant fonctionnel React appelé "Card".
// Il reçoit une prop "accommodation" qui est un objet contenant 
// des informations sur un logement (id, cover, title, etc.).
const Card = ({ accommodation }) => {
  return (
// Le composant "Link" permet de transformer toute la carte en lien cliquable.
// Ici, on redirige vers une route dynamique basée sur l'ID du logement : 
    <Link to={`/accommodation/${accommodation.id}`} className="card">
      <img 
        src={accommodation.cover} 
        alt={accommodation.title} 
        className="card-image" 
      />
      <div className="card-overlay">
        <h3 className="card-title">{accommodation.title}</h3>
      </div>
    </Link>
  );
};
// On exporte le composant pour l’utiliser ailleurs dans l’application.
export default Card;

