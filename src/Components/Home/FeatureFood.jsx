import { Link, useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard";

const FeatureFood = () => {
  const topSixQuantityFood = useLoaderData();
  console.log(topSixQuantityFood);
  return (
    <div>
      <h1
        data-aos="fade-up"
        data-aos-duration="1500"
        className="my-5 rounded-t-lg  py-10 text-center text-4xl font-semibold text-lime-600 "
      >
                Highest Quantity Of Food

        <p className="mt-2 font-normal text-lg text-lime-700">
        Feast of epic proportions, overflowing with culinary delights from around the world.
        </p>
      </h1>
      <div className="grid grid-cols-6 gap-6">
        {topSixQuantityFood.map((foodCard) => {
          return <FoodCard key={foodCard._id} foodCard={foodCard}></FoodCard>;
        })}
      </div>
      {/* show all btn */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/allAvailableFoods"
          className=" btn btn-outline border-2  border-lime-600 bg-transparent text-xl   text-lime-600  hover:border-lime-600 hover:bg-lime-600 hover:text-white"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default FeatureFood;
