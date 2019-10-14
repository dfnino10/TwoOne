import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./Home-Calendar.css";

class HomeCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.calendarComponentRef = React.createRef();
    this.state = {
      calendarWeekends: true,
      calendarEvents: []
    };
  }

  render() {
    return (
      <div className="mx-auto mb-5">
        <h3 className="titleC">Check out your events now!</h3>
        <div className="homeCalendar">
          <h2 className="text-center mb-3 titleC">{this.props.userName} Calendar</h2>
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

  handleDateClick() {
    arg => {
      if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        this.setState({});
      }
    };
  }
}

export default HomeCalendar;
