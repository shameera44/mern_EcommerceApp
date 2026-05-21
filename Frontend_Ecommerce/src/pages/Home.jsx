import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Home = () => {

  const [products, setProducts] =
    useState([]);

  // FETCH PRODUCTS

  const fetchProducts = async () => {

    try {

      const { data } =
        await axios.get(
          "https://mern-ecommerceapp-czkg.onrender.com/products"
        );

      setProducts(data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

  fetchProducts();

}, []);

  return (

    <>
    
      <Navbar />

      <div className="max-w-7xl mx-auto p-5">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Latest Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

         {products
  .filter((product) => product.name)
  .map((product) => (

    <ProductCard
      key={product._id}
      product={product}
      fetchProducts={fetchProducts}
    />

))}

        </div>

      </div>

    </>

  );
};

export default Home;