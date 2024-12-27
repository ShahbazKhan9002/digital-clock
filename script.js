
function DateTime() {

    const currentDateTime = new Date();
    let hrs = currentDateTime.getHours();
    const min = currentDateTime.getMinutes();
    const sec = currentDateTime.getSeconds();
    const ampm = hrs>=12?"PM":"AM";

    // update time

    document.getElementById("hrs").textContent = String(hrs % 12 || 12).padStart(2, '0');
    document.getElementById("min").textContent = String(min).padStart(2, '0');
    document.getElementById("sec").textContent = String(sec).padStart(2, '0');
    document.getElementById("am-pm").textContent = ampm;

    // update Day and Date
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec",];
    document.getElementById("day").textContent = days[currentDateTime.getDay()] + ",";
    document.getElementById("date").textContent = currentDateTime.getDate();
    document.getElementById("month").textContent = months[currentDateTime.getMonth()];
    document.getElementById("year").textContent = currentDateTime.getFullYear();



}

setInterval(DateTime, 1000);




// const currentDateTime = new Date();
//    console.log(currentDateTime.getMinutes());