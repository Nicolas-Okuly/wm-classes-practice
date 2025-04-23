class Event { 
    constructor (name, date, location) { 
        this.name = name; 
        this.date = date instanceof Date? date : new Date(date); 
        this.location = location; 
        this.attendees = []; 
    } 

    addAttendee (attendee) { 
        if (!this.attendees.includes(attendee)) { 
        this.attendees.push(attendee); 
            return `${attendee} added to the attendee list for ${this.name}.`; 
        } else { 
            return `${attendee} is already on the attendee list.`; 
        } 
    } 

    removeAttendee (attendee) { 
    const index = this.attendees.indexOf(attendee); 
        if (index !== -1) { 
            this.attendees.splice (index, 1); 
            return `${attendee} removed from the attendee list for ${this.name}.`; 
        } else { 
            return `${attendee} was not found on the attendee list.`; 
        } 
    } 
    isToday() { 
        const today = new Date(); 
        return this.date.getDate() === today.getDate() &&
        this.date.getMonth() === today.getMonth() && 
        this.date.getFullYear() === today.getFullYear(); 
    } 

    getEventSummary() { 
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }

    const formattedDate = this.date.toLocaleDateString('en-US', options); 

    let todayNote = ""; 
        
    if (this.isToday()) { 
        todayNote = " (TODAY!)"; 
    } 
    return `
    Event: ${this.name}${todayNote} 
    Date: ${formattedDate} 
    Location: ${this.location} 
    Attendees: ${this. attendees.length} people are attending ${this.attendees.length > 0? 
    `Attendee List: ${this.attendees.join(", ")}` : 
    "No attendees yet."}; `
    } 
} 

const scienceClub = new Event ("Science Club Meeting", new Date(), "Room 203"); 
console.log(scienceClub.isToday()); 

scienceClub.addAttendee ("Alan");
scienceClub.addAttendee ("Beth");
scienceClub.addAttendee ("Carlos")
scienceClub.addAttendee ("Alan"); 
console.log(scienceClub.getEventSummary()); 
scienceClub.removeAttendee("Beth")

const schoolDance = new Event("Spring Dance", new Date("2025-06-15"), "School Gymnasium");  
console.log(schoolDance.isToday()); 
console.log(schoolDance.getEventSummary()); 