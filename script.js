window.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    tg.expand();
  
    const userBtn = document.getElementById("userBtn");
    const searchBtn = document.getElementById("searchBtn");
    const privacyBtn = document.getElementById("privacyBtn");
    const userSection = document.getElementById("userSection");
    const searchSection = document.getElementById("searchSection");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");
    const privacySection = document.getElementById("privacySection");
  
    const buttons = [userBtn, searchBtn, privacyBtn];
  
    function clearActive() {
      buttons.forEach(btn => btn.classList.remove("active"));
      userSection.classList.remove("active");
      searchSection.classList.remove("active");
      privacySection.classList.remove("active");
      document.getElementById("welcomeScreen")?.remove();
    }
  
    function performSearch(query) {
      searchResults.innerHTML = "";
  
      if (query === "тест" || query === "test") {
        const result = document.createElement("div");
        result.className = "result-entry";
        result.innerHTML = `
          <div><span class="label">Name:</span> Test</div>
          <div><span class="label">Telegram:</span> @vkmef</div>
        `;
        searchResults.appendChild(result);
        searchResults.classList.add("active");
      } else {
        const result = document.createElement("div");
        result.className = "result-entry";
        result.innerHTML = `
          <div><span class="label">Name:</span> Unknown</div>
          <div><span class="label">Telegram:</span> Not found</div>
        `;
        searchResults.appendChild(result);
        searchResults.classList.add("active");
      }
    }
  
    userBtn.addEventListener("click", () => {
      clearActive();
      userBtn.classList.add("active");
      userSection.classList.add("active");
    });
  
    searchBtn.addEventListener("click", () => {
      clearActive();
      searchBtn.classList.add("active");
      searchSection.classList.add("active");
    });
  
    privacyBtn.addEventListener("click", () => {
      clearActive();
      privacyBtn.classList.add("active");
      privacySection.classList.add("active");
    });
  
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim().toLowerCase();
      performSearch(query);
    });
  });
  
