const adminLinks = document.querySelectorAll(".admin-nav a");

adminLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    adminLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
