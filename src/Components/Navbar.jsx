import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const signOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };
  const links = (
    <>
      <li>
        <Link to="/" className="md:hidden">
          Food Fare
        </Link>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allAvailableFoods">All Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/addFood">Add Food</NavLink>
      </li>
      <li>
        <NavLink to="/manageMyFoods">Manage My Foods </NavLink>
      </li>
      <li>
        <NavLink to="/myFoodRequest">My Food Request</NavLink>
      </li>
    </>
  );
  return (
    <div className="container navbar mx-auto mt-6 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box  p-2 shadow bg-lime-50"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost items-center p-0 text-xl md:flex "
        >
          <img
            className="size-10"
            src="https://i.ibb.co/BrkS7wm/Logo.png"
            alt=""
          />
        </Link>
        <Link
          to="/"
          className="btn btn-ghost hidden items-center p-0 pl-2 text-2xl md:flex "
        >
          Food Fare
        </Link>
      </div>
      <div className="navbar-center hidden lg:ml-20 lg:flex">
        <ul className="menu menu-horizontal px-1 bg-lime-50">{links}</ul>
      </div>
      <div className="navbar-end gap-4"></div>
      {user ? (
        <>
          <div
            className="tooltip tooltip-bottom"
            data-tip={
              user.displayName ? user.displayName : "user name not found"
            }
          >
            <div className="mr-2 size-10 rounded-full border border-lime-600">
              <img className="rounded-full" alt="" src={user.photoURL} />
            </div>
          </div>
          <Link
            onClick={signOut}
            to="/"
            className="btn border-2 border-lime-600 bg-transparent text-lg text-lime-600  hover:border-lime-600 hover:bg-lime-600 hover:text-white"
          >
            Logout
          </Link>
        </>
      ) : (
        <Link
          to="/login"
          className="btn border-2 border-lime-600 bg-transparent text-lg text-lime-600  hover:border-lime-600 hover:bg-lime-600 hover:text-white"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
