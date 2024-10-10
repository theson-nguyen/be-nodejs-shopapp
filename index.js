/**
DB Diagram
https://dbdiagram.io/d/ShopAppOnlineNodeJSReactJS-66b02f6c8b4bb5230e31fb99

npx sequelize-cli init
npx sequelize-cli model:generate --name User --attributes email:string,password:string,name:string,role:integer,avatar:string,phone:integer

Run Migrations:
npx sequelize-cli db:migrate

Revert the most recent migration:
npx sequelize-cli db:migrate:undo

npx sequelize-cli db:migrate:undo:all

npx sequelize-cli model:generate --name Category --attributes name:string,image:text
npx sequelize-cli model:generate --name Brand --attributes name:string,image:text

npx sequelize-cli model:generate --name News --attributes title:string,image:text,content:text
npx sequelize-cli model:generate --name Banner --attributes name:string,image:text,status:integer

npx sequelize-cli model:generate --name Order --attributes user_id:integer,status:integer,note:text,total:integer

SELECT * FROM information_schema.table_constraints
WHERE table_schema = 'shopapp_online' AND table_name = 'news_details';

npx sequelize-cli model:generate --name Product --attributes name:string,price:integer,oldprice:integer,user_id:integerdescription:text,specification:text,buyturn:integer,quantity:integer,brand_id:integer,category_id:integer

npx sequelize-cli model:generate --name OrderDetail --attributes order_id:integer,product_id:integer,price:integer,quantity:integer

npx sequelize-cli model:generate --name BannerDetail --attributes product_id:integer,banner_id:integer

npx sequelize-cli model:generate --name Feedback --attributes product_id:integer,user_id:integer,star:integer,content:text

npx sequelize-cli model:generate --name NewsDetail --attributes product_id:integer,news_id:integer

yarn add express
yarn add dotenv nodemon

*/
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { AppRoute } from "./AppRouter";

const app = express();
app.use(express.json());
express.urlencoded({ extended: true });

const port = process?.env?.PORT ?? 3000;

AppRoute(app);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
