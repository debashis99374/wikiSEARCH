import "./styles.css";

var searchInput = document.getElementById("inputt");
var form = document.getElementById("form");
var output = document.getElementById("app");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  geturlResults(searchInput.value);
});

function geturlResults(x) {
  var url = ` https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${x}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      var resultArrey = json.query.search;
      displayresults(resultArrey);
    });
}
function displayresults(myArrey) {
  output.innerHTML = "";
  output.insertAdjacentHTML(
    "beforeend",
    `<h2>Results for <i>${searchInput.value}</i></h2>`
  );
  myArrey.forEach((item) => {
    var itemTitle = item.title;
    var itemSnippet = item.snippet;
    var itemUrl = `‘https://en.wikipedia.org/wiki/${itemTitle}`;
    output.insertAdjacentHTML(
      "beforeend",
      `<div class="resultItem">
   <h3 class="resultTitle">
    <a href="${itemUrl}" target="_blank" rel="noopener">${itemTitle}</a>
   </h3>
   <p class="resultSnippet"><a href="${itemUrl}"  target="_blank" rel="noopener">
   ${itemSnippet}</a></p>
  </div>`
    );
  });
}
