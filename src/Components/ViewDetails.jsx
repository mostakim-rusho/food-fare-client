import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  const viewDetails = useLoaderData();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 6); // Add 6 hours to adjust to UTC+6
    setCurrentTime(currentDate.toISOString().slice(0, 16));
  }, []);

  console.log(user, viewDetails);
  const {
    _id,
    foodName,
    foodQuantity,
    foodImageURL,
    pickupLocation,
    expireDate,
    donatorUserName,
    donatorUserEmail,
    donatorUserPhotoURL,
    additionalNotes,
  } = viewDetails;

  const handleConfirmRequest = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodID = form.foodID.value;
    const foodImageURL = form.foodImageURL.value;
    const pickupLocation = form.pickupLocation.value;
    const requestedTime = form.requestedTime.value;
    const expireDate = form.expireDate.value;
    const donatorUserName = form.donatorUserName.value;
    const donatorUserEmail = form.donatorUserEmail.value;
    const requestedUserEmail = form.requestedUserEmail.value;
    const additionalNotes = form.additionalNotes.value;

    const requestedFood = {
      foodName,
      foodID,
      foodImageURL,
      pickupLocation,
      requestedTime,
      expireDate,
      donatorUserName,
      donatorUserEmail,
      requestedUserEmail,
      additionalNotes,
    };
    console.log(requestedFood);

    try {
      const response = await fetch(
        "https://0143-food-fare-server-assignment-11-module-63.vercel.app/requestedFood",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(requestedFood),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to add food");
      }

      const data = await response.json();

      if (data.insertedId) {
        const updatedFoodStatus = {
          foodStatus: "Requested",
        };

        fetch(
          `https://0143-food-fare-server-assignment-11-module-63.vercel.app/foodStatus/${_id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFoodStatus),
          },
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              document.getElementById("my_modal_3").close();
              Swal.fire({
                title: "Success!",
                text: " Added Successfully",
                icon: "success",
                confirmButtonText: "Done",
              });
              form.reset();
            }
          });
      }
    } catch (error) {
      console.error("Error requesting food:", error);
    }
  };

  return (
    <div>
      <div className="ml-2 flex items-center">
        <div className="size-30 mr-2 mt-12 rounded-xl border border-lime-600">
          <img className="rounded-xl" alt="" src={donatorUserPhotoURL} />
        </div>
      </div>
      <h2 className="ml-2 text-lg font-semibold">
        Donated By : {donatorUserName}
      </h2>
      <h2 className="ml-2 flex items-center text-lg font-semibold ">
        Pickup Location : <CiLocationOn /> {pickupLocation}
      </h2>

      <div className="container mx-auto mt-12 flex-col gap-10 rounded-3xl border-2  border-lime-400 p-10 shadow-xl shadow-lime-50 lg:flex lg:flex-row">
        <Helmet>
          <title>Food Fare | {foodName}</title>
        </Helmet>
        <div className="rounded-2xl ">
          <img
            className="rounded-2xl   lg:w-[650px] "
            src={foodImageURL}
            alt=""
          />
        </div>
        <div className="flex-grow">
          <div className="gap-5 md:flex">
            <p className="flex items-center py-2 text-3xl font-semibold text-lime-600 md:text-4xl md:font-bold">
              {foodName}
            </p>
          </div>

          <p className="my-1 text-xl font-bold ">
            Food Quantity : <span className="font-medium ">{foodQuantity}</span>
          </p>

          <h3 className="text-xl font-bold ">
            Expire Date :
            <span className="pl-1 text-xl font-medium ">{expireDate}</span>
          </h3>

          <button
            className="btn btn-outline  mt-4 border-2  border-lime-600 bg-transparent text-xl   text-lime-600  hover:border-lime-600 hover:bg-lime-600 hover:text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Request
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                  ✕
                </button>
              </form>
              {/*  */}
              <div className=" container mx-auto mt-10 rounded-2xl ">
                <h2 className="text-center   text-4xl font-bold text-lime-600">
                  Add Food
                </h2>

                <form onSubmit={handleConfirmRequest} className="mt-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text">Food Name</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          defaultValue={foodName}
                          name="foodName"
                          placeholder="Enter Food Name"
                          required
                          disabled
                        />
                      </label>
                    </div>
                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text">Food Id</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          defaultValue={_id}
                          name="foodID"
                          placeholder="Enter Food Quantity"
                          required
                          disabled
                        />
                      </label>
                    </div>

                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text ">Food Image URL</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          defaultValue={foodImageURL}
                          name="foodImageURL"
                          placeholder="Enter Image URL"
                          required
                          disabled
                        />
                      </label>
                    </div>
                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text ">Pickup Location</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          defaultValue={pickupLocation}
                          name="pickupLocation"
                          placeholder="Enter Pickup Location"
                          required
                          disabled
                        />
                      </label>
                    </div>
                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text ">Request Date</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="datetime-local"
                          className="input input-bordered w-full"
                          name="requestedTime"
                          defaultValue={currentTime}
                          placeholder="Enter Total Visitors Count"
                          required
                          disabled
                        />
                      </label>
                    </div>
                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text ">Expire Date</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="date"
                          className="input input-bordered w-full"
                          defaultValue={expireDate}
                          name="expireDate"
                          placeholder=""
                          required
                          disabled
                        />
                      </label>
                    </div>

                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text ">Donor Name</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          name="donatorUserName"
                          defaultValue={user?.displayName}
                          placeholder="Enter Your Name"
                          required
                          disabled
                        />
                      </label>
                    </div>
                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text ">Donor Email</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="email"
                          className="input input-bordered w-full"
                          name="donatorUserEmail"
                          defaultValue={donatorUserEmail}
                          placeholder="Enter Your Email"
                          required
                          disabled
                        />
                      </label>
                    </div>
                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text ">User Email</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          name="requestedUserEmail"
                          defaultValue={user?.email}
                          placeholder="Enter Your Photo URL"
                          required
                          disabled
                        />
                      </label>
                    </div>
                    <div className="form-control col-span-2 w-full md:col-span-1">
                      <label className="label">
                        <span className="label-text ">Additional Notes</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          className="input input-bordered w-full"
                          name="additionalNotes"
                          defaultValue={additionalNotes}
                          placeholder="Your additional notes"
                          required
                        />
                      </label>
                    </div>
                    <button className="btn btn-outline col-span-2  border-2 border-lime-600 bg-transparent   text-xl  text-lime-600 hover:border-lime-600 hover:bg-lime-600    hover:text-white">
                      Confirm Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
