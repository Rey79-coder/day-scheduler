// STEP 4 : MAKE SURE ALL TASK PERSIST.


// STEP 1 : ADD DATE AND TIME TO THE HEADER.
var getCurrentTime = moment().format("dddd, MMMM Do YYYY");
output.innerHTML = getCurrentTime;


// STEP  2: WHEN CLICK ON ROW FOR SPECIFIC HOUR THIS WILL BECOME EDITABLE.

$("#edit-task").bind("click", function(){
    var fields = $(".disabled");
     fields.removeClass("disabled");
     fields.addClass("enabled");
     fields.removeAttr("disabled", "");
 });

// STEP 3 : ADD COLOR CODE FOR PAST HOURS, PRESENT, AND FUTURE HOURS OF THE SAME DAY.




// var click = "",


// $('edit-task').ready(function() {
//     $('edit-task').click(edit);
// });







// char hours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];



// // The following object masquerades as an array.
// var fakeArray = { "length": 2, 0: "Addy", 1: "Subtracty" };
 
// // Therefore, convert it to a real array
// var realArray = $.makeArray( fakeArray )
 
// // Now it can be used reliably with $.map()
// $.map( realArray, function( val, i ) {
//   // Do something
// });


// var output = document.getElementById('currentDay');
// var numberDate = document.getElementById('date');

// let d = new Date();
// let day = d.getDay();
// let ndate = d.toLocaleString();
// console.log(ndate);

// switch(day) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//     case 2:
//         day = "Tuesday";
//     case 3:
//         day = "Wednesday";
//     case 4:
//         day = "Thusrday";
//     case 5:
//         day = "Friday";
//     case 6:
//         day = "Saturday";
// }




// // here we can stablish moments with specific format.
// // var currentDay = document.querySelector("#currentDay");
// var currentTime = document.querySelector('#current-day');
// var todayTime = new Date();

// currentTime.textContent = todayTime.moment().format('MMMM Do YYYY, h:mm:ss a');

// $('time').each(function(i, e) {
//     var time = moment($(e).attr('datetime'));

//     if(now.diff(time, 'days') <= 1) {
//         $(e).html('<span>' + time.from(now) + '</span>');
//     }
// });


// $('#currentDay').show('currentTime'); {

// }
