// document.addEventListener("DOMContentLoaded", function () {
//   const faqItems = document.querySelectorAll(".js-button-expander");

//   faqItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       const faqItem = this.closest(".faq__item");

//       faqItem.classList.toggle("active");

//       const content = faqItem.querySelector(".js-expand-content");
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const faqTitles = document.querySelectorAll(".faq__subtitle");

//   faqTitles.forEach(function (title) {
//     title.addEventListener("click", function () {
//       title.classList.toggle("active");
//     });
//   });
// });

// Expander
expanderList = document.querySelectorAll(".js-button-expander");

$(".js-button-expander").click(function (e) {
  var expandParent = $(this).parent();
  var expandTarget = $(expandParent).children(".js-expand-content");
  var expandButton = $(expandParent).children(".js-button-expander");

  for (var i = 0; i < expanderList.length; i++) {
    if (expanderList[i] == this) {
      for (var j = 0; j < expandTarget.length; j++) {
        if ($(expandTarget[j]).hasClass("expanded")) {
          $(expandParent).removeClass("active");
          $(expandTarget[j]).removeClass("expanded");
          $(expandButton).removeClass("active");
          $(expandTarget[j]).slideUp();
        } else {
          $(expandParent).addClass("active");
          $(expandButton).addClass("active");
          $(expandTarget[j]).addClass("expanded");
          $(expandTarget[j]).slideDown();
        }
      }
    }
  }
});


