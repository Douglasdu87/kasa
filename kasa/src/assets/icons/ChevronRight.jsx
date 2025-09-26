import React from 'react';
// Définition du composant fonctionnel "ChevronRight".
// Props :
// - size : définit la largeur/hauteur du SVG
const ChevronRight = ({ size = 32, className = '' }) => (
// Icône SVG représentant une flèche orientée vers la droite.
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24" // Définit la zone de dessin (24x24 → standard d’icônes)
    fill="none" // Pas de remplissage, uniquement un contour
    stroke="currentColor"  // La couleur du trait hérite de la propriété
    strokeWidth="2" // Épaisseur du contour
    strokeLinecap="round"   // Extrémités arrondies
    strokeLinejoin="round"  // Coins arrondis
    className={className}
  >
    {/* polyline définit une série de points reliés par des segments  Ici : (9,18) → (15,12) → (9,6), ce qui dessine une flèche vers la droite. */}
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

export default ChevronRight;
