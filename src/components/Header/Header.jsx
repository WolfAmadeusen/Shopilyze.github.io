import { Link } from 'react-router-dom'
import SearchForm from '../search/searchForm'
import './Header.css'


export default function Header() {

   return (
      <>
         <header className="flex justify-between items-center bg-black p-6">
            <div className="logo">
               <h1 className="font-bold"><Link to='/Home'>Shopilyze</Link></h1>
            </div>
            <div className="header-tools flex items-center justify-between space-x-6">
               <div className="flex items-center gap-3">
                  <SearchForm />
                  <select name="lang" className="select-lang">
                     <option value="RU">RU</option>
                     <option value="UA">UA</option>
                  </select>
               </div>
               <div className="header-navigation flex gap-6">
                  <Link to='/Profile'><img src="images/main/human.svg" width="36px" height="auto" alt="" /></Link>
                  <Link to='/basket'><img src="images/main/variable/basket.svg" width="36px" height="auto" alt="basket" /></Link>
                  <Link to=''><img src="images/main/heart.svg" width="36px" height="auto" alt="like button" /></Link>
               </div>
            </div>
         </header>
      </>

   )
}
