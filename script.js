// Select the elements
const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector("nav ul");

// Function to toggle the navigation menu

// Add a click event listener to the hamburger icon
if (hamburger && navUl) {
    hamburger.addEventListener("click", toggleNav);
}
function toggleNav() {
    console.log("Toggle Nav Function Called"); // Add this line
    navUl.classList.toggle("show");
}
