
 function initClock() {

	renderClock();

	setInterval(renderClock, 1000);
}

function renderClock() {

	var clock = document.getElementById('time');
	var date  = document.getElementById('date');

	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	date.innerHTML = time['date'] + ' ' +  getCurrentMonth(time['month']);

	clock.innerHTML = time['hours'] + sep +  time['minutes'];
}

/**
 * Flash seperator 
 * @param integer - seconds
 * @return string
 */
function flashSeperator(seconds) {
	var sepClass = '';

	// toggle class
	if (seconds % 2 === 1) {
		sepClass = ' class="trans"';
	}

	return '<span' + sepClass + '">:</span>';
}

/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */
function getCurrentTime(date) {
	var time = [];

	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();
	time['month']   = date.getMonth();
	time['date']     = date.getDate();

	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	return time;
}

/**
 * Get current Month
 * @param integer - month number
 * @return string
 */
function getCurrentMonth(monthNumber) {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return months[monthNumber];
}

initClock();




var klok = new Date();
var uren = klok.getHours();
var morning = document.getElementById('morning');
var afternoon = document.getElementById('afternoon');
var evening = document.getElementById('evening');
var night = document.getElementById('night');

if(uren >= 0 && uren < 6){
    night.classList.add("block");
    morning.classList.add("none");
    afternoon.classList.add("none");
    evening.classList.add("none");
}
else if (uren >= 6 && uren < 12){
    night.classList.add("none");
    morning.classList.add("block");
    afternoon.classList.add("none");
    evening.classList.add("none");
}
else if (uren >= 12 && uren < 18){
    night.classList.add("none");
    morning.classList.add("none");
    afternoon.classList.add("block");
    evening.classList.add("none");
}
else if (uren >= 18){
    night.classList.add("none");
    morning.classList.add("none");
    afternoon.classList.add("none");
    evening.classList.add("block");
}