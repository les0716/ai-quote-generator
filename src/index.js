function generateQuote(event) {
  alert("generating quote");
}

let quoteContent = document.querySelector("#quote-content");
quoteContent.addEventListener("submit", generateQuote);
