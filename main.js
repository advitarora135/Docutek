var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var color = "black";
var width_of_line = 0;
var locked = false;

textarea.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    //color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";
    ctx.textarea = color;
    ctx.lineWidth = width_of_line;
}