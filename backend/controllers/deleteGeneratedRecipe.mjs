const deleteGeneratedRecipe = async (req, res) => {
    try {
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete recipe" });
    }
}
export default deleteGeneratedRecipe;