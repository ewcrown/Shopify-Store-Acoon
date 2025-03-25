const sliders = document.querySelectorAll('.splide');

sliders.forEach(slider => {

  const sliderName = slider.dataset.name

  if (sliderName == 'Collection Slider') {
    new Splide(slider, {
      type: 'loop',
      perPage: 4,
      perMove: 1,
      gap: 10,
      autoplay: false,
      interval: 3000,
      arrows: false,
      pagination: true,
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 }
      }
    }).mount();
  } else if (sliderName == 'Featured Video Tabs') {
    const splide = new Splide(slider, {
      type: "slide",
      focus: "center",
      perPage: 1,
      padding: "10rem",
      perMove: 1,
      gap: "1rem",
      arrows: false, // ❌ Disable default arrows
      pagination: false, // ❌ Disable default pagination
    });

    const blocks = slider.querySelectorAll(".splide__slide");

    // Create pagination container
    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("ew-featured-tabs-pagination", "page-width");

    // Create inner pagination wrapper
    const paginationInner = document.createElement("div");
    paginationInner.classList.add("ew-featured-tabs-pagination-inner");

    // Append inner container inside main pagination container
    paginationContainer.appendChild(paginationInner);

    // Insert pagination container after the slider
    slider.insertAdjacentElement("afterend", paginationContainer);

    // Create navigation arrows container
    const navWrapper = document.createElement("div");
    navWrapper.classList.add("ew-featured-tabs-arrows", "page-width");

    // Create inner wrapper for arrows
    const navInner = document.createElement("div");
    navInner.classList.add("ew-featured-tabs-arrows-inner");

    // Create previous and next buttons
    const prevButton = document.createElement("button");
    prevButton.classList.add("ew-featured-tabs-prev");
    prevButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
    <path d="M11 1.5L2 10L11 18.5" stroke="black" stroke-width="1.5"/></svg>`;

    const nextButton = document.createElement("button");
    nextButton.classList.add("ew-featured-tabs-next");
    nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
      <path d="M1 1.5L10 10L1 18.5" stroke="black" stroke-width="1.5"/>
    </svg>`;

    // Append buttons to inner wrapper
    navInner.appendChild(prevButton);
    navInner.appendChild(nextButton);

    // Append inner wrapper to main arrows wrapper
    navWrapper.appendChild(navInner);

    // Insert custom arrows before the pagination container
    paginationContainer.insertAdjacentElement("beforebegin", navWrapper);

    // Handle pagination
    splide.on("mounted move", function () {
      paginationInner.innerHTML = ""; // Clear existing pagination
      blocks.forEach((block, index) => {
        const title = block.dataset.title || `Slide ${index + 1}`;
        const button = document.createElement("button");
        button.textContent = title;
        button.classList.add("page-btn");
        if (splide.index === index) {
          button.classList.add("active");
        }
        button.addEventListener("click", () => splide.go(index));
        paginationInner.appendChild(button);
      });

      // Disable arrows if needed
      updateArrowStates();
    });

    // Custom arrow functionality
    prevButton.addEventListener("click", () => splide.go("<"));
    nextButton.addEventListener("click", () => splide.go(">"));

    // Disable arrows based on current position
    function updateArrowStates() {
      prevButton.disabled = splide.index === 0;
      nextButton.disabled = splide.index === splide.length - 1;
    }

    // Start from the 2nd slide
    splide.on("mounted", function () {
      splide.go(1);
    });

    splide.mount();


  } else {
    new Splide(slider, {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '1rem',
      padding: '5rem',
      autoplay: true,
      interval: 3000,
      arrows: true,
      pagination: true,
      breakpoints: {
        1024: { perPage: 2, padding: '2rem' },
        768: { perPage: 1, padding: '1rem' }
      }
    }).mount();
  }

});