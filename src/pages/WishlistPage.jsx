import { useEffect, useState } from "react";
import { fetchWishlist } from "../services/api";
import { BackButton } from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Delete } from "../assets/Delete.svg";

const WishlistPage = () => {
  const [wishlists, setWishlist] = useState([]);
  const navigate = useNavigate();

  const getWishlist = async () => {
    const wishlistIds = JSON.parse(localStorage.getItem("userWishList")) || [];

    if (wishlistIds.length === 0) return;

    try {
      const data = await fetchWishlist(wishlistIds);
      setWishlist(data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  const removeFromWishlist = (productId) => {
    let wishlist = JSON.parse(localStorage.getItem("userWishList")) || [];

    wishlist = wishlist.filter((id) => id !== productId);

    localStorage.setItem("userWishList", JSON.stringify(wishlist));

    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item._id !== productId)
    );
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <div className="flex flex-col w-full h-full gap-2 text-black p-4 mt-10 sm:max-w-[640px] mx-auto">
      <BackButton onClick={() => navigate(-1)} />
      <h1 className="font-bold text-3xl">Wishlist</h1>
      <div className="flex flex-col w-full h-full max-h-[calc(87vh-87px)] overflow-y-auto gap-2">
        {wishlists.length === 0 && <span className="text-lg">You have not added anything in the Wishlist</span>}
        {wishlists.map((wishlist) => (
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
            <div className="ml-auto">
              <Delete
                className="cursor-pointer w-6 h-6"
                onClick={() => removeFromWishlist(wishlist._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
