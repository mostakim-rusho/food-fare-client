import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({ foodCard, gridCols }) => {
  const {
    _id,
    foodName,
    foodQuantity,
    foodImageURL,
    pickupLocation,
    foodStatus,
    expireDate,
    donatorUserName,
    donatorUserPhotoURL,
    additionalNotes,
  } = foodCard;
  console.log(
    _id,
    foodName,
    foodQuantity,
    foodImageURL,
    pickupLocation,
    foodStatus,
    expireDate,
    donatorUserName,
    donatorUserPhotoURL,
    additionalNotes,
  );
   const colSpanClass =
    gridCols === 4 ? "col-span-4 md:col-span-6 lg:col-span-3" : "col-span-6 md:col-span-3 lg:col-span-2";
    console.log(gridCols);

  return (
    <div
      className={`${colSpanClass}`}
    >
      <div className="card flex h-full w-full border border-lime-400 shadow-xl shadow-lime-50">
        <figure className="max-h-56 flex-grow">
          <img
            className="h-full w-full object-cover"
            src={foodImageURL}
            alt=""
          />
        </figure>
        <div className="card-body flex-grow p-6 ">
          <h2 className="card-title text-3xl">
            {foodName}
            <div className="badge badge-outline h-auto"> Expire : {expireDate}</div>
          </h2>

          <div className="flex items-center">
            <h2 className="text-lg font-semibold">Donated By :</h2>
            <div className="ml-2">
              <div className="mr-2 size-10 rounded-full border border-lime-600">
                <img
                  className="rounded-full"
                  alt=""
                  src={donatorUserPhotoURL}
                />
              </div>
              <h2 className="text-lg font-semibold">{donatorUserName}</h2>
            </div>
          </div>

          <p>
            Pickup Location :{" "}
            <span className="text-lg font-bold">{pickupLocation}</span>
          </p>
          <p>
            Notes : <span className="text-lg font-bold">{additionalNotes}</span>
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline bg-lime-600 p-4 text-2xl text-white">
              Remaining : {foodQuantity}
            </div>
          </div>
          <Link to={`/food/${_id}`} className="btn btn-outline mt-3 w-full  border border-lime-600 bg-transparent text-lg text-lime-600  hover:border-lime-600 hover:bg-lime-600 hover:text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  foodCard: PropTypes.object.isRequired,
  gridCols: PropTypes.number.isRequired,
};

export default FoodCard;
