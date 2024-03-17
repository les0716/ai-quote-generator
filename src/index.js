function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote-container", {
    strings:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.-Nelson Mandelau",
    autoStart: true,
    delay: 0.1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-content");
quoteFormElement.addEventListener("submit", generateQuote);
