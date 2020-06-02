const express = require('express');
const bodyParser = require('body-parser');

const timeRouter = express.Router();

timeRouter.use(bodyParser.json());

timeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the times to you');
})
.post((req, res) => {
    res.end(`Will add the time: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /times');
})
.delete((req, res) => {
    res.end('Deleting all times');
});

timeRouter.route('/:timeId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end(`Will send details of the time: ${req.params.timeId} to you`);
})
.post((req, res) => {
  res.end(`POST operation not supported on /times/${req.params.timeId}`);
})
.put((req, res) => {
  res.write(`Updating the time: ${req.params.timeId}\n`);
  res.end(`Will update the time: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
  res.end(`Deleting time: ${req.params.timeId}`);
});


module.exports = timeRouter;