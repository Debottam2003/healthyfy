const errorHandler = async (req, res) => {
    res.status(500).json({ message: "Internal server error" });
}
export default errorHandler;