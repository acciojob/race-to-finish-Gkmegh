window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const outputDiv = document.getElementById('output');

function getRandomTime(min, max) {
  return Math.random() * (max - min) + min;
}

const promises = Array.from({ length: 5 }, (_, index) => {
  return new Promise(resolve => {
    const randomTime = getRandomTime(1000, 5000);
    setTimeout(() => {
      resolve(`Promise ${index + 1} resolved after ${randomTime} milliseconds.`);
    }, randomTime);
  });
});

Promise.any(promises)
  .then(result => {
    outputDiv.textContent = result;
  })
  .catch(error => {
    console.error(error);
  });
