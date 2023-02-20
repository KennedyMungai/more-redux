import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App()
{
  const isCartVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)

  useEffect(() =>
  {
    const sendCartData = async () => 
    {
      fetch('https://simple-react-backend-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      }).then()
    }
  }, [cart])


  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
