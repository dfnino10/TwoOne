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
    Items.insert(
      {
        name
      },
      {
        name,
        text: ""
      }
    );
  },
  "items.remove"(name) {
    Items.remove(
      {
        name
      },
      {
        name,
        text: ""
      }
    );
  },
  "items.updateName"(itemId, setName) {
    Items.update(itemId, { $set: { name: setName } });
  }
});
