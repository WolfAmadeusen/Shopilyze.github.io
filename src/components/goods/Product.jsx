import { Link } from "react-router-dom"

export default function Product() {
   return (
      <div className="product_item bg-orange-50 p-4 max-w-xs mx-auto">
         <div className="mb-4">
            <Link to='/product'> <img src="images/goods/iphone.jpeg" className="w-full h-auto rounded" alt="iphone" /></Link>
         </div>
         <span href="#" className="product_item-title"><Link to='/product'>Iphone 15 Pro 1TB dasdasdasd</Link></span>
         <div className="flex justify-between mt-6">
            <span className="product_item-price">56,099</span>
            <a href="#">
               <img src="images/main/variable/BasketMain.svg" className="text-black" width="32px" height="32px" alt="basket" />
            </a>
         </div>
         <a href="#" className="product_item-heart">
            <img src="images/main/heart.svg" alt="heart" />
         </a>
      </div>
   )
}