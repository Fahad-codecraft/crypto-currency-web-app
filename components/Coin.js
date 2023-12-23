import Image from "next/image"
import { currencyFormat } from "./utils"
import { TrendingDown, TrendingUp } from "@/icons/icons"


const Coin = ({ coin }) => {
  console.log(coin)
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
        <div className="flex items-center gap-1 w-full">
          <Image src={coin.image} alt={coin.name} width={24} height={24} />
          <p>{coin.name}</p>
          <span className="text-sm">({coin.symbol})</span>
        </div>
        <span className="w-full text-center">
          {currencyFormat(coin.current_price)}
        </span>
        <span className={`flex gap-1 items-center ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
          {coin.price_change_percentage_24h < 0 ? <TrendingDown className="h-5 w-5" /> : <TrendingUp className="h-5 w-5" />}
          {coin.price_change_percentage_24h}
        </span>
        <div className="hidden sm:block">
          <p className="font-seibold">Market Cap</p>
          <span>{currencyFormat(coin.market_cap)}</span>
        </div>
      </div>
    </>
  )
}

export default Coin