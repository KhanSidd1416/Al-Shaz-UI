import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchProductsByCategory,
  incrementProductViews,
} from "../services/api";
import { BackButton } from "../components/BackButton";
import Button from "../components/Button";
import { ReactComponent as FavIcon } from "../assets/FavIcon.svg";

const ProductsPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchProductsByCategory(categoryName);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  useEffect(() => {
    // Load wishlist from local storage when component mounts
    const storedWishlist =
      JSON.parse(localStorage.getItem("userWishList")) || [];
    setWishlist(storedWishlist);
  }, []);

  const increaseCount = async (product) => {
    setSelectedProduct(product);
    await incrementProductViews(product._id);
  };

  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId) // Remove if already in wishlist
        : [...prevWishlist, productId]; // Add if not in wishlist

      localStorage.setItem("userWishList", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <div className="flex flex-col w-full h-full gap-2 text-black p-4 mt-10 sm:max-w-[640px] mx-auto">
      <BackButton onClick={() => navigate(-1)} />
      <h1 className="font-bold text-3xl">{`${categoryName} - ${products.length}`}</h1>

      <div className="grid grid-cols-2 gap-5 h-full max-h-[calc(100vh-100px)] overflow-y-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 flex flex-col gap-2 border border-black/10 rounded-xl bg-gradient-light-gray drop-shadow-lidoGray max-h-64 cursor-pointer"
            onClick={() => increaseCount(product)}
          >
            <FavIcon
              className={`absolute right-3 ${
                wishlist.includes(product._id) ? "fill-red-500" : "fill-black"
              }`}
              onClick={() => toggleWishlist(product._id)}
            />
            <img src={product.image} alt="IMG" className="rounded-md size-40" />
            <span className="text-sm truncate">{product.name}</span>
            <span className="text-sm">${product.price}</span>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col bg-white p-6 rounded-xl shadow-lg w-[80%] h-[64%] justify-center relative items-center">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setSelectedProduct(null)}
            >
              ✖
            </button>

            {/* Product Image */}
            <img
              src={selectedProduct.image}
              alt="Product"
              className="rounded-md"
            />

            {/* Product Name */}
            <h2 className="font-bold text-lg mt-2">{selectedProduct.name}</h2>

            {/* Product Price */}
            <span className="text-gray-700 text-sm">
              ${selectedProduct.price}
            </span>

            {/* Product Description */}
            <span className="text-gray-500 text-sm mt-2">
              {selectedProduct.description}
            </span>

            <Button
              disabled={wishlist.includes(selectedProduct._id)}
              onClick={() => toggleWishlist(selectedProduct._id)}
              className="mt-16"
            >
              {wishlist.includes(selectedProduct._id)
                ? "Added to Cart"
                : "Add to Cart"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
