//current header date
var presentDay = moment().format("MMMM Do YYYY hA");
$("#currentDay").text(presentDay);
//current date and time
var timeNow = moment();
//current hour time
var presentHour = timeNow.hours();
//selecting all textarea elements
var textElements = jQuery("textarea").find("textarea");
var timeBlocks = $(".time-block");
//function that stores user inputs
$(document).ready(function () {
    timeBlockColor()
    //local storage
    $(".saveBtn").on("click", function () {
        var contentText = $(this).siblings(".description").val();
        var contentDate = $(this).parent().attr("id");
        localStorage.setItem(contentText, contentDate);
    });
});
//If statements that show available time-blocks that correspond to the time of day
function timeBlockColor() {
    if (presentHour > 8) {
        $("#hour-8").addClass("past");
    } else if (presentHour >= 8 && presentHour < 9) {
        $("#hour-8").addClass("present");
    } else if (presentHour < 8) {
        $("#hour-8").addClass("future");
    };
    if (presentHour > 9) {
        $("#hour-9").addClass("past");
    } else if (presentHour >= 9 && presentHour < 10) {
        $("#hour-9").addClass("present");
    } else if (presentHour < 9) {
        $("#hour-9").addClass("future");
    };
    if (presentHour > 10) {
        $("#hour-10").addClass("past");
    } else if (presentHour >= 10 && presentHour < 11) {
        $("#hour-10").addClass("present");
    } else if (presentHour < 10) {
        $("#hour-10").addClass("future");
    };
    if (presentHour > 11) {
        $("#hour-11").addClass("past");
    } else if (presentHour >= 11 && presentHour < 12) {
        $("#hour-11").addClass("present");
    } else if (presentHour < 11) {
        $("#hour-11").addClass("future");
    };
    if (presentHour > 12) {
        $("#hour-12").addClass("past");
    } else if (presentHour >= 12 && presentHour < 13) {
        $("#hour-12").addClass("present");
    } else if (presentHour < 12) {
        $("#hour-12").addClass("future");
    };
    if (presentHour > 13) {
        $("#hour-1").addClass("past");
    } else if (presentHour >= 13 && presentHour < 14) {
        $("#hour-1").addClass("present");
    } else if (presentHour < 13) {
        $("#hour-1").addClass("future");
    };
    if (presentHour > 14) {
        $("#hour-2").addClass("past");
    } else if (presentHour >= 14 && presentHour < 15) {
        $("#hour-2").addClass("present");
    } else if (presentHour < 14) {
        $("#hour-2").addClass("future");
    };
    if (presentHour > 15) {
        $("#hour-3").addClass("past");
    } else if (presentHour >= 15 && presentHour < 16) {
        $("#hour-3").addClass("present");
    } else if (presentHour < 15) {
        $("#hour-3").addClass("future");
    };
    if (presentHour > 16) {
        $("#hour-4").addClass("past");
    } else if (presentHour >= 16 && presentHour < 17) {
        $("#hour-4").addClass("present");
    } else if (presentHour < 16) {
        $("#hour-4").addClass("future");
    };
    if (presentHour > 17) {
        $("#hour-5").addClass("past");
    } else if (presentHour >= 17 && presentHour < 18) {
        $("#hour-5").addClass("present");
    } else if (presentHour < 17) {
        $("#hour-5").addClass("future");
    };
};
