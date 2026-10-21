console.log("Actually working");

//1. Grab the form element from the HTML
const form = document.querySelector('form');

//2. Listen for when a user clicks the sumbit button or presses Enter
form.addEventListener('submit', function(event) {
  event.preventDefault()

  // 3. (Optional) Gather the form data into a neat object 
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // 4. Do what you want with the data(eg.log it or send to a server)
  console.log("Form successfully submitted! Data captured.", data);
  alert("Thank you! Your submission has been captured.");

})

// Analytics Visit Counter
document.addEventListener("DOMContentLoaded", () => {
  const namespace = "my-mock-website-2026";
  const key = "homepage-visits";

  fetch(`https://countapi.xyz{namespace}/${key}`)
    .then(res => res.json())
    .then(data => {
      console.log(`🚀 This page has been visited ${data.value} times!`);
    })
    .catch(err => console.error("Error tracking visit:", err));
});
