(function() {
    "use strict";

    var input = document.getElementById("input");
    var output = document.getElementById("output");
    //var convert = document.getElementById("convert");

    function convertH1() {
        var h1Text = input.value;
        var h1TextLen = h1Text.length;
        var h1PureText = h1Text.substring(1, h1TextLen);
        output.innerHTML = "<h1>" + h1PureText + "</h1>";
    }
    var timer = 0;
    document.body.addEventListener("keydown", function() {
        clearTimeout(timer);
        timer = setTimeout(convertH1, 1500);
    });
    //console.log(input.textContent.substring(1, input.textContent.length))
})();