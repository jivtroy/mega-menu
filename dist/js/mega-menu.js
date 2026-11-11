/*! 
 * Mega Menu v1.0.0
 * Homepage (https://github.com/jivtroy/mega-menu)
 * Copyright Jiv Troy
 * License: MIT
 */
document.addEventListener("DOMContentLoaded", function() {
  const e = document.querySelectorAll(".mega-menu");
  e.length && e.forEach((n) => {
    n.addEventListener("click", function(t) {
      t.stopPropagation();
    });
  });
});
