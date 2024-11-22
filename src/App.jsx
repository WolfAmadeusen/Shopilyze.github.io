import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/* Pages */
import Home from './Pages/Home';
import Product from './Pages/Product';
import NotFound from './Pages/NotFound';
import Basket from './Pages/Basket';


/*Style */
import './style/App.css';
import './style/banner.css';

function App() {
   return (
      <div>
         {/* Маршруты */}
         <Routes>
            <Route path="/" element={<Navigate to="/home" />} /> {/* Перенаправление на /home */}
            <Route path="/home" element={<Home />} /> {/* Главная страница */}
            <Route path="/product" element={<Product />} /> {/* Страница продукта */}
            <Route path="/basket" element={<Basket />} /> {/* Страница Карзины */}
            <Route path="/basket" element={<Basket />} /> {/* Страница профиля */}
            <Route path="/basket" element={<Basket />} /> {/* Страница Приоритетных товаров */}
            <Route path="*" element={<NotFound />} /> {/* Обработка неизвестных маршрутов */}
         </Routes>
      </div>
   );
}

export default App;
