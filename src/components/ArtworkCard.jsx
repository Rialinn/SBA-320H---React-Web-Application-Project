// Testing an additional requirement - to allow the user to add the artwork to their favorite to meet the useState requirement (to manage the sate of whether an artwork is favorited by a user and to keep the choice of fav artworks across sessions and updating the UI to reflect the changes)

// npm i react-icons

import { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const ArtworkCard = ({ artwork, updateFavorites }) => {

    // State to track whether artwork is favorited
    const [isFavorite, setIsFavorite] = useState(false);
    
    const toggleFavorite = () => {
        const newFavoriteStatus = !isFavorite;
        setIsFavorite(newFavoriteStatus);
    
        updateFavorites(artwork, newFavoriteStatus);

// need to pass the updated list of favorites from this component to its parent component (likely MainPage or App) and update the state there!


        if (isFavorite) {
            // console.log(`Removed the "${artwork.title}" from favorites.`);
        } else {
            // console.log(`Added the "${artwork.title}" to favorites.`)
        }
    };

    return (
    <div className="artwork-card">
        <h3  className="h3Dark">{artwork.title}</h3>
        <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/100,/0/default.jpg`} alt={artwork.title} />
        <p>Artist: {artwork.artist_title}</p>
            <p>Date: {artwork.date_display}</p>
            <p>Details: {artwork.place_of_origin}</p>
            <div dangerouslySetInnerHTML={{ __html: artwork.description }} />
        <button onClick={toggleFavorite}>
            <FaHeart color={isFavorite ? 'red' : 'gray'} />
        </button>
    </div>
    )
}

export default ArtworkCard; 