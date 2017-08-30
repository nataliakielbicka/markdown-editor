(function() {
    "use strict";

    var output = document.getElementById("output");
    var timer = 0;

    function addElement(node) {
        var inputVal = document.getElementById("input").value;
        var inputValArr = inputVal.split("\n");
        var inputValArrLen = inputValArr.length;
        var inputValArrLast = inputValArr[inputValArrLen - 1];
        var inputValArrLastLen = inputValArrLast.length;
        var inputAdd = inputValArrLast.substring(1, inputValArrLastLen);
        if (inputValArrLast.charAt(0) === "#" && inputValArrLast.charAt(1) !== "#") {
            var newDiv = document.createElement(node);
            var newContent = document.createTextNode(inputAdd);
            newDiv.appendChild(newContent);

            output.insertBefore(newDiv, output.nextElementSibling);
        }
    }

    function convertH1() {
        addElement("h1");
    }

    document.body.addEventListener("keydown", function() {
        clearTimeout(timer);
        timer = setTimeout(convertH1, 1500);
    });

})();