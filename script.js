
var day_of_week = document.getElementById('day-of-week');
var current_date = document.getElementById("date");
var current_time = document.getElementById("time");
var time_zone = document.getElementById("time_zone");
var ul = document.getElementById("nav_links");
var navElements = document.querySelectorAll('a');


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        
        nav.classList.toggle('nav-active');
        nav.classList.toggle('nav-ease-in');

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

document.getElementById("time-zone").innerHTML = "Choose your Time Zone"; 
document.getElementById("time").innerHTML = '00:00:00';


navElements.forEach(function (element, index){
    element.addEventListener('click', function(e) {
        // e.preventDefault();
        switch (index) 
        {
            case 0:
               document.getElementById("time-zone").innerHTML = "Time in: UTC"; 
            //    setTimeout(get_cet, get_ctt,get_est);
            //    var time_change = new Date();
            //    time_change.setHours(time_change.getHours() - 1);
            //    setInterval(get_time, 1000);
            //    get_time(time_change);
            //    var utc = setInterval(get_utc, 1000);
               get_utc();
               break;
            case 1:
               document.getElementById("time-zone").innerHTML = "Time in: CET"; 
            //    var time_change = new Date();
            //    setInterval(get_time, 1000);
            //    get_time(time_change);
            //    setTimeout(get_utc, get_ctt,get_est);
            //    var cet = setInterval(get_cet, 1000);
               get_cet();
               break;
            case 2:
               document.getElementById("time-zone").innerHTML = "Time in: CTT"; 
               setInterval(get_ctt, 1000);
               getctt();
               break;
            case 3:
               document.getElementById("time-zone").innerHTML = "Time in: EET"; 
               setInterval(get_eet, 1000);
               get_eet();
               break;
            case 4:
               document.getElementById("time-zone").innerHTML = "Time in: EST"; 
               setInterval(get_est, 1000);
               get_est();
               break;
            case 5:
               document.getElementById("time-zone").innerHTML = "Time in: CST"; 
               setInterval(get_cst, 1000);
               get_cst();
               break;
            
        }
    
    });
    
})

function get_utc() {
  
    var utc_time = new Date();
    utc_time.setHours(utc_time.getHours() - 1);
    var hours = utc_time.getHours();
    var minutes = utc_time.getMinutes();
    var seconds = utc_time.getSeconds();
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
            get_time(time);
            
    }

function get_cet() {
        var get_cet = new Date();
        var hours = get_cet.getHours();
        var minutes = get_cet.getMinutes();
        var seconds = get_cet.getSeconds();
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
        get_time(time);
}

function get_ctt() {
        var get_ctt = new Date();
        get_ctt.setHours(get_ctt.getHours() + 8);
        var hours = get_ctt.getHours();
        var minutes = get_ctt.getMinutes();
        var seconds = get_ctt.getSeconds();
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
function get_eet() {
        var get_eet = new Date();
        get_eet.setHours(get_eet.getHours() + 2);;
        var hours = get_eet.getHours();
        var minutes = get_eet.getMinutes();
        var seconds = get_eet.getSeconds();
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
function get_est() {
        var get_est = new Date();
        get_est.setHours(change_time.getHours() - 5);
        var hours = get_est.getHours();
        var minutes = get_est.getMinutes();
        var seconds = get_est.getSeconds();
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
function get_cst() {
        var get_cst = new Date();
        get_cst.setHours(get_cst.getHours() - 6);
        var hours = get_cst.getHours();
        var minutes = get_cst.getMinutes();
        var seconds = get_cst.getSeconds();
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
        get_time(time);
        console.log(time);
        document.getElementById("time").innerHTML = time;
}

setInterval(get_time, 1000);
function get_time(time_change) {
       document.getElementById("time").innerHTML = time_change;
    }

day_of_week.innerHTML = day;
current_date.innerHTML = today_date;

