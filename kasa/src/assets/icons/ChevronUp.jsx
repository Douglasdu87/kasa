import React from 'react';
// Définition du composant fonctionnel "ChevronUp".
// Props :
// - className : permet d’ajouter des classes CSS personnalisées pour styler le SVG (par défaut vide).
// - size : définit la largeur et la hauteur du SVG (par défaut 24px).
const ChevronUp = ({ className = '', size = 24 }) => {
  return (
    // SVG représentant une icône de flèche orientée vers le haut.
    // Les props "className" et "size" rendent ce composant réutilisable et personnalisable.
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15L12 9L6 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronUp;
