import Banner from 'components/Banner';
import CategorySection from 'components/CategorySection';
import FavoritesSection from 'components/ProductSection';
import Header from 'components/Header';
import { useEffect, useState } from 'react';

function App() {

  const [scrolledDown, setScrolledDown] = useState()
  useEffect(() => {
      const handleScroll = () => {
          window.scrollY ?
          setScrolledDown(true) :
          setScrolledDown(false)
      };

      window.addEventListener('scroll', handleScroll)

      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
  })

  return (
    <div className="App">
      <Header scrolledDown={scrolledDown}/>
      <Banner />
      <CategorySection />
      {/* <FavoritesSection /> */}
    </div>
  );
}

export default App;
