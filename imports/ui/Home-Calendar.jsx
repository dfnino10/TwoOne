import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import { Meteor } from "meteor/meteor";

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./Home-Calendar.css";

export default class HomeCalendar extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: []
  };

  render() {
    return (
      <div className="mx-auto mb-5">
        <h3>Check out your events now!</h3>
        <div className="calendar">
          <h2 className="text-center mb-3">{this.props.userName} Calendar</h2>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
            navLinks={true}
          />
        </div>
      </div>
    );
  }

  handleDateClick = arg => {
    if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
      this.setState({});
    }
  };
}
