import { useEffect, useState } from "react";
import { fetchCategories } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(data => setCategories(data));
  }, []);

  return (
    <div className="flex flex-col w-full h-full gap-2 text-black p-4 mt-10 sm:max-w-[640px] mx-auto">
      <BackButton onClick={() => navigate(-1)}/>
      <h1 className="font-bold text-3xl">Categories</h1>
      <div className="flex flex-col w-full h-full max-h-[calc(87vh-87px)] overflow-y-auto gap-2 ">

      {categories.map(category => (
        <Link key={category.name} to={`/categories/${category.name}`}>
          <div className="flex items-center gap-x-10 drop-shadow-lidoGray bg-gradient-light-gray py-5 px-3 rounded-lg w-full">
            <img src={category.image} alt="IMG" className="rounded-3xl size-10"/>
            <span className="text-right text-lg">{category.name}</span>
          </div>
        </Link>
      ))}
      </div>

    </div>
  );
};

export default CategoriesPage;
