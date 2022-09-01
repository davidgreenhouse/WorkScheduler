
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


{/* <container class="" id='hour{}'>
            <div class="col-2"></div>
            <div class="hour w-25 p-4">${}</div>
        </container> */}



    var newStuff =

    `<container class="row" id='hour-${i}'>
            <div class="col-2"></div>
            <div class="hour w-25 p-4 col-1">${timeSlot}</div>
            <textarea class="description w-50 p-4 col-6 ${currentState} hour-${i}"></textarea>
            <button class="saveBtn w-25 p-4 col-1 fas fa-save fa-2x"></button>
            <div class="col-2">
            </div>  
        </container>
        <p></p>`
        ;

    $(".container").append(newStuff);

};

/* 
getHeaderDate();
   $("").on("click", function () {
    var text = $(this).siblings(".description").val();
   

   for (var i = 8; i < 18; i++) {
    $(`${i}`).val(.getItem(`${i}`));
} */