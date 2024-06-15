import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import ApiService from '../services/ApiService';
import Carousel from './Carousel';

const MainPage = () => {

    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState(null);
    const [centuryDescriptions, setCenturyDescriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    const updateFavorites = (artwork, isFavorite) => {
        if (isFavorite) {
            setFavorites([...favorites, artwork]); // Add artwork to favorites
        } else {
            setFavorites(favorites.filter(item => item !== artwork)); // Remove artwork from favorites
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await ApiService.fetchArtworks();
                setArtworks(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        setCenturyDescriptions([
            {
                century: '15th Century',
                description: 'In the 15th century, art flourished with the emergence of the Renaissance period. Artists like Leonardo da Vinci and Michelangelo created masterpieces, exploring themes of humanism, perspective, and naturalism.'
            },
            {
                century: '16th Century',
                description: 'During the 16th century, the Renaissance continued to influence art with artists like Raphael and Titian producing notable works. This period also saw the rise of Mannerism, characterized by exaggerated proportions and stylized compositions.'
            },
            {
                century: '17th Century',
                description: 'The 17th century marked the Golden Age of Dutch painting, with artists like Rembrandt and Vermeer making significant contributions. Baroque art flourished in Europe, featuring dramatic compositions and emotional intensity.'
            },
            {
                century: '18th Century',
                description: 'The 18th century saw the rise of Neoclassicism, inspired by the art and culture of ancient Greece and Rome. Artists like Jacques-Louis David embraced classical themes and ideals, while Rococo art emphasized elegance and ornamentation.'
            },
            {
                century: '19th Century',
                description: 'The 19th century was a period of great innovation and change in art. Romanticism celebrated emotion, imagination, and nature, while Realism focused on depicting everyday life with accuracy and detail. Impressionism introduced a new way of seeing the world, with artists like Monet and Renoir capturing fleeting moments of light and color.'
            },
            {
                century: '20th Century',
                description: 'The 20th century was a time of radical experimentation and innovation in art. Movements like Cubism, Surrealism, and Abstract Expressionism pushed the boundaries of traditional art forms, challenging viewers to see the world in new ways. Artists like Picasso, Dali, and Pollock shattered conventions and redefined the possibilities of artistic expression.'
            },
            {
                century: '21st Century',
                description: 'The 21st century continues to see diverse and evolving forms of artistic expression. Digital art, street art, and multimedia installations are just a few examples of how artists are pushing boundaries and engaging with contemporary issues. The internet and social media have also transformed the way art is created, shared, and experienced, making it more accessible and interconnected than ever before.'
            },
        ]);

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    
    return (
        <main>
            <section id="carousel">
                <h2>✨Welcome to the Art class✨</h2>
                <h2 className='h2Carousel'>Art Carousel</h2>
                <Carousel artworks={artworks} />
            </section>

            <section id="artworks">
                <div className="artworks-container">
                    {/* This works in the devtools components state once the button is clicked & the state is changed to true as well */}
                {artworks.map(artwork => (
                        <ArtworkCard key={artwork.id} artwork={artwork} updateFavorites={updateFavorites} />
                    ))}
                </div>
            </section>

            <section id="about">
            <h2 className='h2AboutArt'>About Art Through the Centuries</h2>
                {centuryDescriptions.map((century, index) => (
                    <div key={index}>
                        <h3>{century.century}</h3>
                        <p>{century.description}</p>
                    </div>
                ))}
            </section>

        </main>
    );
}
export default MainPage;