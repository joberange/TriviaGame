
// setting variables for breaking up html into blocks to appear at seperate times

var page1 = $(".page1")
var page2 = $(".page2")
var page3 = $(".page3")

// on start hiding two "pages" and displaying first page

$(document).ready(function() {
    page2.hide();
    page3.hide();
})

//when clicking start game need to display second page and start timer
// when timer finishes it will display last page with score and replay button

$(".start").click(function timer() {
    page2.show();
    page1.hide();
    page3.hide();
    var number = 100; 
    var reset = setInterval(decrement, 1000);
    function decrement() {
        number--;
        $(".time").html("<h2>" + number + "</h2>");
        if (number === 0) {
            stop();
            page1.hide();
            page2.hide();
            page3.show();
      }
    }
    function stop() {
        clearInterval(reset);
      }
});

//when game is over need to restart timer and display page 2 again


$(".replay").click(function timer() {
    page2.show();
    page1.hide();
    page3.hide();
    var number = 100; 
    var reset = setInterval(decrement, 1000);
    function decrement() {
        number--;
        $(".time").html("<h2>" + number + "</h2>");
        if (number === 0) {
            stop();
            page1.hide();
            page2.hide();
            page3.show();
      }
    }
    function stop() {
        clearInterval(reset);
      }
});

// select and store answers
// limit answers given
// value answers as ture or false
// record and display flase or true amount
// check for unanswered questions
// terminate game when all answered
// 