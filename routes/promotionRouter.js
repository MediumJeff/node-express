const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.header('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with the description: ${req.body.description}`)
})
.put((req, res) => {
    res.statusCode=403;
    res.end('PUT operation not supported on /promotions')
})
.delete((req, res) => {
    res.end('Deleting all promotions')
});

promotionRouter.route('/:promotionId')
.all((req,res,next) => {
    res.statusCode=200;
    res.header('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send information on promotion ID: ${req.params.promotionId}`);
})
.post((req, res) => {
    res.end(`Will add the promotion ID: ${req.params.promotionId} with the description: ${req.body.description}`)
})
.put((req, res) => {
    res.statusCode=403;
    res.end('PUT operation not supported on /promotions')
})
.delete((req, res) => {
    res.end(`Deleting promotion ID: ${req.params.promotionId}`)
});

module.exports = promotionRouter;