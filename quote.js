$(".button").click(function () {
  var textContent = document.querySelector("#quoteText");
  var authorName = document.querySelector("#authorText");
  $.ajax({
    method: "GET",
    url: "https://api.quotable.io/random?minLength=50&maxLength=200&tags=love",
    success: function (result) {
      console.log(result["content"]);
      textContent.innerHTML =
        "<i class='bx bxs-quote-alt-left'></i> " +
        result["content"] +
        " <i class='bx bxs-quote-alt-right' ></i>";
      authorName.innerHTML = "by " + result["author"];
    },
  });
});
