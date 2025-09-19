import { useState, useEffect } from 'react'; // Importe les hooks React :
// - useState : pour gérer l’état local (liste des logements ici)
// - useEffect : pour exécuter du code au montage du composant

// Importe le composant Banner (bannière en haut de la page)
import Banner from '../components/Banner'; // Importe le composant Banner (bannière en haut de la page)
import Card from '../components/Card'; // Importe le composant Card (affichage d'un logement)
import accommodationsData from '../../logements.json'; // Importe les données des logements à partir d'un fichier JSON
import './Home.scss'; // Importe le fichier de styles SCSS pour la page Home

const Home = () => {
  const [accommodations, setAccommodations] = useState([]); // Déclare un état local "accommodations" (tableau vide au départ) pour stocker les logements.

  useEffect(() => {
    setAccommodations(accommodationsData); // Utilise useEffect pour charger les données des logements à partir du fichier JSON et les stocker dans l'état "accommodations".
  }, []);
 // Retourne le JSX qui définit la structure visuelle de la page d'accueil.
  return (
    <main className="home">
      <div className="home-container">
        <Banner 
          image="/src/assets/banner-home.png"
          text="Chez vous, partout et ailleurs"
        />
        
        <section className="accommodations-grid">
          {accommodations.map(accommodation => (
            <Card 
              key={accommodation.id} // Clé unique pour React (id du logement)
              accommodation={accommodation} // Passe l'objet logement entier en prop
            />
          ))}
        </section>
      </div>
    </main>
  );
};
// Exporte le composant Home pour pouvoir l’utiliser ailleurs (ex : dans le Router)
export default Home;

