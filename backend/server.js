//Backend server in express using moongose to connect and
//fetch data from mongo

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const logRoutes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
//load schema
let LOGS = require('./log.module');
//make connection- Before connection all data into MongoDB is imported
// with mongoimport command and --jsonArray tag
// mongoimport logs /path/file/logs.json --jsonArray
//MongoDB database name is Tune and collection name is logs

//Simply change 'Tune' in  mongodb://127.0.0.1:27017/Tune accordingly
//if different db name

mongoose.connect('mongodb://127.0.0.1:27017/Tune', { useNewUrlParser: true });
const connection = mongoose.connection;
//enables furhter query
const query = LOGS.find();

//Http Get no params, gets entier log in response
logRoutes.route('/').get(function(req, res) {
    LOGS.find(function(err, logs) {
        if (err) {
            console.log(err);
        } else {
            res.json(logs);
            console.log(logs);
        }
    });
});

//Http get with param user_id to read single user_id instance
logRoutes.route('/:id').get(function(req, res) {
    let user_id = req.params.id;
    LOGS.find({user_id:user_id}, function(err, results){
      if (err){
        console.log(err);
      }
      else{
        res.json(results);
      }
    });
});

//Http get with 2 params user_id and type to calculcate specific revenue
logRoutes.route('/:id/:type').get(function(req, res) {
    let user_id = req.params.id;
    let type = req.params.type;
    LOGS.aggregate([
      {
        $match:{$and:[{user_id:user_id},{type:type}]}
      },
      {
        $group:{ _id:"$user_id",total:{$sum:'$revenue'}
      }}],function(err, results){
      if (err){
        console.log(err);
      }
      else{
        res.json(results);
      }
    });
});


connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
app.use('/logs', logRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
