import { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import axios from 'axios';


const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const handleSearch = async () => {
    //     setLoading(true);
    //     setError(null);

        // try {
        //     const result = await ApiService.searchArtist(searchTerm);
        //     setSearchResult(result.data);
        //     console.log("slkfjmsdlkmfdlsk", searchResult)
        // } catch (error) {
        //     setError(error.message);
        // }
        // setLoading(false);

        const handleSearch = async () => {
            try {
                const response = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}`);
                setSearchResult(response.data.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };
        // }
        
        
        const handleChange = (e) => {
            setSearchTerm(e.target.value);
        }
        
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        }
        
        console.log(searchResult);


    return (
        <div>
            <input
                type="text"
                id='search'
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />

            <button onClick={handleSearch} id='searchBtn'>Search</button> 

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {searchResult.map((artwork) => (<li key={artwork.id}>
                {artwork.title}
            </li>)) 
            }
        </div>
    );
}

export default SearchFilter;