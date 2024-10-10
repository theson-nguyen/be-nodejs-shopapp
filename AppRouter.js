import express from "express";
const router = express.Router();
import * as ProductController from "./controllers/ProductController";
import * as OrderController from "./controllers/OrderController";
import * as CategoryController from "./controllers/CategoryController";
import * as OrderDetailController from "./controllers/OrderDetailController";
import * as BrandController from "./controllers/BrandController";
export function AppRoute(app) {
  //Product
  router.get("/products", ProductController.getProducts);
  router.get("/products/:id", ProductController.getProductById);
  router.post("/products", ProductController.insertProduct);
  router.put("/products/:id", ProductController.updateProduct);
  router.delete("/products/:id", ProductController.deleteProduct);

  // Order routes
  router.get("/orders", OrderController.getOrders);
  router.get("/orders/:id", OrderController.getOrderById);
  router.post("/orders", OrderController.insertOrder);
  router.put("/orders/:id", OrderController.updateOrder);
  router.delete("/orders/:id", OrderController.deleteOrder);

  // Category routes
  router.get("/categories", CategoryController.getCategories);
  router.get("/categories/:id", CategoryController.getCategoryById);
  router.post("/categories", CategoryController.insertCategory);
  router.put("/categories/:id", CategoryController.updateCategory);
  router.delete("/categories/:id", CategoryController.deleteCategory);

  // OrderDetail routes
  router.get("/orderdetails", OrderDetailController.getOrderDetails);
  router.get("/orderdetails/:id", OrderDetailController.getOrderDetailById);
  router.post("/orderdetails", OrderDetailController.insertOrderDetail);
  router.put("/orderdetails/:id", OrderDetailController.updateOrderDetail);
  router.delete("/orderdetails/:id", OrderDetailController.deleteOrderDetail);

  // Brand routes
  router.get("/brands", BrandController.getBrands);
  router.get("/brands/:id", BrandController.getBrandById);
  router.post("/brands", BrandController.insertBrand);
  router.put("/brands/:id", BrandController.updateBrand);
  router.delete("/brands/:id", BrandController.deleteBrand);

  app.use("/api/", router);
}
