
var day_of_week = document.getElementById('day-of-week');
var current_date = document.getElementById("date");
var current_time = document.getElementById("time");

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        
        nav.classList.toggle('nav-active');

    });
 
}

navSlide();
// get the month by name
const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var weekday = new Array(7);

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday"; 


// get current date

var today = new Date();
var day = weekday[today.getDay()];
var today_date = month[today.getMonth()] + ' ' + today.getDate() +  ' ' + today.getFullYear(); 

setInterval(gettime, 1000);
function gettime() {
    var cur_time = new Date();
    var hours = cur_time.getHours();
    var minutes = cur_time.getMinutes();
    var seconds = cur_time.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var time = hours + ":" + minutes + ":" + seconds; + " ";
    if (hours > 11) {
        time += " PM";
    } else {
        time += " AM";
    }
    console.log(time);
    document.getElementById("time").innerHTML = time;
}

day_of_week.innerHTML = day;
current_date.innerHTML = today_date;

