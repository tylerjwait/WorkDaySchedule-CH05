//todays date and time
var displayTime = moment();
$("#currentDay").text(displayTime.format("dddd, MMM Do, YYYY"));
var hourSpan;
// timeblock function to show if it is past,present,or future
function colorBlocks() {
    $(".form-control").each(function () {
        var testTime = parseInt($(this).attr("id"));

        var date = new Date();
        var currentHour = date.getHours();

        if (testTime < currentHour) {
            $(this).addClass("past");
        }
        else if (testTime === currentHour) {
            $(this).addClass("present");
        }
        else if (testTime > currentHour) {
            $(this).addClass("future");
        }
    });
}
// save button functionality