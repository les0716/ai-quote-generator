function displayQuote(response) {
  new Typewriter("#quote-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let submitInput = document.querySelector("#submit-input");
  let prompt = `user instrugtions: generate a quote about ${submitInput.value}`;
  let context =
    "you are a talented motivational quote generator. Please generate short quotes in basic HTML. Make sure to follo users instructions. sign with SheCodes AI at the end of the quote in <strong> element ";
  let apiKey = "a54e0e42t68cb050731e3eo2f4afcbca";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayQuote);
  console.log("generating quote");
}

let quoteFormElement = document.querySelector("#quote-content");
quoteFormElement.addEventListener("submit", generateQuote);
