/* -- HERO SECTION -- */
/* ------ PRE ORDER BUTTON ------ */
const preOrderModal = document.getElementById("pre-order--modal");
const topBar = document.getElementById("top-bar");
const bottomBar = document.getElementById("bottom-bar");
const closeModalBtn = document.getElementById("close-modal--button");

function preOrder() {
  preOrderModal.classList.remove("hide-modal");

  gsap.set(preOrderModal, { x: "100%" });

  const openModalTL = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  openModalTL
    .to(preOrderModal, { x: "0", duration: 1 })
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
    .to(preOrderModal, {
      x: "100%",
      duration: 1,
      onComplete: () => preOrderModal.classList.add("hide-modal"),
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
/* ------ GSAP PARALLAX ------ */
const elements = document.querySelectorAll(".story-section > div");
gsap.registerPlugin(ScrollTrigger);

elements.forEach((el) => {
  gsap.to(el, {
    yPercent: -10,
    scale: 0.8,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});

/* ------ LEARN MORE BUTTON ------ */
const learnMoreBtn = document.querySelectorAll(".story-section--button");
const countdown = document.getElementById("countdown");
const learnMoreModal = document.getElementById("learn-more--modal");

learnMoreBtn.forEach((btn) => {
  function openLearnMoreModal() {
    learnMoreModal.classList.remove("hide-modal");

    gsap.set(learnMoreModal, { x: "100%" });
    gsap.to(learnMoreModal, { x: "0", duration: 1, ease: "power2.InOut" });
  }

  function closeLearnMoreModal() {
    gsap.to(learnMoreModal, {
      x: "100%",
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        learnMoreModal.classList.add("hide-modal");
      },
    });
  }

  function startCountdown(seconds, callback) {
    let timeLeft = seconds;
    countdown.innerText = `${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;

    const interval = setInterval(() => {
      timeLeft--;
      countdown.innerText = `${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;

      if (timeLeft <= 0) {
        clearInterval(interval);
        callback();
      }
    }, 1000);
  }

  btn.addEventListener("click", () => {
    openLearnMoreModal();

    startCountdown(5, () => {
      closeLearnMoreModal();
    });
  });
});

/* --- LAUNCH SECTION --- */
const launchCountdownContainer = document.getElementById(
  "launch-countdown--container"
);

const countdownArray = [
  { text: "Years", number: 10 },
  { text: "Months", number: 11 },
  { text: "Days", number: 25 },
  { text: "Hours", number: 16 },
];

countdownArray.forEach((countdown, index) => {
  const countdownBox = document.createElement("div");
  const timerText = document.createElement("div");
  const timerBox = document.createElement("span");

  countdownBox.classList.add("countdown-box");
  timerBox.classList.add("timer-box");
  timerText.classList.add("timer-text");

  timerBox.textContent = countdown.number;
  timerText.textContent = countdown.text;

  countdownBox.append(timerBox);
  countdownBox.append(timerText);
  launchCountdownContainer.append(countdownBox);
});
