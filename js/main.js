const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  btn.classList.add("loading");
  setTimeout(() => {
    btn.classList.remove("loading");
  }, 3000);
});
