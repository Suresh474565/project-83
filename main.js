var last_x, last_y;

canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "white";
line_width = 1;

var width = screen.width;


new_width = screen.width - 70;
new_height = screen.height - 250;

if (width < 992) {

    document.getElementById("mycanvas").width = new_width;
    document.getElementById("mycanvas").heigth = new_height;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {

    color = document.getElementById("color").value;
    line_width = document.getElementById("line_width").value;


    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    console.log("my_touchmove");


    cur_x_pos = e.touches[0].clientX - canvas.offsetLeft;
    cur_y_pos = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.line_width = line_width;

    console.log("Last position of X and Y =");
    console.log("X = " + last_x + "Y = " + last_y);
    ctx.moveTo(last_x, last_y);

    console.log("Current position of X and Y =");
    console.log("X = " + cur_x_pos + "Y = " + cur_y_pos);
    ctx.lineTo(cur_x_pos, cur_y_pos);
    ctx.stroke();

    last_x = cur_x_pos;
    last_y = cur_y_pos;


}

mouse_event = "";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

color=document.getElementById("color").value;
line_width=document.getElementById("line_width").value;


mouse_event = "mousedown";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{

cur_x_pos = e.clientX - canvas.offsetLeft;
cur_y_pos = e.clientY - canvas.offsetTop;

if (mouse_event == "mousedown")

{

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.line_width = line_width;

console.log("Last position of X and Y =");
console.log("X = "+ last_x + "Y = "+ last_y);
ctx.moveTo(last_x, last_y);

console.log("Current position of X and Y =");
console.log("X = "+ cur_x_pos + "Y = "+ cur_y_pos);
ctx.lineTo(cur_x_pos, cur_y_pos );
ctx.stroke()

}

last_x = cur_x_pos;
last_y = cur_y_pos;

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{

mouse_event = "mouseup";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{

mouse_event = "mouseleave";

}






function clearArea()

{

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}

