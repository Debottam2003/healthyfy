import Navber from "./Components/Navber";
import MultipleInteractionCard from "./Components/RecipeCard"
function App() {
  return (
  <>
  <Navber/>
    <div className="recipes-area">
      <MultipleInteractionCard />
    </div>
  </>
  );
}

export default App;
