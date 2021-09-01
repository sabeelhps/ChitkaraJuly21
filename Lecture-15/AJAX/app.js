// JSON String
const fetchedData = `{"ticker":{"base":"BTC","target":"USD","price":"47379.63963962","volume":"60555.16538068","change":"2.02712505"},"timestamp":1630477142,"success":true,"error":""}`


const data = JSON.parse(fetchedData);

console.log(data.ticker.price);