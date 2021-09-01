
// Oldest way of sending the request

// const req = new XMLHttpRequest();

// req.onload = function () {
    
//     const fetchedData = this.responseText;

//     const data = JSON.parse(fetchedData);

//     console.log(data);
//     console.log(data.ticker.price);

// }

// req.onerror = function () {
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();



// sending request using the fetch - newer way of sending the request


fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data.ticker.price);
    })
    .catch((err) => {
        console.log(err.message);
    });




