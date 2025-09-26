import React from 'react';
// - size : contrôle la largeur et la hauteur du SVG (par défaut 24px).
// - fill : définit la couleur de remplissage de l’étoile (par défaut "none" → vide).
// Définition du composant fonctionnel "Star".
// Props :
const Star = ({ className = '', size = 24, fill = 'none' }) => {
  return (
    // SVG représentant une étoile.
    // L’icône est flexible grâce aux props (taille, remplissage, style)
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
       {/* Chemin qui dessine une étoile à 5 branches */}
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="currentColor" // La bordure prend la couleur héritée via le style (propriété "color").
        strokeWidth="2" // Épaisseur du contour de l’étoile.
        strokeLinecap="round" // Extrémités arrondies des traits.
        strokeLinejoin="round"  // Coins arrondis aux jonctions.
      />
    </svg>
  );
};

export default Star;
