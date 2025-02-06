const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const emoji = document.getElementById('emoji');

noBtn.addEventListener('click', () => {
    alert("Oops! You can't say no to me! 😘💖");
});

yesBtn.addEventListener('click', () => {
    message.textContent = "Yay! You said yes! 😍";
    message.style.display = "block";  // Show the message
    emoji.style.display = "block";    // Show the emoji with animation
});
