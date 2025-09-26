// Import du hook React "useState" qui permet de gérer un état local dans le composant.
import { useState } from 'react';
import ChevronLeft from '../assets/icons/ChevronLeft';
import ChevronRight from '../assets/icons/ChevronRight';
import './Gallery.scss';

// Définition du composant fonctionnel "Gallery".
// Props :
// - images : tableau d'URLs d'images à afficher dans le carrousel
// - title : utilisé pour compléter le texte alternatif (alt) des images
const Gallery = ({ images, title }) => {
  // État local qui stocke l’index de l’image actuellement affichée.
  // Par défaut, on commence à 0 → première image.
  const [currentIndex, setCurrentIndex] = useState(0);
 // Fonction pour afficher l'image précédente.
 
  const goToPrevious = () => {
     // Si on est déjà à la première image (index 0), on revient à la dernière.
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
// Fonction pour afficher l'image suivante.
  // Si on est déjà à la dernière image, on revient à la première (boucle infinie).
  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Ne pas afficher les flèches s'il n'y a qu'une seule image
  const showArrows = images.length > 1;

  return (
    <div className="gallery">
      {/* Image courante affichée selon l'index. */}
      {/* L'attribut alt est dynamique et ajoute un numéro de position (ex: "Titre - 2") 
          → améliore l'accessibilité en donnant du contexte. */}
      <img 
        src={images[currentIndex]} 
        alt={`${title} - ${currentIndex + 1}`}
        className="gallery-image"
      />
      {/* Rendu conditionnel : on affiche les flèches et le compteur uniquement 
          si la galerie contient plusieurs images */}
      {showArrows && (
        <>
          <button 
            className="gallery-arrow gallery-arrow--left"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            className="gallery-arrow gallery-arrow--right"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <ChevronRight size={32} />
          </button>
           {/* Compteur affichant la position actuelle dans la galerie */}
          <div className="gallery-counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;

