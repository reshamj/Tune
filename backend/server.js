const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const logRoutes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

let LOGS = require('./log.module');
mongoose.connect('mongodb://127.0.0.1:27017/Tune', { useNewUrlParser: true });
const connection = mongoose.connection;
const query = LOGS.find();

//if needed -All logs
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

// filter by id
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

//filter by id and type and get sum
logRoutes.route('/:id/:type').get(function(req, res) {
    let user_id = req.params.id;
    let type = req.params.type;
    LOGS.aggregate([
      {
        $match:{$and:[{user_id:user_id},{type:'conversion'}]}
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
