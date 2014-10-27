/*
Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 
*/
function CountingMinutesI(str){
str = str.split("-");
//str = ["1:00pm", "11:00am"]
var time1 = str[0];
var time2 = str[1];

var tm1 = getMinutes(time1);
var tm2 = getMinutes(time2);

if(tm1 > tm2){
	tm2 += 1440;
}
var diff = Math.abs(tm1 - tm2)
return diff;
}

function getMinutes(time){
time = time.split(":");
var hours = time[0];
hours = parseInt(hours);
var minutes = time[1]

if(minutes.match(/pm/g)){
	if(hours < 12){
		hours+=12;

	}
	minutes = minutes.replace(/pm/, "");
	minutes = parseInt(minutes);
}
else if(minutes.match(/am/g) && hours == 12){
	hours = 0;
	minutes = minutes.replace(/am/, "");
	minutes = parseInt(minutes)
}
else{
	minutes = minutes.replace(/am/, "");
	minutes = parseInt(minutes)

}

hours *= 60;
totalMinutes = hours+minutes;
console.log(totalMinutes)
return totalMinutes;
} 
