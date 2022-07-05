var toggleTheme = document.getElementById("toggle-themeid");

toggleTheme.onclick = () => {
  toggleTheme.classList.toggle("on");

  if (toggleTheme.classList.contains("on")) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};
