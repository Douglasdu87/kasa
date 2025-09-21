import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom'; // Importation des outils de React Router 
import Gallery from '../components/Gallery'; // Importation du composant Gallery pour afficher les images du logement
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import accommodationsData from '../logements.json';
import './Accommodation.scss';

// Déclaration du composant fonctionnel Accommodation
const Accommodation = () => {
  const { id } = useParams(); // Récupération de l'ID passé dans l'URL grâce à useParams()
  // Déclaration d'un état pour stocker le logement correspondant à cet ID
  const [accommodation, setAccommodation] = useState(null);
  // Déclaration d'un état pour savoir si les données sont en cours de chargement
  const [loading, setLoading] = useState(true);
// useEffect se déclenche à chaque changement de l'ID dans l'URL
  useEffect(() => {
// Recherche dans les données du logement correspondant à l'ID
    const foundAccommodation = accommodationsData.find(acc => acc.id === id);
// Mise à jour de l'état avec le logement trouvé (ou undefined si rien trouvé)
    setAccommodation(foundAccommodation);
// Indique que le chargement est terminé
    setLoading(false);
  }, [id]); // Dépendance : ce code se relance si l'ID change

    // Si les données sont encore en cours de chargement, on affiche un texte temporaire
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Si aucun logement n'a été trouvé, redirection automatique vers la page 404
  if (!accommodation) {
    return <Navigate to="/404" replace />;
  }


  // Si on a trouvé un logement, on l'affiche dans la page
  return (
    <main className="accommodation">
      <div className="accommodation-container">
        <Gallery 
          images={accommodation.pictures} 
          title={accommodation.title}
        />
        
        <div className="accommodation-header">
          <div className="accommodation-info">
            <h1 className="accommodation-title">{accommodation.title}</h1>
            <p className="accommodation-location">{accommodation.location}</p>
            
            <div className="accommodation-tags">
              {accommodation.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>
          
          <div className="accommodation-host">
            <div className="host-info">
              <span className="host-name">{accommodation.host.name}</span>
              <img 
                src={accommodation.host.picture} 
                alt={accommodation.host.name}
                className="host-picture"
              />
            </div>
            <Rating rating={parseInt(accommodation.rating)} />
          </div>
        </div>
        
        <div className="accommodation-details">
          <Collapse title="Description">
            <p>{accommodation.description}</p>
          </Collapse>
          
          <Collapse title="Équipements">
            <ul>
              {accommodation.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  );
};
// Export du composant pour l'utiliser ailleurs dans l'application (ex : dans le router)
export default Accommodation;


