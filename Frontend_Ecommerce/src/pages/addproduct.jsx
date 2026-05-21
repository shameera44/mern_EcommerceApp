import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AddProduct = () => {

  const [name, setName] = useState("");

  const [description, setDescription] =useState("");

  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("");

  const [image, setImage] = useState("");

 

const submitHandler = async (e) => {

  e.preventDefault();

  if (
    !name ||
    !description ||
    !price ||
    !category ||
    !image
  ) {
    alert("Please fill all fields");
    return;
  }

  try {

    const token =
      localStorage.getItem("token");

    const response = await axios.post(
      "http://localhost:5000/products",
      {
        name,
        description,
        price: Number(price),
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

    if (response.data._id) {

      alert("Product Added");

      window.location.href = "/";

    }

  } catch (error) {

    console.log(error);

    alert("Product Not Added");

  }
};

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Add Product
        </h1>

        <form
          onSubmit={submitHandler}
        >

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border p-3 mb-4 rounded"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
            className="w-full border p-3 mb-4 rounded"
          />

          <button type="submit"
            className="bg-black text-white w-full py-3 rounded">
            Add Product
          </button>

        </form>

      </div>
    </>
  );

};

export default AddProduct;