document.addEventListener("DOMContentLoaded", function () {
  const themeSelector = document.getElementById("theme-select");

  function changeTheme() {
    var theme = themeSelector.value;
    const img = document.getElementById("logo");
    if (theme === "light") {
      document.body.classList.remove("dark");
      img.src = "images/logo.png";
    } else if (theme === "dark") {
      document.body.classList.add("dark");
      img.src = "images/dark.png";
    }
  }

  themeSelector.addEventListener("change", changeTheme);
});
