import React, { useState, useEffect } from "react";
import Cover from "./components/Cover";
import ProductsPage from "./components/ProductsPage";
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { Route , Routes } from "react-router-dom";
import AccountProfile from "./components/AccountProfile";

function App() {
  const productURL = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [productsDictionary, setProductsDictionary] = useState({});


  function fetchProductData() {
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {

        const dictionary = {}

        data.forEach(product => {
          dictionary[product.id] = product;

        });

        setProducts(data);
        setProductsDictionary(dictionary);

      });
  }
  useEffect(() => fetchProductData(), []);
  return (
    <div className='first-page'>
      <Routes>
        <Route path="/" element={<ProductsPage products={products} favoriteProducts={favoriteProducts} setFavoriteProducts={setFavoriteProducts} />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cover" element={ <Cover />}/>
        <Route path="/profile" element={ <AccountProfile />}/>
      </Routes>
      

    </div>
  )
}

export default App;