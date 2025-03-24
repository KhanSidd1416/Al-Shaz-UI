import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";
import { fetchCategories, fetchWishlist, fetchPopularProducts } from "../services/api";
import AlShaz from "../assets/AlShaz.JPG"


const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [popular, setPopular] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Manage search query

  useEffect(() => {
    fetchCategories().then(setCategories);
    const wishlistIds = JSON.parse(localStorage.getItem("userWishList")) || [];
    if (wishlistIds.length) fetchWishlist(wishlistIds).then(setWishlist);
  }, []);

  useEffect(() => {
    fetchPopularProducts().then(setPopular);
  }, []);

  // Filter the categories, popular, and wishlist based on search query
  const filteredCategories = categories.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPopular = popular.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredWishlist = wishlist.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className="flex flex-row w-full items-center justify-between text-black mt-5 sm:mt-3 p-2 sm:max-w-[640px] mx-auto">
      <img src={AlShaz} alt="AlShaz" className="size-10 sm:size-20"/>
      <h1 className="font-bold text-[25px] sm:text-3xl">Al Shaz</h1>
      </div>
    <div className="flex flex-col h-full max-h-[calc(87vh-87px)]  overflow-y-auto p-4 mt-5 sm:mt-3 w-full gap-6 text-black sm:max-w-[640px] mx-auto">
      
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Categories Section */}
      <div className="flex justify-between mt-4">
        <h2 className="font-bold text-2xl">Categories</h2>
        <Link to="/categories" className="underline underline-offset-2">See All</Link>
      </div>
      <div >
        <div className="flex gap-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {filteredCategories.length === 0 && <span>No Items Founds</span>}
          {filteredCategories.map(({ name, image }) => (
            <div key={name} className="flex flex-col items-center min-w-[100px]">
              <img src={image} alt={name} className="rounded-3xl size-14" />
              <span className="text-sm text-right truncate">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Section */}
      <div className="flex justify-between mt-2">
        <h2 className="font-bold text-2xl">Most Viewed</h2>
        <Link to="/popular" className="underline underline-offset-2">See All</Link>
      </div>
      <div >
        <div className="flex gap-x-4 overflow-x-auto whitespace-nowrap">
        {filteredPopular.length === 0 && <span>No Items Founds</span>}
          {filteredPopular.map(({ _id, image, name, price }) => (
            <div key={_id} className="flex flex-col truncate items-start min-w-[100px] p-2 gap-2 border border-black/10 rounded-xl bg-gradient-light-gray drop-shadow-lidoGray max-h-[146px] cursor-pointer">
              <img src={image} alt="IMG" className="rounded-md" />
              <span className="text-xs">{name}</span>
              <span className="text-xs text-black/50">${price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wishlist Section */}
      <div className="flex justify-between mt-4 sm:mt-0">
        <h2 className="font-bold text-2xl">Wishlist</h2>
        <Link to="/wishlist" className="underline underline-offset-2">See All</Link>
      </div>
      <div >
        <div className="flex gap-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {filteredWishlist.length === 0 && <span>No Items Founds</span>}
          {filteredWishlist.map(({ _id, image, name }) => (
            <div key={_id} className="flex flex-col items-center min-w-[100px]">
              <img src={image} alt={name} className="rounded-3xl size-14" />
              <span className="text-sm text-right truncate max-w-[100px]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
