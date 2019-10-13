import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const CalendarEvents = new Mongo.Collection("calendarEvents");

if (Meteor.isServer) {
  Meteor.publish("calendarEvents", () => {
    return CalendarEvents.find({});
  });
}

Meteor.methods({
  "calendarEvents.insert"(name) {
    CalendarEvents.insert(
      {
        name
      },
      {
        name,
        text: ""
      }
    );
  },
  "calendarEvents.remove"(name) {
    CalendarEvents.remove(
      {
        name
      },
      {
        name,
        text: ""
      }
    );
  },
  "calendarEvents.updateName"(itemId, setName) {
    CalendarEvents.update(itemId, { $set: { name: setName } });
  }
});
