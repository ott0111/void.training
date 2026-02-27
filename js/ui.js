// js/ui.js
(function () {
  // Highlight active nav link
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Mobile toggle (optional)
  const btn = document.querySelector("[data-nav-toggle]");
  const sidebar = document.querySelector(".sidebar");
  if (btn && sidebar) {
    btn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Close sidebar when clicking a link on mobile
  document.querySelectorAll(".nav a").forEach(a => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 980) sidebar?.classList.remove("open");
    });
  });
})();
