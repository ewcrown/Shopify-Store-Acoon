// FAQs
const faqs = document.querySelectorAll('[data-faqs]')
if (faqs.length > 0) {
  faqs.forEach((faq) => {
    faq.querySelectorAll(".ew-faq-question").forEach(button => {
      button.addEventListener("click", function () {
        const item = this.parentElement;
        item.classList.toggle("active");
      });
    });
  })
}