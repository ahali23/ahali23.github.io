/* ============================================================
   script.js - shared by index.html and contact.html
   ============================================================ */

/* ---- 1. EMAIL: change your university email in ONE place ---- */
const UNIVERSITY_EMAIL = "ahali23@cit.just.edu.jo";

document.querySelectorAll("[data-email-link]").forEach(function (link) {
  link.href = "mailto:" + UNIVERSITY_EMAIL;
});

/* ---- 2. Mobile menu toggle ---- */
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-links");
toggle.addEventListener("click", function () {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

/* ---- 3. Contact form validation (only runs on contact.html) ---- */
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the browser from submitting

    // trim() makes whitespace-only input count as empty
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value.trim();
    const comments = document.getElementById("comments").value.trim();

    if (name === "" || email === "" || country === "" || comments === "") {
      alert("Please fill in all fields: Full Name, Email Address, Country, and Comments.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Demonstration only: no backend, nothing is sent or stored.
    alert("Your form has been submitted successfully!");
    form.reset();
  });
}
