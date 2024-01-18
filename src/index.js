import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import AscHome from "./Components/PetAccessories/AccessoriesHome/AscHome";
import Cart from "./Components/PetAccessories/AscCart/Cart";
import AscList from "./Components/PetAccessories/AccessoriesHome/AscList";
import AscDetails from "./Components/PetAccessories/AscDetails/AscDetails";
import AdHome from "./Components/ADMIN/AdminHome/AdHome";
import Login from "./Components/Login/Login";
import Profile from "./Components/UserProfile/Profile";
import ListAcs from "./Components/ADMIN/ListAcs/ListAcs";
import AdminTable from "./Components/ADMIN/AdminTable/AdminTable";
import EditAcs from "./Components/ADMIN/ListAcs/EditAcs/EditAcs";
import Doctors from "./Components/ADMIN/ListDoc/Doctors";
import Pets from "./Components/ADMIN/ListPets/Pets";
import Users from "./Components/ADMIN/ListUsers/Users";
import ListServices from "./Components/ADMIN/PetServices/ListServices";
import EditServices from "./Components/ADMIN/PetServices/EditServices/EditServices";
import AddA from "./Components/ADMIN/ListAcs/AddAcs/AddA";
import AddD from "./Components/ADMIN/ListDoc/AddDoc/AddD";
import AddService from "./Components/ADMIN/PetServices/AddService/AddService";
import { Provider } from "react-redux";
import Store from "./Redux/Store/Store";
import EditDoc from "./Components/ADMIN/ListDoc/EditDoc/EditDoc";
import EditUser from "./Components/UserProfile/EditUser";
import User from "./Components/UserProfile/User";
import Success from "./Components/LoadingPage/Success";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login name="User" />,
  },
  {
    path: "/adminlogin",
    element: <Login name="Admin" />,
  },
  {
    path: "/accessories",
    element: <AscHome />,
    children: [
      {
        path: "/accessories/",
        element: <AscList />,
      },
      {
        path: "/accessories/cart",
        element: <Cart />,
      },
      {
        path: "/accessories/details",
        element: <AscDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdHome />,
    children: [
      {
        path: "/admin/",
        element: <AdminTable />,
      },
      {
        path: "/admin/accessories",
        element: <ListAcs />,
      },
      {
        path: "/admin/doctors",
        element: <Doctors />,
      },
      {
        path: "/admin/editdoctors",
        element: <EditDoc />,
      },
      {
        path: "/admin/pets",
        element: <Pets />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/services",
        element: <ListServices />,
      },
      {
        path: "/admin/editaccessory",
        element: <EditAcs />,
      },
      {
        path: "/admin/doctors",
        element: <EditAcs />,
      },
      {
        path: "/admin/editservice",
        element: <EditServices />,
      },
      {
        path: "/admin/addacs",
        element: <AddA />,
      },
      {
        path: "/admin/add_doc",
        element: <AddD />,
      },
      {
        path: "/admin/addservice",
        element: <AddService />,
      },
    ],
  },
  {
    path: "/userprofile",
    element: <User />,
    children: [
      {
        path: "/userprofile/",
        element: <Profile />,
      },
      {
        path: "/userprofile/edit",
        element: <EditUser />,
      },
    ],
  },
  {
    path: "/petpurchase",
    element: "",
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
