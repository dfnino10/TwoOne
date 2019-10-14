import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Events = new Mongo.Collection("events");

if (Meteor.isServer) {
  Meteor.publish("events", function eventsPublication() {
    return Events.find({});
  });
}

Meteor.methods({
  "events.insert"(title, start, end) {
    check(title, String);
    check(start, Date);
    check(end, Date);

    Events.insert({
      title,
      start: new Date(),
      end: new Date(),
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },
  "events.remove"(eventId) {
    check(eventId, String);

    Events.remove(eventId);
  }
});
