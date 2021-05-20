window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Let's plan this day");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}



// STEP 1 : ADD DATE AND TIME TO THE HEADER.
var getCurrentTime = moment().format("dddd, MMMM Do YYYY");
output.innerHTML = getCurrentTime;


// STEP  2: WHEN CLICK ON ROW FOR SPECIFIC HOUR THIS WILL BECOME EDITABLE.

$('#edit-task').click(function() {
    var fields = $(".disabled");
     fields.removeClass("disabled");
     fields.addClass("enabled");
     fields.removeAttr("disabled", "");
 });


 // STEP 3: SAVE BUTTON

    $("#save-task").click(function(){
        // localStorage.key=value
        alert("You saved a task");
        $(this).toggleClass('task');
        // Define wheter its a favourite item based on the class
        let val = $(this).hasClass('task');
        // Set the localStorage
        localStorage.setItem('input', val);
    });  

 // STEP 4: SAVE BUTTON




 // STEP 5 : MAKE SURE ALL TASK PERSIST.





// $('#edit-task').persist(function(){
//     $('input').data( "task" );

// });

    // $('.persist-state').persistState('input');

    

//   // Getting the value of the selected field

// var savedTasks = $('#').val();

// // If there's no value selected, hide everything.
// if(my_select_value == 0){
//     $('.widget-test .row').hide();
// }
// // Otherwise, show the specific rows
// if(my_select_value == 1){
//     $('.widget-test .row').hide();
//     $('.widget-test .row.one').show();
// }
// if(my_select_value == 2){
//     $('.widget-test .row').hide();
//     $('.widget-test .row.two').show();
// }
// if(my_select_value == 3){
//     $('.widget-test .row').hide();
//     $('.widget-test .row.three').show();
// }

     
    
    // undefined
    // $( saveTask ).data( "hour" ); // {}


// localStorage.setItem(key,value); to set
// localStorage.getItem(key); to get.
// key and value must be strings.
// so in your context code will become


 
// let $saveBtn = $('<div>');
//     $col1SaveDiv.addClass('col-md-1');

//     let $saveBtn = $('<i>');
//     $saveBtn.attr('id',`saveid-${index}`);
//     $saveBtn.attr('save-id',index);
//     $saveBtn.attr('class',"far fa-save saveIcon")

// // STEP 3: STORE INFO LOCALLY BY CLICK THE SAVE ICON.

// var i = 0;

// var value = "";

//     $('#save-task').on("click", function() {
//         localStorage.setItem('save-task', 'value');
//         return localStorage.getItem('nameOfItem');
//     });



// function createItem() {
// 	localStorage.setItem('save-task', 'value');
// } 
// createItem() // Creates a item named 'nameOfItem' and stores a value of 'value'

// function getValue() {
// 	return localStorage.getItem('nameOfItem');  
// } // Gets the value of 'nameOfItem' and returns it
// console.log(getValue()); //'value';


// var test = false;
// var saveIcon = document.querySelector('#save-task')

// $('#save-task').on("click", function() {
//     var saveTask = $("click");
//     let saveTask = JSON.parse(localStorage.getItem("storedPlans"));

//     let saveTask = JSON.parse(localStorage.getItem("storedPlans"));
//     // if (test) { console.log(storedPlans); }

//  }
// );














// STEP 3 : ADD COLOR CODE FOR PAST HOURS, PRESENT, AND FUTURE HOURS OF THE SAME DAY.

// make background color of / past hours red / current hour gray / future hours green
// var hourPast = hourPast < currentTime;
// var hourNow = getCurrentTime;
// var hourFuture = hourFuture < currentTime;

// // if currentTime > hourNow make background color gray//

// $(document).ready(function() {

// var hourNow = getCurrentTime;

//     function backgroundColorEdit(){
//         if (hourNow == getCurrentTime){
//             document.getElementsByClassName("backgroundTool").style.backgroundColor = "#ff0000";
//         }else if (hourNow < currentTime){
//             document.getElementsByClassName("backgroundTool").style.backgroundColor = "#d3d3d3";
//         }else 
//         {
//             document.getElementsByClassName("backgroundTool").style.backgroundColor = "#90ee90";
//         }
// }


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

