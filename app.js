const circle = document.querySelector('.circle');

async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');

    if (!response.ok) {
      throw new Error(`HTTP error ! Status: ${response.status}`);
    }
    const data = await response.json();
    const advice = data.slip.advice;
    const id = data.slip.id;

    document.querySelector('#advice-id').innerHTML = `ADVICE #${data.slip.id}`;
    document.querySelector('#advice-text').innerHTML = `"${data.slip.advice}"`;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

circle.addEventListener('click', () => {
  getAdvice();
  circle.style.transform += 'rotate(180deg)';
});
