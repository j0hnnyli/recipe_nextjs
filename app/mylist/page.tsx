"use client";

import { GiWok } from "react-icons/gi";
import MyRecipeListContainer from "./MyRecipeListContainer";

const RecipeList = async () => {
  return (
    <>
      <div className="">
        <h2 className="text-2xl font-bold text-white flex items-center justify-center">
          <span>
            <GiWok className="text-orange-500 text-3xl mr-2" />
          </span>
          <span className="text-black dark:text-white">My Recipe List</span>
        </h2>
        <div className="w-[80%] mx-auto bg-orange-500 h-1 rounded-2xl my-5"></div>
      </div>

      <MyRecipeListContainer/>
    </>
  );
};

export default RecipeList;
