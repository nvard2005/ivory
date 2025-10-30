 const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
  // Default active: About Us
  document.querySelector("nav ul li a").classList.add("active");