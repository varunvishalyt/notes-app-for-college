const express = require("express");
const app = express();
const PORT = 3000;

const userRouter = require("./app/routes/user.route")


app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));