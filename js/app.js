(function() {
    "use strict";

    var output = document.getElementById("output");
    var timer = 0;

    function addElement() {
        var inputVal = document.getElementById("input").value;
        var inputValArr = inputVal.split("\n");
        var inputValArrLen = inputValArr.length;
        var inputValArrLast = inputValArr[inputValArrLen - 1];
        var inputValArrLastLen = inputValArrLast.length;
        var inputAdd = inputValArrLast.substring(1, inputValArrLastLen);
        var newDiv = document.createElement("h1");
        var newContent = document.createTextNode(inputAdd);
        newDiv.appendChild(newContent);
        output.insertBefore(newDiv, output.nextElementSibling);
    }

    function convertH1() {
        addElement();
    }

    document.body.addEventListener("keydown", function() {
        clearTimeout(timer);
        timer = setTimeout(convertH1, 1500);
    });

})();