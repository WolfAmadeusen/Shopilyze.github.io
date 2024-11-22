import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Feedback from "../components/feedback/feedback";
import {ButtonProduct} from "../components/buttons/button";

import styles from './Product.module.css';



export default function Product() {

   const
      name = 'Ноутбук Apple MacBook Pro 16',
      FullName = 'Екран 16.2" Liquid Retina XDR (3456x2234) 120 Гц, глянсовий / Apple M1 Pro / RAM 32 ГБ / SSD 512 ГБ / Apple M1 Pro Graphics (16 ядер) / без ОД / Wi-Fi / Bluetooth / веб-камера / macOS Monterey / 2.1 кг / сірий',
      price = Math.floor(Math.random() * 100000),
      stockStatus = 'В наличии',
      imgPath = 'images/goods/Imac.png',
      Salesman = 'Григорий Пропионат',
      ProductId = Math.floor(Math.random() * 1023082300),
      randomNumber =Math.floor(Math.random() *100) ;

   return (
      <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow">
            <div className="pl-10 pt-10">
               <div className="grid grid-cols-2 mb-32">
                  <section>
                     <h1 className="text-4xl font-bold">{name}</h1>
                  </section>
                  <section className={`flex gap-6 ${styles.characteristics}`}>
                     <a href="#">Характеристики</a>
                     <a href="#">Отзывы <span>{randomNumber}</span></a>
                  </section>

                  <section className="bg-orange-100 p-6 mt-10"><img src={imgPath} alt="images" /></section>

                  <section className="bg-orange-100 p-6 mt-10 flex justify-between flex-col">
                     <div className={styles.ProductFullTitle}>{FullName}</div>
                     <section className="flex gap-2 items-center">
                        <div className="ProductRating">Рейтинг</div>
                        <div className={styles.ProductAvailability}>{stockStatus}</div>
                     </section>
                     <section className={styles.productInfo}>
                        <div>Имя продавца: {Salesman}</div>
                        <div>Код товара:  {ProductId}</div>
                     </section>
                     <section className="flex gap-6 items-center">
                        <div className={styles.ProductPrice}>{price}</div>
                        <button className="BuyButton"><ButtonProduct name={'Купить'}/></button>
                        <div className="FavoriteIcon"></div>
                     </section>
                  </section>
               </div>

               <h1 className="text-4xl font-bold mb-6 mt-10">Характеристики</h1>
               <section className="mb-10 mt-10 flex items-center gap-10">
                  <h1 className="text-4xl font-bold">Отзывы</h1>
                  <a href="#" className="text-gray-500">Оставить отзыв</a>
               </section>
               <Feedback name={'Валерий пропионат'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempore. Fugiat quasi provident molestiae quibusdam animi, perferendis ab quod nisi.'} date={'30.4.2003'} />
               <Feedback name={'Максим Галкин'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempore.'} date={'13.8.2020'} />
               <Feedback name={'Маколей Калкин'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempore. '} date={'20.10.2030'} />
               <Feedback name={'Вова Ленин'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempore. '} date={'22.11.2024'} />
               <Feedback name={'Владимир Foresto-ВІЧ'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempore. '} date={'02.7.2007'} />
            </div>
         </main>
         <Footer />
      </div >
   )
}