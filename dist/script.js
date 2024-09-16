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

document.addEventListener("DOMContentLoaded", () => {
  // Any additional logic inside DOMContentLoaded can stay here
});



/**
 * Enable clients to send emails
 */
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `
        Full Name: ${fullName.value}<br>
        Email: ${email.value}<br>
        Message: ${mess.value}
    `;

  Email.send({
    SecureToken: "857f1dc5-b045-4f53-9108-605fdf60f734",
    To: "saadafmohsin@gmail.com",
    From: "saadafmohsin@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
    // Port: 2525
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully.",
        icon: "success",
      });
    }
  });
}

// execute this when user submits the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();

  setTimeout(() => {
    form.reset();
  }, 2500);
});
