document.addEventListener("DOMContentLoaded", function() {
    var progressSpans = document.querySelectorAll(".the-progress span");
    progressSpans.forEach(function(span) {
      var width = span.getAttribute("data-width");
      span.style.width = width;
    });
  });
  