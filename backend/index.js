import express from "express";
import pinRouter from "./routes/pin.route.js";
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comment.route.js";
import boardRouter from "./routes/board.route.js";
import connectDB from "./utils/connectDB.js";

const app = express();

app.use("/pin", pinRouter);
app.use("/users", userRouter);
app.use("/board", boardRouter);
app.use("/comment", commentRouter);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running !");
});
