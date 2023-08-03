const getProductController = (req, res) => {
  console.log("Hi From Product Controller");
  res.status(200).send({ message: "Products are Returned" });
};
module.exports = getProductController;
