const express = require('express');
const cors = require("cors");
//link to controller file
const housesController = require("./controller.js");
//
const app = express();


//middleware
app.use(express.json());
app.use(cors());



app.get("/api/houses", housesController.getHouses);
app.post("/api/houses", housesController.createHouse);
app.put("/api/houses/:id", housesController.updateHouse);
app.delete("/api/houses/:id", housesController.deleteHouse);

//port opened
app.listen(4004, function() {
  console.log("Server running on 4004");
});