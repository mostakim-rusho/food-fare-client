import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Login from "./Components/Login";
import AuthProvider from "./AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Register from "./Components/Register";
import Home from "./Components/Home/Home";
import AddFood from "./Components/AddFood";
import PrivateRoute from "./PrivateRoute";
import AllAvailableFoods from "./Components/AllAvailableFoods";
import ViewDetails from "./Components/ViewDetails";
import MyFoodRequest from "./Components/MyFoodRequest";
import ManageMyFoods from "./Components/ManageMyFoods";
import UpdateFood from "./Components/UpdateFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://0143-food-fare-server-assignment-11-module-63.vercel.app/sixFood",
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allAvailableFoods",
        element: <AllAvailableFoods></AllAvailableFoods>,
        loader: () =>
          fetch(
            "https://0143-food-fare-server-assignment-11-module-63.vercel.app/allAvailableFoods",
          ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://0143-food-fare-server-assignment-11-module-63.vercel.app/food/${params.id}`,
          ),
      },
      {
        path: "/updateFood/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({ params }) =>
          fetch(
            `https://0143-food-fare-server-assignment-11-module-63.vercel.app/updateFood/${params.id}`,
          ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
);
