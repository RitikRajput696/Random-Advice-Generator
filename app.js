const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.querySelector("#advice-id").innerHTML = `ADVICE #${data.slip.id}`;
  document.querySelector(".advice-text").innerHTML = `"${data.slip.advice}"`;
};

const btn = document.querySelector(".circle");
btn.addEventListener("click", function () {
  fetchAdvice();
  btn.classList.add("rotate");
  setInterval(() => {
    btn.classList.remove("rotate");
  }, 1000);
});

fetchAdvice();
