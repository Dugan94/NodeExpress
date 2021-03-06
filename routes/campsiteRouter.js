const express = require('express');
const campsiteRouter = express.Router(); 
​
​
          //in serverjs, these methods were DEFINED SEPERATELY, BUT IN here they are chained
            //and in here, we dont need to include the path of '/campsites' bc its already defined above
            campsiteRouter.route('/')
            .all((req, res, next) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                next();
            })
            .get((req, res) => {
                res.end('Will send all the campsites to you');
            })
            .post((req, res) => {
                res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
            })
            .put((req, res) => {
                res.statusCode = 403;
                res.end('PUT operation not supported on /campsites');
            })
            .delete((req, res) => {
                res.end('Deleting all campsites');
            });
            
            
            
            
            
            campsiteRouter.route('/:campsiteId')
            .all((req, res, next) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                next();
            })
            .get((req, res) => {
                res.end(`Will send ${req.params.campsiteId} campsite to you.`);
            })
            .post((req, res) => {
                res.end(`Post not supported`);
            })
            .put((req, res) => {
                res.statusCode = 403;
                res.end('PUT operation not supported');
            })
            .delete((req, res) => {
                res.end(`Deleting ${req.params.campsiteId}`);
            });
​
​
module.exports = campsiteRouter; 