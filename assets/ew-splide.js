const sliders = document.querySelectorAll('.splide');

sliders.forEach(slider => {

  const sliderName = slider.dataset.name

  if (sliderName == 'Collection Slider') {
    new Splide(slider, {
      type: 'loop',
      perPage: 4,
      perMove: 1,
      gap: 10,
      autoplay: true,
      interval: 3000,
      arrows: false,
      pagination: true,
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 }
      }
    }).mount();
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