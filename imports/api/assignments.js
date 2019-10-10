import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Assignments = new Mongo.Collection("assignments");

if (Meteor.isServer) {
  Meteor.publish("assignments", () => {
    return Assignments.find({});
  });
}

Meteor.methods({
  "assignments.insert"(name) {
    Assignments.insert({
        //proimer parametro es el query
        name
      }, {
        //Lo que voy a modificar
        name,
        text: ""
      });
  }
});