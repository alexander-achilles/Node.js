const mongodb = require('mongodb');
const mongoose = require("mongoose");
require('dotenv').config();
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://<dbuser>:<dbpassword>@cluster0.pwkc0.mongodb.net/<dbname>?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
