// ALERT USER WITH POSITIVE VIBES TO STAR THE DAY.
window.onload = function () {
    if (window.jQuery) {
        // jQuery is loaded  
        alert("Let's plan this day");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}

//  DEFINE TASK COUNTER TO START FROM 0/
var taskIdCounter = 0;

// EMPY ARRAY REQUIRED TO HOLDS TASKS.
var tasks = [];

// STEP 1 : ADD DATE AND TIME TO THE HEADER.
var getCurrentTime = moment().format("dddd, MMMM Do YYYY");
output.innerHTML = getCurrentTime;

// 1ST. FUNCTION TO CLICK ON ROW FOR SPECIFIC HOUR THIS WILL BECOME EDITABLE.


$('#edit-task').click(function () {
    var fields = $(".disabled");
    fields.removeClass("disabled");
    fields.addClass("enabled");
    fields.removeAttr("disabled", "");
});


///////  FOLLOWING BLOCK OF CODE WORK FOR THE FIRST BUTTON ONLY ////

var content = "";

$(function () {   /// this is when the document is ready.
    $(".mySaveBtn").click(function () {
        // localStorage.key=value
        alert("You saved a task");
    });

    $('.bg-light').css({ color: 'green' }); /// CHANGE FONT COLOR WITH METHOD
}); 


// function createItem() {
// 	localStorage.setItem('taskDescription', 'everyHour'); 

// } 
// createItem() 


$('input[type=text]').each(function() {
    // e.preventDefault();
    // var everyHour = [];
    // dailyT = value.push(dailyT);
    // var i = 0;

    // localStorage.setItem('taskDescription', 'everyHour'); 
$('.userInput').click()
    dailyT['taskDescription'] = $('.userInput').val([i++]);
    dailyT[i++] = $(this).val();


    // taskDescription.push(dailyT);  

    var value = JSON.stringify(dailyT);
       localStorage.setItem("taskDescription", value);

}); 


// dailyT['everyHour'] = $(".userInput").val();

//         value.push(dailyT);


// function getValue() {

// 	return localStorage.getItem('taskDescription');  

// } // Gets the value of 'nameOfItem' and returns it
 

// getValue();

   
// 2ND. FUNCTION / DOM TRAVERSAL / METHODS : PARENTS, CHILDREN, SIBLINGS.

// $(document).ready(function(){   

//     $(".mySaveBtn").click(function(e){
//         e.preventDefault();
//         var jsonObj = [];
//         dailyT = {}
//         count = 0;

//         $('input[type=text]').each(function(){
//             if($.trim($(this).val()) && ($(this).attr('everyday').indexOf("dailyTaks") >= 0)){
//                 dailyT[count++] = $(this).val() 
//             }
//         });

//         dailyT['everyHour'] = $(".userInput").val();

//         jsonObj.push(dailyT);
//         console.log(jsonObj);

//        var jsonString= JSON.stringify(jsonObj);
//        localStorage.setItem("everyTask", jsonString);

//        /* remove localstorage */
//        // localStorage.removeItem("jsonString");

//        /* get localstorage */
//        // console.log(localStorage.getItem("jsonString"));
//     });

// });















// $(function () {

// 2ND. FUNCTION / DOM TRAVERSAL / METHODS : PARENTS, CHILDREN, SIBLINGS.

//     $(".mySaveBtn").click(function () {
//       data.push({
//           id: userInput(),
//           name: 'dailyT',
//           description: 'things to do'
//       })
// localStorage.setItem("userInput", JSON.stringify(userInput);

//     })
//     var data = localStorage.getItem("userInput");

// });



// }); // MAIN FUNCT TO WHEN DOCUMENT IS READY.


// $('#save-btn').on('click', function () {
//     $('#save-btn .saved-task').html('testing');
//     // $(this).toggleClass('task');

     // LOOP FOR EACH TASK ARRAY AND TASK OBJECT WITH NEW CONTENT AND CONDITIONALS.
//   for (var i = 0; i < tasks.length; i++) {
//     if (tasks[i].id === parseInt(taskId)) {
//       tasks[i].name = taskName;
//}
