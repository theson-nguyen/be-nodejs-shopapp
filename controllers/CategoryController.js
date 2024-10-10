export async function getCategories(req, res) {
  return res.status(200).json({
    message: "Get categories successfully!",
  });
}

export async function getCategoryById(req, res) {
  return res.status(200).json({
    message: "Get category by id successfully!",
  });
}

export async function insertCategory(req, res) {
  return res.status(200).json({
    message: "Create category successfully!",
  });
}

export async function updateCategory(req, res) {
  return res.status(200).json({
    message: "Update category successfully!",
  });
}

export async function deleteCategory(req, res) {
  return res.status(200).json({
    message: "Delete category successfully!",
  });
}
