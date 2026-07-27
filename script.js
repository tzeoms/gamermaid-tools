const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const button = document.getElementById("process");
const download = document.getElementById("download");


let image;


input.onchange = function(){

image = new Image();

image.src = URL.createObjectURL(
input.files[0]
);

image.onload = function(){

preview.src = image.src;

}

}



button.onclick=function(){

let canvas=document.createElement("canvas");

canvas.width=image.width*2;
canvas.height=image.height*2;


let ctx=canvas.getContext("2d");

ctx.drawImage(
image,
0,
0,
canvas.width,
canvas.height
);


download.href =
canvas.toDataURL();


download.download =
"gamermaid-upscaled.png";


download.style.display="inline";

}
