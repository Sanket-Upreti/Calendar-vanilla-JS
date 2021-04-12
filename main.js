var newDate = new Date();
newDate.setDate(1);
var day = newDate.getDay();
var endDate = new Date(
	newDate.getFullYear(),
	newDate.getMonth() + 1,
	0
).getDate();

var prevDate = new Date(
	newDate.getFullYear(),
	newDate.getMonth(),
	0
).getDate();

var nextDate = new Date(
	newDate.getFullYear(),
	newDate.getMonth(),
	0
).getDate();

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("year-this").innerHTML = newDate.getFullYear();
document.getElementById("month-this").innerHTML = month[newDate.getMonth()];

var calen = "";

for (let x = day;  x > 0;  x--){
	calen += "<div class=''prev-month''>" + (prevDate - x  + 1 ) + "</div>";
}

for (i = 1; i <= endDate; i++){
	calen += "<div>" + i + "</div>";
}


document.getElementsByClassName("each-day")[0].innerHTML = calen;
