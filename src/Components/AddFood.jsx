import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";
import { Helmet } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const queryClient = new QueryClient();

  const handleAddFood = async (e) => {
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

    const newFood = {
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
    try {
      const response = await fetch(
        "https://0143-food-fare-server-assignment-11-module-63.vercel.app/food",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newFood),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to add food");
      }

      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: " Added Successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        form.reset();
        queryClient.invalidateQueries("foodList");
      }
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>Food Fare | Add Food</title>
      </Helmet>
      <div className=" container mx-auto mt-10 rounded-2xl ">
        <h2 className="text-center   text-4xl font-bold text-lime-600">
          Add Food
        </h2>

        <form className="mt-10" onSubmit={handleAddFood}>
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
                  defaultValue="Available"
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
                  placeholder=""
                  required
                />
              </label>
            </div>

            <div className="form-control col-span-2 w-full md:col-span-1">
              <label className="label">
                <span className="label-text ">Donator Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="donatorUserName"
                  defaultValue={user?.displayName}
                  placeholder="Enter Your Name"
                  required
                  readOnly="true"
                />
              </label>
            </div>
            <div className="form-control col-span-2 w-full md:col-span-1">
              <label className="label">
                <span className="label-text ">Donator Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  className="input input-bordered w-full"
                  name="donatorUserEmail"
                  defaultValue={user?.email}
                  placeholder="Enter Your Email"
                  required
                  readOnly="true"
                />
              </label>
            </div>
            <div className="form-control col-span-2 w-full md:col-span-1">
              <label className="label">
                <span className="label-text ">Donator Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="donatorUserPhotoURL"
                  defaultValue={user?.photoURL}
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
                  placeholder="Your additional notes"
                  required
                />
              </label>
            </div>
            <button className="btn btn-outline col-span-2  border-2 border-lime-600 bg-transparent   text-xl  text-lime-600 hover:border-lime-600 hover:bg-lime-600    hover:text-white">
              Add
            </button>
          </div>
        </form>
      </div>
    </QueryClientProvider>
  );
};

export default AddFood;
