document.addEventListener("DOMContentLoaded", () => {
  let taxSwitch = document.getElementById("flexSwitchCheckDefault");

  if (taxSwitch) {
    let priceSpans = document.querySelectorAll(".price-amount");
    let priceMap = new Map();

    // Store base prices on page load
    priceSpans.forEach(priceSpan => {
      let basePrice = parseFloat(priceSpan.innerText.replace(/,/g, ""));  //Removes commas from the displayed price.//Converts the string to a number.Stores the number in priceMap with the span element as the key.
      priceMap.set(priceSpan, basePrice);
    });

    taxSwitch.addEventListener("change", () => {
      // Toggle tax info visibility
      let taxInfos = document.getElementsByClassName("tax-info");
      for (let info of taxInfos) {
        info.style.display = taxSwitch.checked ? "inline" : "none";
      }

      // Update price amounts
      priceMap.forEach((basePrice, priceSpan) => {
        let finalPrice = taxSwitch.checked ? (basePrice * 1.18) : basePrice;
        let formattedPrice = finalPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 });
        priceSpan.innerText = formattedPrice;
      });
    });
  }


  // CATEGORY FILTERING FUNCTIONALITY
  let filters = document.querySelectorAll(".filter");
  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      let selectedCategory = filter.getAttribute("data-category");

      // Show matching listings, hide others
      let allListings = document.querySelectorAll(".listing-card");
      allListings.forEach(listing => {
        let listingCategory = listing.getAttribute("data-category");
        listing.style.display =
          selectedCategory === listingCategory || selectedCategory === ""
            ? "block"
            : "none";
      });

      // Mark active filter
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");
    });
  });

  // BOOTSTRAP FORM VALIDATION FUNCTIONALITY
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach(form => {
    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  });
});
