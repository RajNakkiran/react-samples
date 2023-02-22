import './App.css';


import React, { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([
    { name: "Aluminum Foil", price: 20, image: "./aluminium-foil.jpg" },
    { name: "Salsa sauce", price: 25, image: "./salsa.jpg" },
    { name: "Soy sauce", price: 30, image: "./soy.jpg" },
    { name: "Tin foil", price: 35, image: "./tin.jpg" },
  ]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1> Text Search Sample Code</h1>
      <table align="center"> 
        <tr> 
           <tc> Enter Search Text:   </tc> 
           <tc> 
           <input
                type="text"
                placeholder="Search by product name"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
           </tc>
        </tr>
      </table>
      
     


      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name}  width="100" height="100"/>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}


export default App;
