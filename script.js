// Get references to the previous and next buttons and product cards
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const productCards = document.querySelectorAll(".product-card");


//sinin signup buttons
const signinBtn = document.getElementById("SigninBtn");
const signupBtn = document.getElementById("SignupBtn");

// Initialize the current card index
let currentCardIndex = 0;

// Function to show the current card
function showCard(index) {
    productCards.forEach((card, i) => {
        if (i === index) {
            card.style.display = "none";
        } else {
            
            card.style.display = "block";
        }
    });
}

// Initially show the first card
showCard(currentCardIndex);

// Event listener for the "Previous" button
prevButton.addEventListener("click", () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showCard(currentCardIndex);
    }
});

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
    if (currentCardIndex < productCards.length - 1) {
        currentCardIndex++;
        showCard(currentCardIndex);
    }
});

signinBtn.addEventListener("click",()=>{
    window.location.href="./signin-up.html";
});
signupBtn.addEventListener("click",()=>{
    window.location.href="./signin-up.html";
});