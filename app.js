async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  const advice = await data.slip.advice;
  const id = await data.slip.id;
  console.log(advice);
  console.log(id);

  document.querySelector("#advice-id").innerHTML = `ADVICE #${data.slip.id}`;
  document.querySelector("#advice-text").innerHTML = `"${data.slip.advice}"`;
}

document.querySelector(".circle").addEventListener("click", () => {
  document.querySelector(".circle").classList.add("rotate");
  setInterval(() => {
    document.querySelector(".circle").classList.remove("rotate");
  }, 210);
});
