import { useEffect, useState } from "react";
import { BackButton } from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { fetchPopularProducts } from "../services/api";


const PopularPage = () => {
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();

  const getPopular = async () => {
    const wishlistIds = JSON.parse(localStorage.getItem("userWishList")) || [];

    if (wishlistIds.length === 0) return;

    try {
      const data = await fetchPopularProducts();
      setPopular(data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };
  useEffect(() => {
    fetchPopularProducts().then(setPopular);
  }, []);

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="flex flex-col w-full h-full gap-2 text-black p-4 mt-10 sm:max-w-[640px] mx-auto">
      <BackButton onClick={() => navigate(-1)} />
      <h1 className="font-bold text-3xl">Popular items</h1>
      <div className="flex flex-col w-full h-full max-h-[calc(87vh-87px)] overflow-y-auto gap-2">
        {popular.map((wishlist) => (
          <div
            key={wishlist._id}
            className="flex items-center justify-between gap-x-4 drop-shadow-lidoGray bg-gradient-light-gray py-5 px-3 rounded-lg w-full"
          >
            <img
              src={wishlist.image}
              alt="IMG"
              className="rounded-3xl w-16 h-16 object-cover"
            />
            <div className="flex flex-col gap-y-1 ml-4 flex-grow">
              <span className="text-lg font-semibold">{wishlist.name}</span>
              <span className="text-sm text-gray-700">${wishlist.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPage;
