//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function processArray() {
  const outputDiv = document.getElementById('output');
  const initialArray = [1, 2, 3, 4];
  
  delay(3000)
    .then(() => {
      const filteredArray = initialArray.filter(num => num % 2 === 0);
      
      return delay(1000).then(() => {
        outputDiv.textContent = filteredArray.join(',');
        return filteredArray;
      });
    })
    .then(filteredArray => {
      const doubledArray = filteredArray.map(num => num * 2);
      
      return delay(2000).then(() => {
        outputDiv.textContent = doubledArray.join(',');
      });
    })
    .catch(error => {
      console.error('Error:', error);
      outputDiv.textContent = 'Error occurred during processing';
    });
}

document.addEventListener('DOMContentLoaded', processArray);