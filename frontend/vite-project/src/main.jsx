import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Components/Register.jsx";
import Login from "./Components/login.jsx";
import Profile from "./Components/Profile.jsx";
import Generate from "./Components/Generate.jsx";
import IndiviualRecipe from "./Components/IndiviualRecipe.jsx";
import MultipleInteractionCard from "./Components/RecipeCard";
import GeneratedRecipe from "./Components/GeneratedRecipe.jsx";
import Search from "./Components/Search.jsx";
import About from "./Components/About.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MultipleInteractionCard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "generate",
        element: <Generate />,
      },
      {
        path: "recipe/:rid",
        element: <IndiviualRecipe />,
      },
      {
        path: "generatedrecipe/:gid",
        element: <GeneratedRecipe />,
      },
      { path: "/about", element: <About /> },
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
