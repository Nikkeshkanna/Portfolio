// Pages list for swipe navigation
const pages = ["index.html", "about.html", "projects.html", "skills.html", "contact.html"];
let currentPage = window.location.pathname.split("/").pop();
let index = pages.indexOf(currentPage);

// Swipe detection
let startX = 0;
document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 100) {
    // swipe left → next page
    index = (index + 1) % pages.length;
    window.location.href = pages[index];
  } else if (endX - startX > 100) {
    // swipe right → previous page
    index = (index - 1 + pages.length) % pages.length;
    window.location.href = pages[index];
  }
});

// Mouse scroll navigation (laptop trackpad two-finger swipe)
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    index = (index + 1) % pages.length;
  } else {
    index = (index - 1 + pages.length) % pages.length;
  }
  window.location.href = pages[index];
});

