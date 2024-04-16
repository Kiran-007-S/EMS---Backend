// import express
const express = require("express");

// import cors
const cors = require("cors");

// import logic
const logic = require("./services/logics");

// Create a Backend application using the express
const emsServer = express();

// connecting the fronted application using cors
emsServer.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// convert the json data to js and js to json using json() function
emsServer.use(express.json());

// Define the port
emsServer.listen(8000, () => {
  console.log("ems server listening on port 8000");
});

// Api call for get all employees details
emsServer.get("/get-all-employees", (req, res) => {
  logic.getAllEmployees().then((response) => {
    res.status(response.statusCode).json(response);
  });
});

emsServer.post("/add-an-employee", (req, res) => {
  logic
    .addEmployee(
      req.body.id,
      req.body.name,
      req.body.age,
      req.body.designation,
      req.body.salary
    )
    .then((response) => {
      res.status(response.statusCode).json(response);
    });
});

emsServer.delete("/delete-an-employee/:id", (req, res) => {
  logic.deleteEmployee(req.params.id).then((response) => {
    res.status(response.statusCode).json(response);
  });
});

emsServer.get("/get-an-employee/:id", (req, res) => {
    logic.getAnEmployee(req.params.id).then((response) => {
      res.status(response.statusCode).json(response);
    });
  });


  emsServer.post('/update-an-employee/:id',(req,res)=>{
    //logic - function - updateEmployee()
    logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

