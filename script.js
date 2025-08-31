
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  if (!name || !phone.match(/^\d{10}$/)) {
    alert("Please enter a valid name and 10-digit phone number.");
    return false;
  }
  alert("Your message has been sent!");
  return true;
}
