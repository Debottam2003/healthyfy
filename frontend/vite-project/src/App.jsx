import Navber from "./Navber";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScroollToTop from "./ScroollToTop";

function App() {
  return (
    <div className="app-container">
      <Navber />
      <div className="content-area">
        <Outlet />
      </div>
      <Footer />
      <ScroollToTop />
    </div>
  );
}

export default App;
