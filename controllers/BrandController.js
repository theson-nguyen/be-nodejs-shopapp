export async function getBrands(req, res) {
  return res.status(200).json({
    message: "Get brands successfully!",
  });
}

export async function getBrandById(req, res) {
  return res.status(200).json({
    message: "Get brand by id successfully!",
  });
}

export async function insertBrand(req, res) {
  return res.status(200).json({
    message: "Create brand successfully!",
  });
}

export async function updateBrand(req, res) {
  return res.status(200).json({
    message: "Update brand successfully!",
  });
}

export async function deleteBrand(req, res) {
  return res.status(200).json({
    message: "Delete brand successfully!",
  });
}
