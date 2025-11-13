/* -- HERO SECTION -- */
/* ------ PRE ORDER BUTTON ------ */
const showModal = document.getElementById("modal");
const topBar = document.getElementById("top-bar");
const bottomBar = document.getElementById("bottom-bar");
const closeModalBtn = document.getElementById("close-modal--button");

function preOrder() {
  showModal.classList.remove("hide-modal");

  gsap.set("#modal", { x: "100%" });

  const openModalTL = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  openModalTL
    .to("#modal", { x: "0", duration: 1 })
    .to(topBar, { rotate: 45, duration: 0.6 })
    .to(bottomBar, { rotate: -45, duration: 0.6 }, "<")
    .to(closeModalBtn, { rotate: 360, duration: 0.8 }, "<0.5");
}

/* ------ CLOSE MODAL BUTTON ------ */
function closeModal() {
  const closeModalTL = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  closeModalTL
    .to(closeModalBtn, { rotate: 0, duration: 0.8 })
    .to(topBar, { rotate: 0, duration: 0.6 })
    .to(bottomBar, { rotate: 0, duration: 0.6 }, "<")
    .to("#modal", {
      x: "100%",
      duration: 1,
      onComplete: () => showModal.classList.add("hide-modal"),
    });
}

/* ------ HERO SECTION GSAP ANIMATIONS ------ */
gsap.set("#hero-image--container", { perspective: 500 });

let heroTimeline = gsap.timeline({
  defaults: { opacity: 0, duration: 0.7, ease: "power2.In" },
});

heroTimeline
  .from("#hero-title", {
    y: -50,
  })
  .from("#hero-image", {
    scale: 1,
    rotationY: 45,
    x: 5,
    y: 10,
  })
  .from(
    "#radial-gradient",
    {
      scale: 0,
    },
    ">-.7"
  )
  .from("#hero-button", {
    y: 50,
  });

/* --- STORY SECTION --- */
