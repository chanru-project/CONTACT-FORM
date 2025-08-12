document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  }
});