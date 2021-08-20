const morningImg =["Dome_morning.jpg", "Peak_morning.jpg", "Valley_morning.jpg", "Tree_morning.jpg"];
const nightImg = ["Dome_night.jpg", "Peak_night.jpg", "Valley_night.jpg", "Tree_night.jpg"];

const randomImg = morningImg[Math.floor(Math.random() * morningImg.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);