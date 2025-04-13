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
  