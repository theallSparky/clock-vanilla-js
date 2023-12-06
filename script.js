const showTime = () => {
    let date = new Date()
    console.log(date)

    //Declare all possible day values
    let weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    //Declare all possible month values
    let months = [
        'January',
        'Februrary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',    
        'November',
        'December',
    ]

    //Gets hours, minutes, seconds and sets to varaibles
    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    let ms = date.getMilliseconds()
    let session = 'AM'


    //Select the day of the week, either sunday - saturday. 
    let dayOfWeek = weekday[date.getDay()]
    //Select the day of the month, either 1 - 31. 
    let dayOfMonth = date.getDate()
    console.log(dayOfMonth, dayOfWeek)

    //Logic for if AM or PM
    if (hours == 0 ) {
        hours = 12
    }

    if (hours > 12) {
        hours = hours - 12
        session = 'PM'
    }

    let time = `${hours}:${mins}:${secs}.${ms} ${session}`

    document.querySelector(".clock").innerText = time
    document.querySelector(".clock").textContent = time

    document.querySelector()


    console.log(time)



}



showTime()