import React, {Component} from "react";
import {Calendar, momentLocalizer,} from 'react-big-calendar';
import moment from "moment";
import {observer} from "mobx-react";


import "react-big-calendar/lib/css/react-big-calendar.css";
import AddEventModal from "./AddEventModal";

const localizer = momentLocalizer(moment);

class CalendarPage extends Component {
    render() {
        const { eventStore, petStore } = this.props;
        const { events } = eventStore;
        return (
            <div className="container mt-3">
                <div className="mb-2">
                    <AddEventModal buttonLabel="Add Event" petStore={petStore} eventStore={eventStore} submitCallback={() => this.forceUpdate()} />
                </div>
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={events}
                    style={{height: "85vh"}}
                />
            </div>
        );
    }
}

export default observer(CalendarPage);