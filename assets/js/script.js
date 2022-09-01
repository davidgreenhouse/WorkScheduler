
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
var momentTime = moment().startOf("day").add(7, "hour");
var hour = moment().format("HH");

for(var i = 8; i < 18; i++) {
    var timeSlot = momentTime.add(1, "hour").format("HH:mm A");
    var currentState;

    if (hour == i) {
        currentState = 'present';
    } else if (hour < i) {
        currentState = 'future';
    } else if (hour > i) {
        currentState = 'past';
    }

};

/* 
getHeaderDate();
   $("").on("click", function () {
    var text = $(this).siblings(".description").val();
   

   for (var i = 8; i < 18; i++) {
    $(`${i}`).val(.getItem(`${i}`));
} */