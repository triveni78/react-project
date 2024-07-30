 
import axios from 'axios';
import React, { useState } from 'react';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');

    const apiKey ='329d103';  

    const fetchMovies = () => {
        let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${name}&type=movie&page=1`;

        axios.get(url)
            .then((res) => {
                if (res.data.Response === 'True') {
                    let filteredMovies = res.data.Search;

                    if (language) {
                        filteredMovies = filteredMovies.filter(movie => movie.Language.toLowerCase().includes(language.toLowerCase()));
                    }

                    setMovies(filteredMovies);
                } else {
                    setMovies([]);
                }
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setMovies([]);
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchMovies();
    };

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        setLanguage(selectedValue);
    };

    return (
        <div className='container movietop'>
            <h1 className='text-center text-light mt-3 mb-4'>All Movies Search Here</h1>
            <div className='row'>
               
                <div className='col-md-12'>
                    <div className='searchBar text-center m-5'>
                        <input
                            type='text'
                            placeholder='Search movies'
                            onChange={(e) => setName(e.target.value)} style={{backgroundColor:"white"}}
                        />
                        <button className=' text-dark' onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            {movies.length > 0 && (
                <div className='row'style={{backgroundColor:'gray', padding:"20px"}}>
                    {movies.map((movie) => (
                        <div key={movie.imdbID} className='col-md-4'>
                            <div className='card' style={{ height: 500, marginBottom: 30 }}>
                                <img
                                    src={movie.Poster}
                                    className='card-img-top'
                                    alt={movie.Title}
                                    width={300}
                                    height={350}
                                />
                                <div className='card-body'>
                                    <h2 className='card-title'>{movie.Title}</h2>
                                    <button className='movie-detailsBtn bg-success text-light'>
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}



// import React, { useState, useEffect } from 'react';
 
 
// export default function Movies() {
//   const [movies, setMovies] = useState([]);
 
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=3b14397db23f64f9c18611942b30cb26");
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setMovies(data.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
 
//     fetchMovies();
//   }, []);
 
//   return (
//     <div className="container">
//       <h1 className="mt-5 mb-4">Movies</h1>
      
 
     



//             <div className='row'style={{}}>
//                 <div className='className="col-md-4"' style={{backgroundColor:'gray', padding:"20px" ,height:'250px',width:'300px'}}>
//             {movies.map(movie => (
//           <div key={movie.id} >
       
                        
                            
//                          {movie.backdrop_path && (
//                                  <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
//                   alt={`${movie.title} Backdrop`} />  )}
                  
               
//                                 <div className='card-body'>
//                                     <h2 className='card-title'>{movie.title}</h2>
//                                     <button className='movie-detailsBtn bg-success text-light'>
//                                         Details
//                                     </button>
//                                 </div>  
                            
//                                 </div>  ))   }
//                            </div>
                    
//                            </div>
                  
                 
      
              
//                 </div>
                
                
//            ) }