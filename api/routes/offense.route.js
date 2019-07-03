// offense.route.js

const express = require('express');
const app = express();
const offenseRoute = express.Router();

// Require offense model in our routes module
let Offense = require('../models/Offense');

// Defined store route
offenseRoute.route('/').post(function (req, res) {
  let offense = new Offense(req.body);
  offense.id= Offense.challanid;
  offense.save()
    .then(offense => {
      res.status(200).json({'Offense': 'Offense has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
offenseRoute.route('/').get(function (req, res) {
  Offense.find(function (err, offenses){
    if(err){
      console.log(err);
    }
    else {
      res.json(offenses);
    }
  });
});
/*
offenseRoute.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Offense.findById(id, function (err, offense){
      res.json(offense);
  });
});*/
offenseRoute.route('/:challanid').get(function (req, res) {
  Offense.findOne({challanid: req.params.challanid}, function (err, offenses){
      res.json(offenses);
  });
});



/*
// Defined edit route
offenseRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Offense.findById(id, function (err, offense){
      res.json(offense);
  });
});

//  Defined update route
offenseRoutes.route('/update/:id').post(function (req, res) {
  Offense.findById(req.params.id, function(err, offense) {
    if (!offense)
      res.status(404).send("Record not found");
    else {
      offense.OffenseName = req.body.OffenseName;
      offense.OffenseDescription = req.body.OffenseDescription;
      offense.OffensePrice = req.body.OffensePrice;

      offense.save().then(offense => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
offenseRoutes.route('/delete/:id').get(function (req, res) {
    Offense.findByIdAndRemove({_id: req.params.id}, function(err, offense){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
?*/
module.exports = offenseRoute;