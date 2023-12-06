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

    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    let session = 'AM'

    let dayOfWeek = weekday[date.getDay()]
    let dayOfMonth = date.getDate()

    let month = months.getMonth()




    if (hours == 0 ) {
        hours = 12
    }

    if (hours > 12) {
        h = h- 12
        session = 'PM'
    }

    console.log(hours, mins, secs)



}



showTime()