import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Catalog from '../components/Catalog/Catalog';
import Title from '../components/Title';
import Product from '../components/goods/Product';

export default function Navigation() {
   function scrollLeft() {
      const container = document.querySelector('.banner-collection');
      container.scrollBy({
         left: -container.offsetWidth, // Прокручиваем на ширину одного баннера
         behavior: 'smooth',
      });
   }

   function scrollRight() {
      const container = document.querySelector('.banner-collection');
      container.scrollBy({
         left: container.offsetWidth,
         behavior: 'smooth',
      });
   }
   return (
      <>
         <Header />
         <main className="grid grid-cols-3 gap-3 mt-10 mb-8">
            <Catalog />
            <div className="col-span-2">
               <div className="relative banner-container">
                  <button
                     className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded"
                     onClick={() => scrollLeft()}
                  >
                     ‹
                  </button>
                  <div className="banner-collection flex overflow-hidden">
                     <div className="banner flex-shrink-0">1</div>
                     <div className="banner flex-shrink-0">2</div>
                     <div className="banner flex-shrink-0">3</div>
                  </div>
                  <button
                     className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded"
                     onClick={() => scrollRight()}
                  >
                     ›
                  </button>
               </div>
               {/* Iphone */}
               <Title text="Iphone" link={''} buttonRight='100px' target='_blank' />
               <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-12" style={{ overflow: 'hidden' }}>
                  <Product />
                  <Product />
                  <Product />
                  <Product />
               </section>

               {/* Iphone */}
               <Title text="Iphone" link={''} buttonRight='100px' target='_blank' />
               <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-12" style={{ overflow: 'hidden' }}>
                  <Product />
                  <Product />
                  <Product />
                  <Product />
               </section>

               {/* Laptop */}
               <Title text="Ноутбуки" link={''} buttonRight='140px' target='_blank' />
               <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-12" style={{ overflow: 'hidden' }}>
                  <Product />
                  <Product />
                  <Product />
                  <Product />
               </section>

               {/* Kopchert */}
               <Title text="Наушники" link={''} buttonRight='150px' target='_blank' />
               <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-12" style={{ overflow: 'hidden' }}>
                  <Product />
                  <Product />
                  <Product />
                  <Product />
               </section>
            </div>
         </main>
         <Footer />
      </>
   );
}
