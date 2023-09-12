import Banner from 'components/Banner';
import CategorySection from 'components/CategorySection';
import ProductSection from 'components/ProductSection';
import Header from 'components/Header';
import { useEffect, useState } from 'react';
import NewsSection from 'components/NewsSection';
import Footer from "components/Footer";
import SideMenu from 'components/SideMenu';

function App() {

  const [shoppingCart, setShoppingCart] = useState([])

  const addItemToCart = product => {
    setShoppingCart([...shoppingCart, product])
  }

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

  const [menuOpen, setMenuOpen] = useState(false)
  const openMenu = () => {
    setMenuOpen(true)
  }

  return (
    <div className="App">
      <SideMenu 
        isOpen={menuOpen}
        onStateChange={state => setMenuOpen(state.menuOpen)}
      />
      <Header 
        scrolledDown={scrolledDown} 
        cartItems={shoppingCart.length}
        openMenu={openMenu}
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
