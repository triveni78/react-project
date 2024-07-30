 
import React, { useState, useEffect } from 'react';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('business'); // Default category

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${encodeURIComponent(category)}&apiKey=18ed2d1832924313ae196aabf8fb6d24`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [category]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className='container bg-secondary'>
      <h1 className="text-center mt-3 mb-4">Top Headlines</h1>
      <div className="row mb-3">
        <div className="col-md-6">
          <input type="text" placeholder="Search by title" value={search} onChange={handleSearch} className="form-control" />
        </div>
        <div className="col-md-6">
          <select className="form-control" value={category} onChange={handleCategoryChange}>
            <option value="business">Business</option>
            <option value="sports">Sports</option>
            <option value="politics">Politics</option>
          
          </select>
        </div>
      </div>
      <div className='row'>
        {articles
          .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => (
            <div key={index} className='col-md-4 mb-4'>
              <div className="card h-100">
                {item.urlToImage && <img src={item.urlToImage} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text flex-grow-1">{item.description}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="bbbb mt-auto">Read More</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
