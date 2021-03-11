var hamburger = $(".fas.fa-bars");
var cross = $(".fas.fa-times");
var burgerList = $(".hamburger-menu");

hamburger.click(function() {
  burgerList.addClass("active");
});

cross.click(function() {
  burgerList.removeClass("active");
});
