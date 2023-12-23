const getCryptoData = async () => {
  const coins = []; // Initialize the coins array

  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/search/trending`, { cache: "no-store" });
    const data = await res.json(); // Parse the response body as JSON

    if (data.coins) {
      data.coins.forEach(coin => {
        coins.push({
          name: coin.item.name,
          image: coin.item.large,
          id: coin.item.id,
          priceBtc: coin.item.price_btc,
          score: coin.item.score,
          symbol: coin.item.symbol,
        });
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return coins; // Return the coins array
};

const getMarketData = async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en", { cache: "no-store" })
    const data = res.json()
    return data;
  } catch (error) {
    console.log("Error fetching data:", error)
  }
}


export { getCryptoData, getMarketData } 