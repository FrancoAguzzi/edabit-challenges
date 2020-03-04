
// Name: How Many Days Between Two Dates
// URL: https://edabit.com/challenge/3hdXjfJozQySRC3gE

function getDays(date1, date2) {
    return (Date.parse(date2) - Date.parse(date1)) / 1000 / 60 / 60 / 24;
}

getDays(new Date('June 14, 2019'), new Date('June 20, 2019'));


/* Description:

Create a function that takes two dates and returns the number of days between the first and second date. */