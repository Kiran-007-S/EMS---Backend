//Backend logics

//import db.js file
const db = require("../services/db");

//get all the employees details from  the database
const getAllEmployees = () => {
  return db.employee.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        employees: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "cant find employee",
      };
    }
  });
};

// Add employee details
const addEmployee = (id, name, age, designation, salary) => {
  return db.employee.findOne({ id }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "Employee already exists",
      };
    } else {
      const newEmployee = new db.employee({
        id,
        name,
        age,
        designation,
        salary,
      });
      newEmployee.save();
      return {
        statusCode: 200,
        message: "Employee added successfully",
      };
    }
  });
};

const deleteEmployee = (id) => {
  return db.employee
    .deleteOne({ id })
    .then((result) => {
      return {
        statusCode: 200,
        message: "Employee deleted successfully",
      };
    })
    .catch((error) => {
      return {
        statusCode: 404,
        message: "Couldn't find employee",
      };
    });
};

const getAnEmployee = (id) => {
  return db.employee.findOne({ id }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        employees: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "cant find employee",
      };
    }
  });
};

const updateEmployee = (id, name, age, designation, salary) => {
  return db.employee.findOne({ id }).then((result) => {
    if (result) {
      result.id = id;
      result.name = name;
      result.age = age;
      result.designation = designation;
      result.salary = salary;

      result.save();
      return {
        statusCode: 200,
        message: "Employee data updated successfully",
      };
    } else {
      return {
        statusCode: 404,
        message: "cant find employee",
      };
    }
  });
};

module.exports = {
  getAllEmployees,
  addEmployee,
  deleteEmployee,
  getAnEmployee,
  updateEmployee,
};
