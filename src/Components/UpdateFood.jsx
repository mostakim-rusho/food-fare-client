import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const getFoodData = useLoaderData();
  console.log(getFoodData);

  const {
    _id,
    foodName,
    foodQuantity,
    foodImageURL,
    pickupLocation,
    foodStatus,
    expireDate,
    donatorUserName,
    donatorUserEmail,
    donatorUserPhotoURL,
    additionalNotes,
  } = getFoodData;

  console.log(
    foodName,
    foodQuantity,
    foodImageURL,
    pickupLocation,
    foodStatus,
    expireDate,
    donatorUserName,
    donatorUserEmail,
    donatorUserPhotoURL,
    additionalNotes,
  );

  const handleUpdateFoodData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodQuantity = form.foodQuantity.value;
    const foodImageURL = form.foodImageURL.value;
    const pickupLocation = form.pickupLocation.value;
    const foodStatus = form.foodStatus.value;
    const expireDate = form.expireDate.value;
    const donatorUserName = form.donatorUserName.value;
    const donatorUserEmail = form.donatorUserEmail.value;
    const donatorUserPhotoURL = form.donatorUserPhotoURL.value;
    const additionalNotes = form.additionalNotes.value;

    const updatedFoodData = {
      foodName,
      foodQuantity,
      foodImageURL,
      pickupLocation,
      foodStatus,
      expireDate,
      donatorUserName,
      donatorUserEmail,
      donatorUserPhotoURL,
      additionalNotes,
    };
    console.log(updatedFoodData);

    fetch(
      `https://0143-food-fare-server-assignment-11-module-63.vercel.app/food/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFoodData),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Spot Updated successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className=" container mx-auto mt-10 rounded-2xl ">
      <Helmet>
        <title>Food Fare | Update Food</title>
      </Helmet>
      <h2 className="text-center   text-4xl font-bold text-lime-600">
        Update Food
      </h2>

      <form className="mt-10" onSubmit={handleUpdateFoodData}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="foodName"
                defaultValue={foodName}
                placeholder="Enter Food Name"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text">Food Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                className="input input-bordered w-full"
                name="foodQuantity"
                defaultValue={foodQuantity}
                placeholder="Enter Food Quantity"
                required
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
                name="foodImageURL"
                defaultValue={foodImageURL}
                placeholder="Enter Image URL"
                required
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
                name="pickupLocation"
                defaultValue={pickupLocation}
                placeholder="Enter Pickup Location"
                required
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">Food Status</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="foodStatus"
                defaultValue={foodStatus}
                placeholder="Enter Total Visitors Count"
                required
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
                name="expireDate"
                defaultValue={expireDate}
                placeholder=""
                required
              />
            </label>
          </div>

          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="donatorUserName"
                defaultValue={donatorUserName}
                placeholder="Enter Your Name"
                required
                readOnly="true"
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                className="input input-bordered w-full"
                name="donatorUserEmail"
                defaultValue={donatorUserEmail}
                placeholder="Enter Your Email"
                required
                readOnly="true"
              />
            </label>
          </div>
          <div className="form-control col-span-2 w-full md:col-span-1">
            <label className="label">
              <span className="label-text ">User Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                className="input input-bordered w-full"
                name="donatorUserPhotoURL"
                defaultValue={donatorUserPhotoURL}
                placeholder="Enter Your Photo URL"
                required
                readOnly="true"
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
