import Navber from "./Components/Navber";
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
