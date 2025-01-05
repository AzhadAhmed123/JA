const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  // Update the dot's position instantly
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
  cursorDot.style.right = `${e.clientX}px`;
  cursorDot.style.bottom = `${e.clientY}px`;

  // Use a timeout to create a slight delay for the outer circle
  setTimeout(() => {
    cursorCircle.style.left = `${e.clientX}px`;
    cursorCircle.style.top = `${e.clientY}px`;
    cursorCircle.style.right = `${e.clientX}px`;
    cursorCircle.style.bottom = `${e.clientY}px`;
  }, 50); // Adjust delay (ms) to control how much lag the circle has
});

// Add hover effect on links and buttons
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorCircle.style.width = "80px";
    cursorCircle.style.height = "80px";
    cursorCircle.style.opacity = "0.5"; // Increase opacity on hover
    pointer = "none";
  });
  element.addEventListener("mouseleave", () => {
    cursorCircle.style.width = "45px";
    cursorCircle.style.height = "45px";
    cursorCircle.style.opacity = "0.3"; // Restore opacity
  });
});
