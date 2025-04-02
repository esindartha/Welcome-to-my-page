// Function to toggle accordion content visibility
function toggleAccordion(contentId) {
  const content = document.getElementById(contentId);
  
  // Toggle the display between 'none' (hidden) and 'block' (visible)
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
