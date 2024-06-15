// Need to pass the favorites list as props to this component to display the LIST of FAVS to the user
    // When is favorited, add it to the favorites list; when unfavorited - remove from the fav list
    // Accessing the list through a button/link

    import { useEffect, useState } from 'react';

    const FavoritesList = () => {
        const [artItems, setArtItems] = useState([]);	
    const [favorites, setFavorites] = useState([]);

        const loadArtItems = () => {
            
        return fetch("https://api.artic.edu/api/v1/artworks/search");
    }

        const addToFavs = (item) => {
    
        setFavorites(previousFavorites => {
        const updatedFavs = [...previousFavorites, item]
        localStorage.setItem('favorites', JSON.stringify(updatedFavs))
            return updatedFavs;
    }) 
    }
    
    const removeFavs = (id) => {
        // removing a specific item
        
                setFavorites(previousFavorites => {
            const updatedFavs = previousFavorites.filter(el => el.id != id)
            localStorage.setItem('favorites', JSON.stringify(updatedFavs))
            return updatedFavs;
        }) 
    }
    
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks/search")
        .then(response => response.json())

            .then(response => {
                console.log(response)
            const savedFavs = localStorage.getItem('favorites') || "[]";
            setFavorites(JSON.parse(savedFavs));
            setArtItems(response.data);
                })

        }, []);
    

    return (
        <div className="favs-list">
                <h2>My Favorite Art List</h2>
        
                <ul>
                    {artItems.map((item, i) => (             // map through the favorites array  and render each favorite artwork as a list item
                        <li key={i}>{item.title}
                        <button onClick={() => addToFavs(item)}>Add</button>
                        </li>
                    ))}
                </ul>
        
                <ul>
                   {favorites.map((favorite, i) => (             // map through the favorites array  and render each favorite artwork as a list item
                    <li key={i}>{favorite.title}
                        <button onClick={() => removeFavs(favorite.id)}>Remove</button>
                    </li>
                    ))}
                </ul>
            </div>
            );
    }

    
        export default FavoritesList;

