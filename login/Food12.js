 



import React, { useState, useEffect } from 'react';

const Food12 = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const YOUR_APP_ID = "6db946e5"; 
    const YOUR_APP_KEY = "14b1c5e57328eb27f1c64126560fd32b";

    const fetchRecipes = () => {
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(result => {
                if (result.hits && result.hits.length > 0) {
                    setData(result.hits);  
                } else {
                    console.error('No hits found in response:', result);
                    setData([]);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setData([]);  
            });
    }

    const handleOptionSelect = (option) => {
        setSearch(option);
    }

    const handleClick = (e) => {
        e.preventDefault();  
        fetchRecipes();
    }

    useEffect(() => {
        if (search.trim() !== '') {
            fetchRecipes();
        }
    }, [search]);

    return (
        <div className='text-light'>
            <center>
                <h1 className='bg-dark text-light'>Search Recipes</h1>
                <div>
                    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search recipe' className='w-50 p-2 mb-2'/>
                    <button className='btn btn-primary p-2 mb-2' onClick={handleClick}>Search</button>
                </div>
                <div className="options"value={search} onChange={(e) => setSearch(e.target.value)} onClick={handleClick}  >
                    <button className="btn btn-secondary mr-2 mb-2 p-2 m-1" onClick={() => handleOptionSelect('egg biryani')}>Egg Biryani</button>
                    <button className="btn btn-secondary mr-2 mb-2 p-2 m-1" style={{ width:'140px' }} onClick={() => handleOptionSelect('chicken biryani')}>Chicken Biryani</button>
                    <button className="btn btn-secondary mr-2 mb-2 p-2 m-1" style={{ width:'140px' }} onClick={() => handleOptionSelect('mutton biryani')}>Mutton Biryani</button>
                    <button className="btn btn-secondary mr-2 mb-2 p-2 m-1" onClick={() => handleOptionSelect('fish biryani')}>Fish Biryani</button>
                    <button className="btn btn-secondary mr-2 mb-2 p-2 m-1" onClick={() => handleOptionSelect('chocolate')}>Chocolate</button>
                    <button className="btn btn-secondary mr-2 mb-2 p-2 m-1" onClick={() => handleOptionSelect('ice cream')}>Ice Cream</button>
                    <button className="btn btn-secondary mr-2 mb-2 p-2 m-1" onClick={() => handleOptionSelect('cakes')}>Cakes</button>
                </div>
            </center>
            <div className='container-fluid'>
                <div className='row'>
                    {data.map((item, index) => (
                        <div className='col-md-4 bg-dark' key={index}>
                            <div className='card m-2 mb-2'>
                                <img src={item.recipe.image} className="card-img-top img-fluid " alt="Recipe" />
                                <div className="card-body bg-secondary text-light">
                                    <h5 className="card-title">{item.recipe.label}</h5>
                                    <p>Calories: {Math.round(item.recipe.calories)}</p>
                                    <a href={item.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Food12;

 
