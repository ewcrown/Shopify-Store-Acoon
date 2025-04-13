const splashWrapper = document.getElementById('ew-splash-intro');
const splashImage = splashWrapper.querySelector('img');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const fadeOutEnd = 300;
  const opacity = 1 - Math.min(scrollY / fadeOutEnd, 1);
  const translateY = Math.min(scrollY / 2, 150);
  splashImage.style.opacity = opacity;
  splashImage.style.transform = `translateY(-${translateY}px)`;
  const splashHeight = splashWrapper.offsetHeight;
  if (scrollY > splashHeight) {
    splashWrapper.style.display = 'none';
  }
});