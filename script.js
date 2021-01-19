
var day_of_week = document.getElementById('day-of-week');
var current_date = document.getElementById("date");
var current_time = document.getElementById("time");
var time_zone = document.getElementById("time_zone");

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
var utc_time_click = document.getElementById("UTC").addEventListener("click", gettime);
var cet_time_click = document.getElementById("CET").addEventListener("click", gettime);
var ctt_time_click = document.getElementById("CTT").addEventListener("click", gettime);
var eet_time_click = document.getElementById("EET").addEventListener("click", gettime);
var est_time_click = document.getElementById("EST").addEventListener("click", gettime);
var cst_time_click = document.getElementById("CST").addEventListener("click", gettime);

var time_zones = document.getElementsByTagName('a');

// document.getElementById("UTC").addEventListener('click', function() {
//     document.getElementById("time-zone").innerHTML = "Time in: UTC";
//     var utc_time = new Date();
//     utc_time.getUTCHours();
//     utc_time.setHours(utc_time.getHours() - 1);
//     gettime(utc_time);
// });

// document.getElementById("CET").addEventListener('click', function() {
//     document.getElementById("time-zone").innerHTML = "Time in: CET";
//     var cet_time = new Date();
//     gettime(cet_time);
    
// });

// document.getElementById("CTT").addEventListener('click', function() {
//     document.getElementById("time-zone").innerHTML = "Time in: CTT";
//     var ctt_time = new Date();
//     ctt_time.setHours(ctt_time.getHours() + 8);
//     gettime(ctt_time);

// });

// document.getElementById("EET").addEventListener('click', function() {
//     document.getElementById("time-zone").innerHTML = "Time in: EET";
//     var eet_time = new Date();

//     eet_time.setHours(eet_time.getHours() + 2);
//     gettime(eet_time);
// });

// document.getElementById("EST").addEventListener('click', function() {
//     document.getElementById("time-zone").innerHTML = "Time in: EST";
//     var est_time = new Date();
//     est_time.setHours(est_time.getHours() - 5);
//     gettime(est_time);
// });

// document.getElementById("CST").addEventListener('click', function() {
//     document.getElementById("time-zone").innerHTML = "Time in: CST";
//     var cst_time = new Date();
//     cst_time.setHours(cst_time.getHours() - 6);
//     gettime(cst_time);
// });


// setInterval(changeTime, 1000);
// function changeTime() {
//     var utc_time = new Date();
//     utc_time.setHours(utc_time.getHours() - 1);
//     current_time = utc_time;
//     gettime(cst_time);
// }

// var timezoneid = ["UTC", "CET", "CTT", "EET", "EST", "CST"];

// for (var i = 0, ii = timezoneid.length; i < ii; i++)
// {
//     var ids = timezoneid[i];
//     if (document.getElementById(ids).addEventListener('click', newtime))
//     {
//         switch (ids) 
//         {
//             case 'UTC':
//                document.getElementById("time-zone").innerHTML = "Time in: UTC"; 
//                break;
//             case 'CET':
//                 console.log('hello');
//                document.getElementById("time-zone").innerHTML = "Time in: CET"; 
//                break;
//             case 'CTT':
//                document.getElementById("time-zone").innerHTML = "Time in: CTT"; 
//                break;
//             case 'EET':
//                document.getElementById("time-zone").innerHTML = "Time in: EET"; 
//                break;
//             case 'EST':
//                document.getElementById("time-zone").innerHTML = "Time in: EST"; 
//                break;
//             case 'CST':
//                document.getElementById("time-zone").innerHTML = "Time in: CST"; 
//                break;
//         }
//     }
// }


var canceled = false;

setInterval(gettime,newtime, 1000);
for (var i = 0; i< time_zones.length; i++)
if (time_zones[i].addEventListener('click', newtime)) {
    canceled = true
    console.log(time_zones[[i]]);

}
    function gettime() {
        if (canceled === true){
            return;
        }
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
            // console.log(time);
            document.getElementById("time").innerHTML = time;
    }

function newtime(time_zone) {
        var hours = time_zone.getHours();
        var minutes = time_zone.getMinutes();
        var seconds = time_zone.getSeconds();
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
        // console.log(time);
        document.getElementById("time").innerHTML = time;
}


day_of_week.innerHTML = day;
current_date.innerHTML = today_date;

