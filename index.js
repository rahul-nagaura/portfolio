const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/index");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors()); // invoke as a function
app.use(express.json());

app.use(express.static(path.join(__dirname, "./my-app/build")));

app.use("/api/v1/portfolio", router);

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "./my-app/build/index.html"))
});

app.get("/", (req, res) => {
    res.send("This is the HomePage");
});

app.listen(PORT, () => {
    console.log("Server is started at PORT:", PORT);
});
