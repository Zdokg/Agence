const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const Road = require("./routes/contact");
const Route = require("./routes/login");


app.use(express.json());
app.use(cors());
connectDB();
app.use("/API" ,Road);
app.use("/API", Route);
app.use(cors({ origin: "http://localhost:3000" }));


app.listen(3100, () => console.log("Serveur en écoute sur http://localhost:3100"));
