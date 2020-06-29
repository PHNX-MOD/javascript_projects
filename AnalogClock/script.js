
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();


let hrPosition = 360*date.getHours()/12+((date.getMinutes())*(360/60)/12);
let minPosition = 360*date.getMinutes()/60 + ((date.getSeconds())*(360/60)/60); 
let secPosition = 360*date.getSeconds()/60;


function runTheClock(){

	var newDate = new Date()

	hrPosition = hrPosition + (3/360);
	minPosition = minPosition + (6/60); 
	secPosition = secPosition + 6

	HOURHAND.style.transform = "rotate("+ hrPosition + "deg)"
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)" 
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)" 

	document.getElementById("demo").innerHTML = newDate;
	}


var ineterval = setInterval(runTheClock, 1000);