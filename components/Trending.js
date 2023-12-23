"use client";

import { useState, useEffect } from "react";
import CoinTrending from "./CoinTrending";
import { getCryptoData } from "./fetch";
import Link from "next/link";

const Trending = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await getCryptoData()
    setData(data)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="mt-8">
      <div className="text-2xl mb-2 flex gap-2 items-center w-full justify-between">
        <p>
          Trending
        </p>
        <Link href="/" className="text-sm">
          &#8592; Go back
        </Link>
      </div>
      {data.map(coin => (
        <CoinTrending key={coin.id} coin={coin} />
      ))}

    </div>
  )
}

export default Trending