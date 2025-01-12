document.addEventListener("DOMContentLoaded", () => {
  // Ensure the taxSwitch element exists before adding event listeners
  let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  if (taxSwitch) {
    taxSwitch.addEventListener("click", () => {
      let taxInfo = document.getElementsByClassName("tax-info");
      for (let info of taxInfo) {
        info.style.display = info.style.display !== "inline" ? "inline" : "none";
      }
    });
  }

  // Add category filtering functionality
  let filters = document.querySelectorAll(".filter");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      let selectedCategory = filter.getAttribute("data-category");

      // Display only the listings that match the selected category
      let allListings = document.querySelectorAll('.listing-card');
      allListings.forEach(listing => {
        let listingCategory = listing.getAttribute("data-category");

        // If the listing's category matches the selected one (or if the filter is empty), display it
        if (selectedCategory === listingCategory || selectedCategory === "") {
          listing.style.display = "block";  // Show matching listings
        } else {
          listing.style.display = "none";  // Hide non-matching listings
        }
      });

      // Mark the active filter
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");
    });
  });

  // Form validation (Bootstrap)
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
});

