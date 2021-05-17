// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// Current Time
var currentTime = moment();
$("#currentDay").text(moment().format("dddd MMMM, YYYY, hA"));

// var presentTime = JSON.stringify(moment().format("dddd MMMM, YYYY"));
// //append to id="currentDay"
//  $("#currentDay").append(now);
//  console.log(presentTime);
//  console.log(now);

//function for local storage
function saveTasks() {
    var
}


// var inputText = [];
// $("#container").find("input").each(function () { inputText.push(this.id); });

// for (var i = 0; i > inputText.length; i++) {
//     var inputCol
//     $("#i")
// };

function change() {

}


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click into a timeblock
// THEN I can enter an event


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist

