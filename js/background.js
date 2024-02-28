const images = [
    "1.jpg", 
    "2.jpg", 
    "3.jpg", 
    "4.jpg", 
    "5.jpg", 
    "6.jpg", 
    "7.jpg"
]

const selectImage = images[Math.floor(Math.random()*images.length)]
const body = document.querySelector("body"); 

const img = document.createElement("img");
img.id = "bgImage";  
img.setAttribute("src", `images/${selectImage}`);
body.appendChild(img); 

