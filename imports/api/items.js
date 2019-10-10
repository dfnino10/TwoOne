import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Items = new Mongo.Collection("items");

if (Meteor.isServer) {
  Meteor.publish("items", () => {
    return Items.find({});
  });
}

Meteor.methods({
  "items.insert"(name) {
    Items.insert({
        //primer parametro es el query
        name
      }, {
        //Lo que voy a modificar
        name,
        text: ""
      });
  }
});