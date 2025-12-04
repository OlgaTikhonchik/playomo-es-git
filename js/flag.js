

document.addEventListener("DOMContentLoaded", function () {
  const flagButton = document.querySelector(".header__country");
  const flagMenu = document.querySelector(".header__flag-menu");
  const closeButton = document.querySelector(".button__close");

  if (!flagButton || !flagMenu || !closeButton) {
    console.log("Елементи не знайдені!");
    return;
  }

  // Відкриття меню при натисканні на кнопку
  flagButton.addEventListener("click", function (event) {
    event.preventDefault();
    flagMenu.classList.toggle("active");
    flagButton.classList.toggle("active");
    console.log("Меню стан:", flagMenu.classList.contains("active"));
  });

  // Закриття меню при натисканні на кнопку "x"
  closeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    flagMenu.classList.remove("active");
    flagButton.classList.remove("active");
    console.log("Меню закрито кнопкою");
  });

  // Закриття меню при натисканні поза межами
  document.addEventListener("click", function (event) {
    if (!flagButton.contains(event.target) && !flagMenu.contains(event.target)) {
      flagMenu.classList.remove("active");
      flagButton.classList.remove("active");
      console.log("Меню закрито");
    }
  });
});

