function checkPrime() {
    let num = document.getElementById('number').value;
    fetch(`http://localhost:4001/primes?number=${num}`)
        .then(response => response.json())
        .then(data => document.getElementById('result').innerText = data.result ? "Prime" : "Not Prime")
        .catch(error => console.error(error));
}
