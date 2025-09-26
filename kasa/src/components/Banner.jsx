// On importe le fichier SCSS spécifique à ce composant.
// Cela permet de séparer le style (SCSS/CSS) de la logique (JSX/React).
// Le fichier Banner.scss contiendra les règles de style liées à l'apparence de la bannière.

import './Banner.scss';
// Déclaration d’un composant fonctionnel React appelé "Banner".
// Il reçoit des props :
// - image : l’URL de l’image à afficher
// - text : le texte optionnel qui s’affiche sur l’image
// - className : une classe supplémentaire passée depuis l’extérieur (par défaut vide).
const Banner = ({ image, text, className = '' }) => {
  return (
// div principale qui encapsule toute la bannière.
// On fusionne "banner" (classe par défaut) avec className)
    <div className={`banner ${className}`}>
      <img src={image} alt="" className="banner-image" />
      {text && (
        <div className="banner-overlay">
          <h1 className="banner-text">{text}</h1>
        </div>
      )}
    </div>
  );
};
// Exportation par défaut du composant, 
// ce qui permet de l’importer facilement ailleurs dans l’application.
export default Banner;

