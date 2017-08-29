(function() {
    "use strict";

    var output = document.getElementById("output");
    //var convert = document.getElementById("convert");

    function convertH1() {
        var inputVal = document.getElementById("input").value;
        var inputValLen = inputVal.length;
        output.innerHTML = "<h1>" + inputVal.substring(1, inputValLen) + "</h1>";
    }
    var timer = 0;
    document.body.addEventListener("keydown", function() {
        clearTimeout(timer);
        timer = setTimeout(convertH1, 1500);
    });
    //console.log(input.textContent.substring(1, input.textContent.length));
})();