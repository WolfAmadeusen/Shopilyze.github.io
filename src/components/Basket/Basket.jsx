import './basket.css';

export function BasketEmpty() {
   return (
      <div className="basketEmpty">
         <h1 className="text-4xl">Корзина пуста</h1>
         <img src="images/main/variable/bigBasket.svg" alt="Big basket" />
         <h1>К сожалению, у вас нету товара</h1>
         <div className="flex flex-col items-center justify-center gap-2">
            <p>Вы можете нажать на кнопку “Продолжить покупки”, либо вы можете нажать</p>
            <p>на логотип, и вас переведет на главную страницу сайта</p>
         </div>
      </div>
   );
}

export function BasketMain() {
   return (
      <div className="basketEmpty">
         <h1 className="text-4xl">Корзина тута</h1>
      </div>
   );
}
