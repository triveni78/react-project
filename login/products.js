 

import React, { useState, useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='container'  id='productc'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'   >
          <h1 className='p-2' style={{textAlign:'center'}}>Products</h1>
          <input type="text" placeholder="Search" value={search} onChange={handleSearch} className="form-control mb-3 mt-3" />
        </div>
      </div>
      <div className='row   p-4'>
        {products
          .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <div key={item.id} className='col-md-4 mb-4'>
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h4 className='card-title'>${item.price}</h4>
                  <a href="#" className="bbbb "  >Go somewhere</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
