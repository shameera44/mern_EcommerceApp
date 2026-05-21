import { useEffect, useState } from "react";

import axios from "axios";

import {
  useParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";

const EditProduct = () => {

  const { id } = useParams();

  const [name, setName] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [category,
    setCategory] =
    useState("");

  const [image, setImage] =
    useState("");

  // FETCH PRODUCT

  const fetchProduct =
    async () => {

      try {

        const { data } =
          await axios.get(
            `http://localhost:5000/products/${id}`
          );

        setName(data.name);

        setDescription(
          data.description
        );

        setPrice(data.price);

        setCategory(
          data.category
        );

        setImage(data.image);

      } catch (error) {

        console.log(error);

      }
    };

  useEffect(() => {

    fetchProduct();

  }, []);

  // UPDATE PRODUCT

  const submitHandler =
    async (e) => {

      e.preventDefault();

      if (
        !name ||
        !description ||
        !price ||
        !category ||
        !image
      ) {

        alert(
          "Please fill all fields"
        );

        return;

      }

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const { data } =
          await axios.put(
            `http://localhost:5000/products/${id}`,
            {
              name,
              description,
              price:
                Number(price),
              category,
              image,
            },
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        console.log(data);
        if (data._id) {

  alert(
    "Product Updated"
  );

  window.location.href =
    "/";

} else {

  alert(
    data.message ||
    data.error ||
    "Update Failed"
  );

}
     } catch (error) {

        console.log(error);

        alert(
          "Update Failed"
        );

      }
    };

  return (

    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Edit Product
        </h1>

        <form
          onSubmit={submitHandler}
        >

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            placeholder="Product Name"
            className="w-full border p-3 mb-4 rounded"
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            placeholder="Description"
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            placeholder="Price"
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="text"
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            placeholder="Category"
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="text"
            value={image}
            onChange={(e) =>
              setImage(
                e.target.value
              )
            }
            placeholder="Image URL"
            className="w-full border p-3 mb-4 rounded"
          />

          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded"
          >
            Update Product
          </button>

        </form>

      </div>
    </>

  );
};

export default EditProduct;