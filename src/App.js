import Banner from 'components/Banner';
import CategorySection from 'components/CategorySection';
import ProductSection from 'components/ProductSection';
import Header from 'components/Header';
import { useEffect, useState } from 'react';
import NewsSection from 'components/NewsSection';
import Footer from "components/Footer";

function App() {

  const [scrolledDown, setScrolledDown] = useState()
  useEffect(() => {
      const handleScroll = () => {
          window.scrollY 
          ? setScrolledDown(true) 
          : setScrolledDown(false)
      };

      window.addEventListener('scroll', handleScroll)

      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
  })

  const addItemToCart = product => product

  return (
    <div className="App">
      <Header 
        scrolledDown={scrolledDown} 
        itemToAddToCart={addItemToCart}
      />
      <Banner />
      <CategorySection />
      <ProductSection addToCart={addItemToCart} />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default App;
