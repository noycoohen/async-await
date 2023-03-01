const rateCalulator = async () => {
    let response = await fetch('https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');
    let json = await response.json();
    const lastPrice = json.lastPrice;
    response = await fetch('https://api.exchangerate.host/latest?base=USD');
    json = await response.json();
    console.log(lastPrice * json.rates.ILS);

    // fetch('https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         const lastPrice = data.lastPrice;

    //         fetch('https://api.exchangerate.host/latest?base=USD')
    //             .then((response) => response.json())
    //             .then((data) => {

    //                 console.log(lastPrice * data.rates.ILS);
    //             });
    //     });

    setTimeout(rateCalulator, 15000);
}
rateCalulator();