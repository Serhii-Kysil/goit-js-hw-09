const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstDelay = parseInt(form.elements['delay'].value);
  const delayStep = parseInt(form.elements['step'].value);
  const amount = parseInt(form.elements['amount'].value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, firstDelay + (i - 1) * delayStep)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const promiseResult = { position, delay };

      if (shouldResolve) {
        resolve(promiseResult);
      } else {
        reject(promiseResult);
      }
    }, delay);
  });
}
