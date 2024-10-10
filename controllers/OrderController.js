export async function getOrders(req, res) {
  return res.status(200).json({
    message: "Get orders successfully!",
  });
}

export async function getOrderById(req, res) {
  return res.status(200).json({
    message: "Get order by id successfully!",
  });
}

export async function insertOrder(req, res) {
  return res.status(200).json({
    message: "Create order successfully!",
  });
}

export async function updateOrder(req, res) {
  return res.status(200).json({
    message: "Update order successfully!",
  });
}

export async function deleteOrder(req, res) {
  return res.status(200).json({
    message: "Delete order successfully!",
  });
}
