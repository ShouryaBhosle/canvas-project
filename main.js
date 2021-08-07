canvas = document.getElementById("myCanvas");
color = "blue";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = color;
ctx.lineWidth = 2;
ctx.rec(250 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "black";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = color;
ctx.lineWidth = 2;
ctx.rec(350 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "red";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = color;
ctx.lineWidth = 2;
ctx.rec(450 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = color;
ctx.lineWidth = 2;
ctx.rec(550 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

color = "green";
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.stokeStyle = color;
ctx.lineWidth = 2;
ctx.rec(650 ,40 ,0 , 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = "+ mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.stokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
    ctx.stroke();
}