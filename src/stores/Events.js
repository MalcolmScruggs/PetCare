import moment from "moment";

class Events {
    events = [
        {
            start: new Date(),
            end: new Date(moment().add(2, "Hours")),
            title: "Get Rover some grub"
        }
    ];

    addEvent(pet) {
        this.events.push(pet)
    }

}

export default Events;