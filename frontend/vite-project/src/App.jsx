import MultipleInteractionCard from "./Components/RecipeCard"
function App() {
  return (
    <div className="recipes-area">
      {new Array(25).fill(0).map((_, index) => (
        <MultipleInteractionCard key={index} />
      ))}
    </div>
  );
}

export default App;
