import Navbar from "@/components/Navbar"
import Trending from "@/components/Trending"

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="wrapper-container">
        <Trending />
      </div>
    </main>
  )
}