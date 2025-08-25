import Navber from "./Components/Navbar";
import MultipleInteractionCard from "./Components/RecipeCard";
import Footer from "./Components/Footer";

function App() {
  return (
  <>
  <Navber/>
  <div className="recipes-area">
      <MultipleInteractionCard />
      <Footer></Footer>
  </div>
  </>
  );
}

export default App;
