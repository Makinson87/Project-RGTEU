import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Favorites from './components/favorites/Favorites';
import Home from './components/Home';

export const AppContext = React.createContext({})

function App() {
  
  // state для хранения товаров
  const [products, setProducts] = React.useState([]);
  // state состояние корзины
  const [cartOpened, setCartOpened] = React.useState(false);
  // state для хранения товаров в корзине
  const [cartItems, setCartItems] = React.useState([]);
  // state для хранения избранных товаров
  const [favoritesItems, setFavoritesItems] = React.useState([])
  // state для поиска
  const [search, setSearch] =React.useState('')
  // state для хранения состояния загрузки
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function axiosData() {
      const cartData = await axios.get('https://638a6b954eccb986e8ac9769.mockapi.io/cart');
      const favoritesData = await axios.get('https://638a6b954eccb986e8ac9769.mockapi.io/favorites');
      const productsData = await axios.get('https://638a6b954eccb986e8ac9769.mockapi.io/products');

      setLoading(false)

      setCartItems(cartData.data);
      setFavoritesItems(favoritesData.data);
      setProducts(productsData.data);
    }
    axiosData()
  }, [])
  
  const onRemoveCartItem = (id) => {
    axios.delete(`https://638a6b954eccb986e8ac9769.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
  }

  const itemAdded = (myId) =>{
    return cartItems.some((objCart) => objCart.myId === myId)
  }
  const itemFavorited = (myId) => {
    return favoritesItems.some((objFavorite) => {
      return objFavorite.myId === myId;
    })
  }

  return (
    <AppContext.Provider value={{products, cartItems, favoritesItems, setProducts, setCartItems, setFavoritesItems, itemAdded, itemFavorited}}>
    <div className="app">
      { cartOpened ? <Cart 
      onRemoveCartItem={onRemoveCartItem}
      cartItems={cartItems} 
      closeCart={ () => setCartOpened(false) } 
      totalPrice={      
        cartItems.reduce((totalElements, objPrice) => totalElements + objPrice.price, 0)
      } /> : null 
      
      }
      
      <Header openCart={ () => setCartOpened(true) } cartItems={cartItems} />
        <Routes>
          <Route path='/favorites' element={
            <Favorites />
          }
          />
          <Route path='/' element={
            <Home 
              items={products} 
              cartItems={cartItems} 
              setCartItems={setCartItems}
              setSearch={setSearch} 
              search={search}
              favoritesItems={favoritesItems}
              setFavoritesItems={setFavoritesItems}
              loading={loading}
            />
          }
          />
        </Routes>
      <Footer />

    </div>
    </AppContext.Provider>
  );
}

export default App;
