import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Items = new Mongo.Collection("items");

if (Meteor.isServer) {
  Meteor.publish("items", function itemsPublication() {
    return Items.find({});
  });
}

Meteor.methods({
  "items.insert"(text) {
    check(text, String);

    Items.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },
  "items.remove"(itemId) {
    check(itemId, String);

    Items.remove(itemId);
  },
  "items.setChecked"(itemId, setChecked) {
    check(itemId, String);
    check(setChecked, Boolean);

    Items.update(itemId, { $set: { checked: setChecked } });
  }
});
