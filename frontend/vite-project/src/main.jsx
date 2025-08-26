import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Test from "./Test.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Components/Register.jsx";
import Login from "./Components/login.jsx";
import Profile from "./Components/Profile.jsx";
import Generate from "./Components/Generate.jsx";
import MultipleInteractionCard from "./Components/RecipeCard";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MultipleInteractionCard></MultipleInteractionCard>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "generate",
        element: <Generate />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
