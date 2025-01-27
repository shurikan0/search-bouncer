// Fetch blocked domains from storage
browser.storage.local.get("blockedDomains").then(({ blockedDomains }) => {
  if (!blockedDomains) return;

  // Define a function to filter results
  function filterResults() {
    const results = document.querySelectorAll("a");
    results.forEach((link) => {
      const url = new URL(link.href);
      if (blockedDomains.includes(url.hostname)) {
        link.closest("div").style.display = "none"; // Adjust based on the DOM structure
      }
    });
  }

  // Run filtering periodically (for dynamic content loading)
  setInterval(filterResults, 1000);
});
