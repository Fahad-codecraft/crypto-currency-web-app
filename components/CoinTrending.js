import Image from "next/image"

const CoinTrending = ({ coin }) => {
  // console.log(coin)
  return (
    <>
      <div className="flex items-center gap-1">
        <span className="font-semibold">{coin.score + 1}.</span>
        <Image src={coin.image} alt={coin.name} width={46} height={50} className="ml-1 rounded-full" />
        <p>{coin.name}</p>
        <small className="text-xs">({coin.symbol})</small>
      </div>
      <hr className="m-1" />
    </>

  )
}

export default CoinTrending