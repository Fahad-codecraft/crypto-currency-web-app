"use client";
import Coin from "./Coin.js";
import { getMarketData } from "./fetch";
import { useState, useEffect } from "react";

const Market = () => {
  const [market, setMarket] = useState([]);

  const getMarket = async () => {
    const data = await getMarketData()
    setMarket(data)
    // console.log(data)
  }

  useEffect(() => {
    getMarket()
  }, [])

  return (
    <section className="mt-8">
      <h1 className="text-2xl mb-2">
        Market
      </h1>

      {market ? (
        market.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))
      ) : (
        <p className="text-[2rem] text-red ">Error: 429, Too Many requests Try again later</p>
      )}


      {/* {market.map(coin => (
        <Coin key={coin.id} coin={coin} />
      ))} */}
    </section>
  )
}

export default Market



