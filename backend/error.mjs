const errorHandler = async (req, res) => {
    res.status(500).send("Internal server error");
}
export  default errorHandler;