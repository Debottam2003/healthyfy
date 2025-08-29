import MultipleInteractionCard from "./Components/RecipeCard";
import Navber from "./Components/Navber";
import Top from "./Components/Top.jsx";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Navber></Navber>
      {/* <div className="recipes-area">
          <MultipleInteractionCard /> 
           </div> */}
      <div style={{ position: "relative", marginLeft: "105px" }}>
        <Outlet />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
