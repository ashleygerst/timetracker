const express = require('express');
const bodyParser = require('body-parser');

const employeeRouter = express.Router();

employeeRouter.use(bodyParser.json());

employeeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the employees to you');
})
.post((req, res) => {
    res.end(`Will add the employee: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /employees');
})
.delete((req, res) => {
    res.end('Deleting all employees');
});

employeeRouter.route('/:employeeId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end(`Will send details of the employee: ${req.params.employeeId} to you`);
})
.post((req, res) => {
  res.end(`POST operation not supported on /employees/${req.params.employeeId}`);
})
.put((req, res) => {
  res.write(`Updating the employee: ${req.params.employeeId}\n`);
  res.end(`Will update the employee: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
  res.end(`Deleting employee: ${req.params.employeeId}`);
});


module.exports = employeeRouter;