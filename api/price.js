
const fetch = require('node-fetch');

export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.bybit.com/v2/public/tickers?symbol=BTCUSDT');
    const data = await response.json();
    const price = data.result[0].last_price;
    res.status(200).json({ price });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch price" });
  }
}
