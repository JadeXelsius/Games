document.addEventListener("DOMContentLoaded", function () {
  let yearDropdown = document.getElementById("yearDropdown");
  for (let year = 1980; year <= 2024; year++) {
    let yearLink = document.createElement("a");
    yearLink.href = "#";
    yearLink.textContent = year;
    yearDropdown.appendChild(yearLink);
  }

  // Here you could also add the ratings and other dynamic elements
});
