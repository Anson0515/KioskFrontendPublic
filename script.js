document.addEventListener("DOMContentLoaded", () => {
  const fnbButton = document.getElementById("fnbButton");
  const ticketButton = document.getElementById("ticketButton");
  const messageDisplay = document.getElementById("message");

  fnbButton.addEventListener("click", () => {
    messageDisplay.textContent = "You selected Food & Drinks. Redirecting...";
    alert("Navigating to Food & Drinks section!"); // In a real app, you'd navigate
  });

  ticketButton.addEventListener("click", () => {
    messageDisplay.textContent = "You selected Ticket Booking. Redirecting...";
    alert("Navigating to Ticket Booking section!"); // In a real app, you'd navigate
  });
});
