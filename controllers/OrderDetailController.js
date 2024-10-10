export async function getOrderDetails(req, res) {
  return res.status(200).json({
    message: "Get order details successfully!",
  });
}

export async function getOrderDetailById(req, res) {
  return res.status(200).json({
    message: "Get order detail by id successfully!",
  });
}

export async function insertOrderDetail(req, res) {
  return res.status(200).json({
    message: "Create order detail successfully!",
  });
}

export async function updateOrderDetail(req, res) {
  return res.status(200).json({
    message: "Update order detail successfully!",
  });
}

export async function deleteOrderDetail(req, res) {
  return res.status(200).json({
    message: "Delete order detail successfully!",
  });
}
