//main file
var dark = document.querySelector("nav div#right #dark-mode");
dark.onclick = function () {
  const slider = document.querySelector("nav div#right ul#slider");
  slider.style.visibility =
    slider.style.visibility === "hidden" || slider.style.visibility === ""
      ? "visible"
      : "hidden";
};

document.querySelector("nav div#right ul#slider li:first-child").onclick =
  function () {
    document.querySelector(
      "nav div#right ul#slider,nav div#right ul#slider li"
    ).style.visibility = "hidden";

    if (document.querySelector("body").style.backgroundColor !== "black") {
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("main #reviews").style.color = "white";
      document.querySelector("main #easy").style.color = "white";
      dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-moon-fill"
        viewBox="0 0 16 16">
        <path
            d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
    </svg>`;
    }
  };

document.querySelector("nav div#right ul#slider li:nth-child(2)").onclick =
  function () {
    document.querySelector("nav div#right ul#slider").style.visibility =
      "hidden";

    if (document.querySelector("body").style.backgroundColor !== "white") {
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("main #reviews").style.color = "black";
      document.querySelector("main #easy").style.color = "black";
      dark.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg> `;
    }
  };
window.onload = function () {
  const saved = localStorage.getItem("bgcolor");
  document.documentElement.style.setProperty("--default", saved);
};
var customize = document.querySelector("header #settings");
customize.onclick = function () {
  document.querySelector("header #right_slide").style.visibility = "visible";
  customize.style.visibility = "hidden";
  document.querySelector("header #right_slide  #yellow").onclick = function () {
    document.documentElement.style.setProperty("--default", "#F9C265");
    localStorage.setItem("bgcolor", "#F9C265");
    for (x of document.querySelectorAll("header #right_slide .cus_cont")) {
      x.style.backgroundColor = "white";
    }
    document.querySelector(
      "header #right_slide  #yellow"
    ).style.backgroundColor = "gray";
  };
  document.querySelector("header #right_slide  #green1").onclick = function () {
    localStorage.setItem("bgcolor", "green");
    document.documentElement.style.setProperty("--default", "green");
    for (x of document.querySelectorAll("header #right_slide .cus_cont")) {
      x.style.backgroundColor = "white";
    }
    document.querySelector(
      "header #right_slide  #green1"
    ).style.backgroundColor = "gray";
  };
  document.querySelector("header #right_slide  #blue1").onclick = function () {
    localStorage.setItem("bgcolor", "blue");
    document.documentElement.style.setProperty("--default", "blue");

    for (x of document.querySelectorAll("header #right_slide .cus_cont")) {
      x.style.backgroundColor = "white";
    }
    document.querySelector(
      "header #right_slide  #blue1"
    ).style.backgroundColor = "gray";
  };
  document.querySelector("header #right_slide  #red1").onclick = function () {
    localStorage.setItem("bgcolor", "red");
    document.documentElement.style.setProperty("--default", "red");
    for (x of document.querySelectorAll("header #right_slide .cus_cont")) {
      x.style.backgroundColor = "white";
      document.querySelector(
        "header #right_slide  #red1"
      ).style.backgroundColor = "gray";
    }
  };
};
document.querySelector("header #xbtn").onclick = function () {
  document.querySelector("header #right_slide").style.visibility = "hidden";
  customize.style.visibility = "visible";
};

document.querySelector("#ham-icon").onclick = function () {
  const hamMenu = document.querySelector("#ham-menu");
  const theBox = document.querySelector("div#the-box");
  hamMenu.classList.toggle("show");
  theBox.style.display = "block";

  theBox.onclick = function () {
    hamMenu.classList.remove("show");
    theBox.style.display = "none";
  };
};

const reviews = document.querySelector("#reviews");
const reviewItems = document.querySelectorAll("#reviews .review");
const reviewCount = reviewItems.length;
let index = 0;

function autoSlide() {
  if (window.innerWidth <= 1024) {
    index = (index + 1) % reviewCount;
    reviews.style.transform = `translateX(-${index * 95}%)`;
  } else {
    reviews.style.transform = "translateX(0)";
  }
}

setInterval(autoSlide, 2000);
