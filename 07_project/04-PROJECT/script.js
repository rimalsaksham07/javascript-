let intervalID = null; // Initialize as null

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) { // Added 'let' for 'i' to avoid global variable issues
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
 
document.querySelector('#start').addEventListener('click', function () {
  if (!intervalID) { // Prevent multiple intervals
    intervalID = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(intervalID);
  intervalID = null; // Reset the interval ID
});

