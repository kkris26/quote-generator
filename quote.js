$(".button").click(function () {
  var textContent = document.querySelector("#quoteText");
  var authorName = document.querySelector("#authorText");
  $.ajax({
    method: "GET",
    url: "https://api.quotable.io/random?maxLength=150&tags=love",
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
