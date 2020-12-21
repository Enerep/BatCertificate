console.log("Debugging");
// Reading from a local .txt extension file

var output = document.getElementById("output");

$("a").on("click", function (e) {
  e.preventDefault();
  $.ajax(this.href).done(function(data) {
    output.textContent = data;
  });
});