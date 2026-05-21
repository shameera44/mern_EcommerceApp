import { useParams } from "react-router-dom";

const ProductDetail = () => {

  const { id } = useParams();

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        Product Details
      </h1>

      <p className="mt-5">
        Product ID : {id}
      </p>

    </div>
  );
};

export default ProductDetail;