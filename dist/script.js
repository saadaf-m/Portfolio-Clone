// console.log(copyEmail);

/**
 * Sticky navbar
 */
// when the user scrolls the page, execute runSticky
window.onscroll = function () {
    runSticky();
  };
  
  var navbar = document.getElementById("nav-ul");
  
  // get the offset position of the navbar
  var sticky = navbar.offsetTop;
  
  // add the sticky class to the navbar when you reach its scroll position.
  function runSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      // remove "sticky" when you leave the scroll position
    } else {
      navbar.classList.remove("sticky");
    }
  }



  // Move copyEmail outside the DOMContentLoaded function so it's globally accessible
  async function copyEmail() {
    const navEmailElement = document.getElementById("nav-email");
    const navEmailValue = navEmailElement.innerText;

    try {
      await navigator.clipboard.writeText(navEmailValue);
      navEmailElement.innerText = "Copied!";
      setTimeout(() => {
        navEmailElement.innerText = "saadafmohsin@gmail.com";
        navEmailElement.blur();
      }, 999);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Any additional logic inside DOMContentLoaded can stay here
  });