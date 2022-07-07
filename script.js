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
  const name = document.querySelector(".name");
  const namejp = document.querySelector(".name-jp");
  name.style.opacity = 1;
  namejp.style.opacity = 1;
  name.style.filter = "blur(0px)";
  namejp.style.filter = "blur(0px)";
}, 1000);
