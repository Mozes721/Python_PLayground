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

// get current date
var today = new Date();
var today_date = today.getFullYear() + '-' + month[today.getMonth()]+'-'+today.getDate();

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


current_date.innerHTML = today_date;

