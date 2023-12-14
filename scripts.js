document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offset = 70; // Puedes ajustar esta altura según tus necesidades
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetPosition - offset,
          behavior: "smooth",
        });
      }
    });
  });
  //color active
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      links.forEach((item) => {
        item.classList.remove("navClicked");
      });
      this.classList.add("navClicked");
    });
  });

  function handleScroll() {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70;
      const sectionId = section.getAttribute("id");
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + section.offsetHeight
      ) {
        links.forEach((link) => {
          link.classList.remove("navClicked");
        });
        const correspondingLink = document.querySelector(
          `.link[href="#${sectionId}"]`
        );
        if (correspondingLink) {
          correspondingLink.classList.add("navClicked");
        }
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});
