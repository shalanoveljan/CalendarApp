$(document).ready(function() {
    $('#calendar').evoCalendar({
        
        theme:"Midnight Blue",
        calendarEvents: [
            {
              id: 'event1', // Event's ID (required)
              name: "New Year", // Event name (required)
              date: "January/1/2020", // Event date (required)
              type: "holiday", // Event type (required)
              everyYear: true // Same event every year (optional)
            },
            {
                id: 'event2', // Event's ID (required)
                name: "Woman's Day", // Event name (required)
                date: "March/8/2020", // Event date (required)
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
              {
                id: 'event3', // Event's ID (required)
                name: "Labor Day", // Event name (required)
                date: "May/1/2020", // Event date (required)
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
            {
              name: "Vacation Leave",
              badge: "02/13 - 02/15", // Event badge (optional)
              date: ["February/13/2020", "February/15/2020"], // Date range
              description: "Vacation leave for 3 days.", // Event description (optional)
              type: "event",
              color: "#63d867" // Event custom color (optional)
            }
          ]
    })
})
