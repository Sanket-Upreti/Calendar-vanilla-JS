var newDate = new Date();

function renderData() {
	newDate.setDate(1);
	var day = newDate.getDay() - 1;
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
		newDate.getMonth() + 1,
		0
	).getDate();

	var today = new Date();

	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	document.getElementById("year-this").innerHTML = newDate.getFullYear();
	document.getElementById("month-this").innerHTML = month[newDate.getMonth()];

	var calen = "";

	for (let x = day; x > 0; x--) {
		calen += "<div class='prev-month-date'>" + (prevDate - x + 1) + "</div>";
	}

	for (i = 1; i <= endDate; i++) {
		if (i == today.getDate() && newDate.getMonth() == today.getMonth() && newDate.getFullYear() == today.getFullYear()) {
				calen += "<div class='today'>" + i + "</div>";
		} else {
				calen += "<div>" + i + "</div>";
		}
		
	}

	for (let j = 1; j <= 2 ; j++) {
		calen += "<div class='next-month-date'>" + j + "</div>";
	}

	document.getElementsByClassName("each-day")[0].innerHTML = calen;
}

function lastMonth(para) {
	if (para === 'previous') {
		newDate.setMonth(newDate.getMonth() - 1);
		renderData();
	}
	else{
		 newDate.setMonth(newDate.getMonth() + 1);
		renderData();
	}

}
	
	let date2 = new Date();
	let day1 = date2.getDate();
	let month1 = date2.getMonth();
	let year1 = date2.getFullYear();

	let selectedDate = date2;
	let selectedDay = day1;
	let selectedMonth = month1;
	let selectedYear = year1;

	var selectedDateElement = document.getElementById("demo");
	
	selectedDateElement.textContent = formatDate(date2);

function formatDate(d) {
	let day1 = d.getDate();
	if (day1 < 10) {
		day1 = '0' + day1;
	}
	let month1 = d.getMonth() + 1;
	if (month1 < 10) {
		month1 = '0' + month1;
	}

	let year1 = d.getFullYear();
	return day1 + ' / ' + month1 + ' / ' + year1;
}
		
var dayday = document.getElementById("each-day");

dayday.addEventListener('onClick', showFunc () {
	console.log("1");
});

	


// var fullDate = document.getElementById("fDate");
// var monthYear = document.getElementById("month-year");
// var dayEach = document.getElementById("each-day");
// fullDate.addEventListener("keyup", filterItem);

// function filterItem(e) {
// var fullDate = e.target.value.toLowerCase();
// 	if (fullDate != monthYear) {
// 		monthYear.appendChild = fullDate;
// 	}	
// }
