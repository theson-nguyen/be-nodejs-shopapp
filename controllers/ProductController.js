export async function getProducts(req, res) {
  return res.status(200).json({
    message: "Get product successfully!",
  });
}

export async function getProductById(req, res) {
  return res.status(200).json({
    message: "Get product by id successfully!",
  });
}

export async function insertProduct(req, res) {
  return res.status(200).json({
    message: "Create products successfully!",
  });
}

export async function updateProduct(req, res) {
  return res.status(200).json({
    message: "Update products successfully!",
  });
}

export async function deleteProduct(req, res) {
  return res.status(200).json({
    message: "Delete products successfully!",
  });
}
