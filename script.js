// Typing effect
const text = "Ngaaruhe Hei";
let i = 0;

function type() {
  const el = document.querySelector("h1");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  emailjs.init("QHHx3M3aW-KRsanBs");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_y1cttjm", "template_sq47jqv", data)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  });
});