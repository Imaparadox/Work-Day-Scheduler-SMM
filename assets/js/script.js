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
    //When the user clicks the save button the task is stored in local storage
    //
}


// var inputText = [];
// $("#container").find("input").each(function () { inputText.push(this.id); });

// for (var i = 0; i > inputText.length; i++) {
//     var inputCol
//     $("#i")
// };

function timeChange() {
    //if the current time is more than the time block add class of past
    if (currentTime > 9) {
        $("#hour-9").addClass("past");
        //else the current time is equal to the time block add class of present
    } else if (currentTime >= 9 && currentTime < 10) {
        $("#hour-9").addClass("present");
        //else the current time is less than the time block add class of future
    } else if (currentTime < 9) {
        $("#hour-9").addClass("future");
    };
    if (currentTime > 10) {
        $("#hour-10").addClass("past");
    } else if (currentTime >= 10 && currentTime < 11) {
        $("#hour-10").addClass("present");
    } else if (currentTime < 10) {
        $("#hour-10").addClass("future");
    };
    if (currentTime > 11) {
        $("#hour-11").addClass("past");
    } else if (currentTime >= 11 && currentTime < 12) {
        $("#hour-11").addClass("present");
    } else if (currentTime < 11) {
        $("#hour-11").addClass("future");
    };
    if (currentTime > 12) {
        $("#hour-12").addClass("past");
    } else if (currentTime >= 12 && currentTime < 13) {
        $("#hour-12").addClass("present");
    } else if (currentTime < 12) {
        $("#hour-12").addClass("future");
    };
    if (currentTime > 13) {
        $("#hour-13").addClass("past");
    } else if (currentTime >= 13 && currentTime < 14) {
        $("#hour-13").addClass("present");
    } else if (currentTime < 13) {
        $("#hour-13").addClass("future");
    };
    if (currentTime > 14) {
        $("#hour-14").addClass("past");
    } else if (currentTime >= 14 && currentTime < 14) {
        $("#hour-14").addClass("present");
    } else if (currentTime < 14) {
        $("#hour-14").addClass("future");
    };
    if (currentTime > 15) {
        $("#hour-15").addClass("past");
    } else if (currentTime >= 15 && currentTime < 16) {
        $("#hour-15").addClass("present");
    } else if (currentTime < 15) {
        $("#hour-15").addClass("future");
    };
    if (currentTime > 16) {
        $("#hour-16").addClass("past");
    } else if (currentTime >= 16 && currentTime < 17) {
        $("#hour-16").addClass("present");
    } else if (currentTime < 16) {
        $("#hour-16").addClass("future");
    };
    if (currentTime > 17) {
        $("#hour-17").addClass("past");
    } else if (currentTime >= 17 && currentTime < 18) {
        $("#hour-17").addClass("present");
    } else if (currentTime < 17) {
        $("#hour-17").addClass("future");
    };
};
timeChange();


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click into a timeblock
// THEN I can enter an event


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist

