function Result() {
    var x1 = parseFloat(document.getElementById("x1").value);
    var y1 = parseFloat(document.getElementById("y1").value);
    var x2 = parseFloat(document.getElementById("x2").value);
    var y2 = parseFloat(document.getElementById("y2").value);
    var result = getDistancePoint(x1, y1, x2, y2);
    document.getElementById("Result").innerText = "Result: " + result.toFixed(2);
}

function getDistancePoint(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

}

