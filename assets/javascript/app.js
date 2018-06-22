
var page1 = $(".page1")
var page2 = $(".page2")
var page3 = $(".page3")

$(document).ready(function() {
    page2.hide();
    page3.hide();
})

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

