import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { BasketEmpty, BasketMain } from "../components/Basket/Basket";



export default function Basket() {

   return (
      <div className="flex flex-col min-h-screen bg-orange-100">
         <Header />
         <main className="flex-grow mb-56 mt-60">
            <BasketEmpty/>
         </main>
         <Footer />
      </div>
   )
}