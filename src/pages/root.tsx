import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
const RootLayout = () => {
  return <>
    <Navbar />
    <main className="p-10">
      <Outlet />
    </main>
    <Footer />
  </>
}

export default RootLayout