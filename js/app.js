(function() {
    "use strict";

    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var convert = document.getElementById("convert");

    function convertH1() {
        var h1Text = input.textContent;
        var h1TextLen = h1Text.length;
        var h1PureText = h1Text.substring(1, h1TextLen);
        output.innerHTML = "<h1>" + h1PureText + "</h1>";
    }

    convert.addEventListener("click", function() {
        convertH1();
    });
    //console.log(input.textContent.substring(1, input.textContent.length))
})();