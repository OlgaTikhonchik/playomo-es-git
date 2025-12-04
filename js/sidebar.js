

// document.addEventListener("DOMContentLoaded", function () {
  
//   // page-nav
//   const button2 = document.querySelector(".menu__review-content");
//   const list2 = document.querySelector(".menu__review-list");

//   if (button2 && list2) {
//     console.log("Button 2 and List 2 found");
//     list2.style.overflow = "hidden";
//     list2.style.maxHeight = "0";
//     list2.style.transition = "max-height 0.5s ease";

//     button2.addEventListener("click", function () {
//       const isActive = list2.classList.contains("active");
//       console.log("List 2 active:", isActive);

//       if (isActive) {
//         list2.style.maxHeight = "0";
//       } else {
//         list2.style.maxHeight = `${list2.scrollHeight}px`;
//       }

//       list2.classList.toggle("active", !isActive);
//       button2.classList.toggle("active", !isActive);
//     });
//   } else {
//     console.log("Button 2 or List 2 not found");
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  // sidebar
  const button2 = document.querySelector(".menu__review-desk");
  const list2 = document.querySelector(".menu__review");

  if (button2 && list2) {
    console.log("Button 2 and List 2 found");
    list2.style.overflow = "hidden";
    list2.style.transition = "max-height 0.5s ease";

    list2.classList.add("active");
    button2.classList.add("active");
    list2.style.maxHeight = `${list2.scrollHeight}px`;

    button2.addEventListener("click", function () {
      const isActive = list2.classList.contains("active");
      console.log("List 2 active:", isActive);

      if (isActive) {
        list2.style.maxHeight = "0";
      } else {
        list2.style.maxHeight = `${list2.scrollHeight}px`;
      }

      list2.classList.toggle("active", !isActive);
      button2.classList.toggle("active", !isActive);
    });
     window.addEventListener("resize", function () {
    if (list2.classList.contains("active")) {
      list2.style.maxHeight = `${list2.scrollHeight}px`;
    }
  });
  } else {
    console.log("Button 2 or List 2 not found");
  }
});
// document.addEventListener("DOMContentLoaded", function () {
//   const button2 = document.querySelector(".menu__review-content");
//   const list2 = document.querySelector(".menu__review-list");

//   if (button2 && list2) {
//     console.log("Button 2 and List 2 found");

//     list2.style.overflow = "hidden";
//     list2.style.maxHeight = "0";
//     list2.style.transition = "max-height 0.5s ease";

//     button2.addEventListener("click", function () {
//       const isActive = list2.classList.contains("active");
//       console.log("List 2 active:", isActive);

//       if (isActive) {
//         list2.style.maxHeight = "0";
//         list2.classList.remove("active");
//         button2.classList.remove("active");
//       } else {
//         list2.style.maxHeight = "none";
//         const scrollHeight = list2.scrollHeight;
//         list2.style.maxHeight = "0";
//         requestAnimationFrame(() => {
//           list2.style.maxHeight = `${scrollHeight}px`;
//         });

//         list2.classList.add("active");
//         button2.classList.add("active");
//       }
//     });

    

//     window.addEventListener("resize", function () {
//       if (list2.classList.contains("active")) {
//         list2.style.maxHeight = `${list2.scrollHeight}px`;
//       }
//     });

//   } else {
//     console.log("Button 2 or List 2 not found");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const button2 = document.querySelector(".menu__review-content");
  const list2 = document.querySelector(".menu__review-list");

  if (button2 && list2) {
    console.log("Button 2 and List 2 found");

    list2.style.overflow = "hidden";
    list2.style.maxHeight = "0";
    list2.style.transition = "max-height 0.5s ease";

    button2.addEventListener("click", function () {
      const isActive = list2.classList.contains("active");
      console.log("List 2 active:", isActive);

      if (isActive) {
        list2.style.maxHeight = "0";
        list2.classList.remove("active");
        button2.classList.remove("active");
      } else {
        const scrollHeight = list2.scrollHeight;
        list2.style.maxHeight = `${scrollHeight}px`;
        list2.classList.add("active");
        button2.classList.add("active");
      }
    });

    // Пересчёт при ресайзе
    window.addEventListener("resize", function () {
      if (list2.classList.contains("active")) {
        list2.style.maxHeight = `${list2.scrollHeight}px`;
      }
    });

    // Пересчёт при изменении контента
    const observer = new MutationObserver(() => {
      if (list2.classList.contains("active")) {
        list2.style.maxHeight = `${list2.scrollHeight}px`;
      }
    });

    observer.observe(list2, { childList: true, subtree: true, characterData: true });
  } else {
    console.log("Button 2 or List 2 not found");
  }
});
