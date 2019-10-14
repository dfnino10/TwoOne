import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./Calendar.css";

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.calendarComponentRef = React.createRef();
    this.state = {
      calendarWeekends: true,
      calendarEvents: [
        {
          title: "Recital",
          start: "2019-10-15",
          end: "2019-10-15"
        },
        {
          title: "Reunion padres de familia",
          start: "2019-10-20",
          end: "2019-10-20"
        },
        {
          title: "Viaje familiar",
          start: "2019-10-25",
          end: "2019-10-28"
        }
      ]
    };
  }

  render() {
    return (
      <div className="mx-auto">
        <h3 className="titleG">
          If you want to add an event do a click on the day of the event
        </h3>
        <div className="calendar mt-5 mx-auto">
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
          <a className="btn btn-success" href="Event-List">
            Add event
          </a>
        </div>
      </div>
    );
  }

  handleDateClick() {
    arg => {
      if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        this.setState({});
      }
    };
  }
}
