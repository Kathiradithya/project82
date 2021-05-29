canvas
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color - document.getElementById("color").value;
width_of_line - document.getElementById("width_of_line").value;
radius - document.getElementById("radius").value;
mouseEvent - "mouseDown";
} 
function my_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y - e.clienty - canvas.offsetTop;
if (mouseEvent -- "mouseDown") {
console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " +
current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle - color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,
2 * Math.PI);
ctx.stroke();
}}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);}
    canvas.addEventListener("mouseup", my_mouseup);
     function my_mouseup(e){ mouse_event = "mouseUP"; }
      canvas.addEventListener("mouseleave", my_mouseleave);
       function my_mouseleave(e) { mouse_event = "mouseleave"}
