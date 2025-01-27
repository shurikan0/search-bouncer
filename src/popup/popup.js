document.getElementById("save").addEventListener("click", () => {
  const domains = document
    .getElementById("blocked-domains")
    .value.split("\n")
    .map((domain) => domain.trim())
    .filter((domain) => domain);

  browser.storage.local.set({ blockedDomains: domains }).then(() => {
    alert("Blocked domains saved!");
  });
});

// Load existing domains
browser.storage.local.get("blockedDomains").then(({ blockedDomains }) => {
  if (blockedDomains) {
    document.getElementById("blocked-domains").value = blockedDomains.join("\n");
  }
});
