import Market from "@/components/Market";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="wrapper-container">
        <Market />
      </div>
    </main>
  )
}
