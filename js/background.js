const images = ["img01.jpeg","img02.jpeg","img03.jpeg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `images/${chosenImage}`;

document.body.appendChild(image);