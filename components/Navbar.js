"use client"

import { TitleLogo } from "./common/Title";
import './style.css'
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white h-14 flex items-center w-full">
        <div className="max-w-5xl mx-auto px-2 flex items-center justify-evenly w-full">
          <TitleLogo title="Watch" caption="Coin" />
          <Link href="/trending" className="text-bold text-[1.5rem]">
            Trending Coins
          </Link>
          <Link href="/" className="text-bold text-[1.5rem]">
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;