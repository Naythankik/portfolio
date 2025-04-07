const copyright = document.querySelector(".copyright");

const date = new Date();

copyright.innerHTML = `&copy; Abolarin Nathaniel Okikiola ${date.getFullYear()}`;

const form = document.getElementById("contact-form");

// Listen for form submission
form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent the default form submission

  const formData = new FormData(form);

  if (
    formData.get("name") &&
    formData.get("email") &&
    formData.get("comment")
  ) {
    try {
      const response = await fetch(
        "https://sturdy-invention-nine.vercel.app/email/send",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong while sending the message");
      }

      const data = await response.json();

      console.log("Success:", data);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    }
  }
});
