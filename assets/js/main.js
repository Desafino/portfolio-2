(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const triggerBtn = document.querySelectorAll(".menu-band");

    triggerBtn.forEach((btnList) => {
      btnList.addEventListener("click", function(e) {
        // console.log(this);
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          this.nextElementSibling.classList.remove("open");
        } else {
          removeActive();
          removeOpen();
          scrollTop();
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("open");
        }
      });
    });

    function removeActive() {
      const active = document.querySelectorAll(".active");

      active.forEach((haveActive) => {
        haveActive.classList.remove("active");
      });
    }

    function removeOpen() {
      const open = document.querySelectorAll(".open");

      open.forEach((haveOpen) => {
        haveOpen.classList.remove("open");
      });
    }

    function scrollTop() {
      const move = gsap.to(triggerBtn, {
        duration: 0.5,
        paused: true,
        ease: "power2.out",
        top: 0,
      });
    }
  });
})();
