const ApiService = {

    fetchArtworks: async ()=> {
        try {
            const response = await fetch('https://api.artic.edu/api/v1/artworks');
            if (!response.ok) {
                throw new Error('Failed to fetch and load artworks.')
            }

            const data = await response.json();
            if (!Array.isArray(data?.data)) {
                throw new Error('Invalid data.');
            }

            return data.data;           // Extracting the data array here
            } catch (error) {
                throw new Error(error.message);
            }
        },

        searchArtist: async (artistName) => {
            try {
                const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(artistName)}`);
                if (!response.ok) {
                    throw new Error ('Failed to fetch and load an artist.')
                }

                    console.log(response)
                    
                const data = await response.json();
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        }
    }


export default ApiService;