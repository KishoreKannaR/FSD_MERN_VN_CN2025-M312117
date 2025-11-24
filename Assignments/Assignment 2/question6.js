var totalSeats = 120;
var bookedSeats = 78;
var availableSeats = totalSeats-bookedSeats;

if(availableSeats<20){
    var status = "Almost Full";
}else if(availableSeats>=20 && availableSeats<=60){
    var status ="Moderate Availability";
}else if(availableSeats>60){
    var status = "Plenty of Seats Available";
}

console.log(`${availableSeats} seats left, ${status}`);