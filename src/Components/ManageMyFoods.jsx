import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
  const { user, loading } = useContext(AuthContext);
  const [myEmailFood, setMyEmailFood] = useState([]);
  const [loadingDot, setLoadingDot] = useState(loading);

  useEffect(() => {
    setLoadingDot(true);

    fetch(
      `https://0143-food-fare-server-assignment-11-module-63.vercel.app/foodDonator/${user?.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMyEmailFood(data);
        setLoadingDot(false);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://0143-food-fare-server-assignment-11-module-63.vercel.app/food/${_id}`,
          {
            method: "DELETE",
          },
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food item has been deleted.",
                icon: "success",
              });
              const remaining = myEmailFood.filter((food) => food._id !== _id);
              setMyEmailFood(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <div>
        {loadingDot && (
          <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}
      </div>
      <div className="container mx-auto my-10 rounded-xl border border-solid border-lime-400 shadow-xl shadow-lime-50">
        <Helmet>
          <title>Food Fare | Manage My Foods</title>
        </Helmet>
        <div className="overflow-x-auto    ">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr className="border-black text-lg text-lime-600 md:text-2xl">
                <th className="pl-2 pr-0 ">Image</th>
                <th className="pl-2 pr-0 ">Name</th>
                <th className="pl-2 pr-0">Status</th>
                <th className="pl-2 pr-0 text-lg">Expire</th>
                <th className="px-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {myEmailFood?.map((singleMyEmailFood) => (
                <tr
                  key={singleMyEmailFood._id}
                  className="border-base-300 font-medium"
                >
                  <td className="flex items-center justify-center pl-2 pr-0">
                    <img
                      className="size-16"
                      src={singleMyEmailFood.foodImageURL}
                      alt=""
                    />
                  </td>
                  <td className="pl-2 pr-0 text-lg md:text-xl">
                    {" "}
                    {singleMyEmailFood.foodName}{" "}
                  </td>
                  <td className=" pl-2 pr-0">{singleMyEmailFood.foodStatus}</td>
                  <td className="pl-2 pr-0 text-lg">
                    {singleMyEmailFood.expireDate}{" "}
                  </td>
                  <td className="flex flex-col items-center justify-center gap-3 px-2 md:flex-row">
                    <Link
                      className=" btn btn-outline m-1 mt-3 border  border-lime-600  bg-transparent p-1 text-base   text-lime-600   hover:border-lime-600   hover:bg-lime-600  hover:text-white md:px-4 md:text-xl"
                      to={`/updateFood/${singleMyEmailFood._id}`}
                    >
                      <button>Update</button>
                    </Link>

                    <button
                      onClick={() => handleDelete(singleMyEmailFood._id)}
                      className=" btn btn-outline m-1 mt-3 border  border-red-600  bg-transparent p-1 text-base   text-red-600   hover:border-red-600   hover:bg-red-600  hover:text-white md:px-4 md:text-xl"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageMyFoods;
