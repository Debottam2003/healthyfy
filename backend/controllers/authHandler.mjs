const authHandler = (req, res) => {
    res.status(200).json({ message: "Session is still active." });
}
export default authHandler;