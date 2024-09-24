import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Helmet } from "react-helmet-async";

const MyFoodRequest = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
  const [myFoodRequests, setMyFoodRequests] = useState([]);
  const [loadingDot, setLoadingDot] = useState(loading);
  console.log(myFoodRequests);
  useEffect(() => {
    setLoadingDot(true);
    fetch(
      `https://0143-food-fare-server-assignment-11-module-63.vercel.app/requestedFood/${user?.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMyFoodRequests(data);
        setLoadingDot(false);
      });
  }, [user]);
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
          <title>Food Fare | My Food Request</title>
        </Helmet>
        <div className="overflow-x-auto    ">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr className="border-black text-lg text-lime-600 md:text-2xl">
                <th className="pl-2 pr-0  ">Image</th>
                <th className="pl-2 pr-0">Name</th>
                <th className="pl-2 pr-0 text-lg">Donated By</th>
                <th className="pl-2 pr-0 text-lg">Pickup At</th>
                <th className="pl-2 pr-0 text-lg">Expire In</th>
                <th className="pl-2 pr-0 text-lg">Requested In</th>
              </tr>
            </thead>

            <tbody>
              {myFoodRequests?.map((myFoodRequestSingleData) => (
                <tr
                  key={myFoodRequestSingleData._id}
                  className="border-base-300 font-medium"
                >
                  <td className="flex items-center justify-center pl-2 pr-0">
                    <img
                      className="size-16"
                      src={myFoodRequestSingleData.foodImageURL}
                      alt=""
                    />
                  </td>
                  <td className="pl-2 pr-0 text-lg md:text-xl">
                    {" "}
                    {myFoodRequestSingleData.foodName}{" "}
                  </td>
                  <td className=" pl-2 pr-0">
                    {myFoodRequestSingleData.donatorUserName}
                  </td>
                  <td className="pl-2 pr-0 text-lg">
                    {myFoodRequestSingleData.pickupLocation}{" "}
                  </td>
                  <td className="pl-2 pr-0 text-lg">
                    {myFoodRequestSingleData.expireDate}{" "}
                  </td>
                  <td className="pl-2 pr-0 text-lg">
                    {myFoodRequestSingleData.requestedTime}{" "}
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

export default MyFoodRequest;
