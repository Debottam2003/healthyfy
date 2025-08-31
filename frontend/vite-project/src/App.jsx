import Navber from "./Navber";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Navber />
      <div className="content-area">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
