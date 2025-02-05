//Wind Chill 

function calculateWindChill(temp, windSpeed) {
    const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    return Math.round(windChill);
}

let temp = -7; //celsius
let windSpeed = 5; //km/h

const windChill = calculateWindChill(temp, windSpeed);

if ((temp <= 10) && (windSpeed > 4.8)) {
    document.getElementById('windChill').innerHTML = windChill;
} else {
    document.getElementById("windChill").innerHTML = "N/A";
}

//Footer information
let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


let lastModified = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;