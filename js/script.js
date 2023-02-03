const appointments = [];

/* this main function is run whenever a user submits the form
   and passes the form data as a parameter */
function main(formData) {
    // destructure array
    let [name, date, pet] = formData;
    name = name[1];
    date = date[1];
    pet = pet[1];

    const dateTime = new Date(date);

    // is the date on a weekend? (Saturday or Sunday)
    if (dateTime.getDay() == 5 || dateTime.getDay() == 6) {
        alert("We're closed on weekends! Pick another date!");
        return;
    }

    // are there any appointments already reserved that day?
    for (const a of appointments) {
        if (date === a.date) {
            alert("That date has already been taken! Pick another date!");
            return;
        }
    }
    
    // create a new appointment
    const appointmentObject = {
        name,
        date,
        pet
    };

    appointments.push(appointmentObject);
    alert("Appointment was saved successfully!");
    
    console.log(appointments);
}

// grab the form element from the DOM
const formElement = document.getElementById("appmt_form");
// add a submit event listener to the form element
formElement.addEventListener("submit", (e) => {
    // prevent the form from reloading the page when submitted
    e.preventDefault();

    // grab the data from the form with the FormData object
    const formData = new FormData(e.target);
    // call the main function and provide the form entries
    main([...formData.entries()]);
})