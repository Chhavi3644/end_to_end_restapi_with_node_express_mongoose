const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (company) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  //   let page = Number(req.query.page) || 1;
  //   let limit = Number(req.query.limit) || 2;
  //   let skip=(page -1)*limit;
  //   apiData=apiData.skip(skip).limit(limit);

  const myData = await Product.find(queryObject);
  res.status(200).json({ myData });
};
const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).sort("-company");
  res.status(200).json({ myData });
};
module.exports = { getAllProducts, getAllProductsTesting };
