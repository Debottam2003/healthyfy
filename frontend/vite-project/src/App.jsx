import Navber from "./Navber";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
        <Navber />
        <main
          style={{
            flex: 1,
            marginLeft: 0,
            paddingTop: "60px", // Space for fixed navbar on mobile
            width: "100%",
          }}
        >
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
