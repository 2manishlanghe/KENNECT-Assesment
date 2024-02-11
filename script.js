function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function getPrimeInRange(start, end) {
    const primes = [];
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }
  
  function findPrimes() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const primes = getPrimeInRange(start, end);
    document.getElementById('results').innerHTML = primes.join(', ');
  }
  
  function showDetails() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const startTime = performance.now();
    const primes = getPrimeInRange(start, end);
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    const spaceComplexity = 'O(1)';
    
    let timeTable = `<table><tr><th>Number</th><th>Result</th><th>Time in ms</th></tr>`;
    primes.forEach(prime => {
      timeTable += `<tr><td>${prime}</td><td>Prime</td><td>${timeTaken}</td></tr>`;
    });
    for (let num = start; num <= end; num++) {
      if (!primes.includes(num)) {
        timeTable += `<tr><td>${num}</td><td>Normal</td><td>${timeTaken}</td></tr>`;
      }
    }
    timeTable += `</table>`;
    
    let spaceTable = `<table><tr><th>Number</th><th>Time in ms</th></tr>`;
    primes.forEach(prime => {
      spaceTable += `<tr><td>${prime}</td><td>${timeTaken}</td></tr>`;
    });
    spaceTable += `</table>`;
    
    document.getElementById('time-table').innerHTML = timeTable;
    document.getElementById('space-table').innerHTML = spaceTable;
    document.getElementById('details-container').style.display = 'block';
  }
  