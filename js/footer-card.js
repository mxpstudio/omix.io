document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY >= documentHeight - 60) {
      footer.classList.add("show-bottom");
    } else {
      footer.classList.remove("show-bottom");
    }
  });
});