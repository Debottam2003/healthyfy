import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/login.jsx";
import Profile from "./components/Profile.jsx";
import Generate from "./components/Generate.jsx";
import IndiviualRecipe from "./components/IndiviualRecipe.jsx";
import MultipleInteractionCard from "./components/RecipeCard.jsx";
import GeneratedRecipe from "./components/GeneratedRecipe.jsx";
import Search from "./components/Search.jsx";
import About from "./components/About.jsx";

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
