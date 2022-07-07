var toggleTheme = document.getElementById("toggle-themeid");

toggleTheme.onclick = () => {
  toggleTheme.classList.toggle("on");

  if (toggleTheme.classList.contains("on")) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

setTimeout(() => {
  const body = document.querySelector("body");
  body.style.opacity = 1;
  body.style.filter = "blur(0px)";
}, 1000);
