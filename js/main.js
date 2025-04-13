function handleSearch() {
    const input = document.getElementById("searchInput").value.trim();
    const message = document.getElementById("responseMessage");
  
    if (!input) {
      message.innerHTML = "⚠️ You didn't enter a request.";
    } else {
      message.innerHTML = "🔌 FS servers are currently offline.";
    }
  
    message.classList.add("show");
  }
  
  function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById("themeIcon");
    const isLight = html.getAttribute("data-theme") === "light";
  
    if (isLight) {
      html.setAttribute("data-theme", "dark");
      icon.src = "assets/icons/sun.svg";
    } else {
      html.setAttribute("data-theme", "light");
      icon.src = "assets/icons/moon.svg";
    }
  }
  
