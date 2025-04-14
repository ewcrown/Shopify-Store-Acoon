const filterButton = document.querySelector("[data-filter-button]");
const filterBlock = document.querySelector("#main-collection-filters");
const gridBlock = document.querySelector("#ProductGridContainer");

if (filterButton && filterBlock && gridBlock) {
  filterButton.addEventListener("click", (e) => {
    e.preventDefault();

    const isArabic = window.location.pathname === "/ar" ? "rtl" : "ltr";

    const isHiding = filterBlock.classList.contains("is-hiding");

    if (!isHiding) {
      // Start fade + slide
      filterBlock.classList.add("is-hiding");

      setTimeout(() => {
        filterBlock.classList.add("is-hidden");
      }, 50);
    } else {
      filterBlock.classList.remove("is-hidden");

      // force reflow to restart transition
      void filterBlock.offsetWidth;

      filterBlock.classList.remove("is-hiding");
    }

    if (isArabic) {
      filterButton.querySelector("span").textContent = isHiding
        ? "إخفاء عوامل التصفية"
        : "إظهار عوامل التصفية";
    } else {
      filterButton.querySelector("span").textContent = isHiding
        ? "Hide Filters"
        : "Show Filters";
    }
  });
}
