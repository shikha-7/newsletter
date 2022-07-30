require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const connectDB = require("./db/connection");
const userRouter = require("./routes/userRoutes")

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/user", userRouter);

const start = async () => {

    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`server is running on port no. ${port}`)
        });

    }
    catch (error) {
        console.log(error);
    }
}
start();