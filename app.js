const circle = document.querySelector('.circle');

async function getAdvice() {
  console.log('Fetching Data');
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();

  console.log('Data is fetched');
  const advice = data.slip.advice;
  const id = data.slip.id;
  console.log('printing Data');
  console.log(advice);
  console.log(id);

  document.querySelector('#advice-id').innerHTML = `ADVICE #${data.slip.id}`;
  document.querySelector('#advice-text').innerHTML = `"${data.slip.advice}"`;
}

circle.addEventListener('click', () => {
  getAdvice();
  circle.style.transform += 'rotate(180deg)';
});
