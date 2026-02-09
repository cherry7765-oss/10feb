const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const question = document.getElementById("question");
const music = document.getElementById("bgMusic");

// Move No button randomly inside the white box
noBtn.addEventListener("mouseenter", () => {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const maxX = containerWidth - noBtn.offsetWidth;
    const maxY = containerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Yes button click
yesBtn.addEventListener("click", () => {

    // Play music
    music.play();

    // Confetti
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });

    // Change text
    question.innerHTML = "YAY! Can't wait, Nedhi! 🥰";

    // Show GIF
    const buttonsContainer = document.querySelector(".buttons");
    buttonsContainer.innerHTML = `
        <div style="margin-top: 20px;">
            <img src="https://media.giphy.com/media/MDJ9IbM3vuzAbpG7bO/giphy.gif" 
                 alt="Cute Cat" 
                 style="width: 200px; border-radius: 10px;">
            <h2 style="color: #ff4d6d; margin-top: 15px;">Happy Valentine's Day ❤️</h2>
        </div>
    `;

    // Hide No button
    noBtn.style.display = "none";
});
