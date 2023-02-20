import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App()
{
  const dispatch = useDispatch()

  const isCartVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)

  useEffect(() =>
  {
    const sendCartData = async () => 
    {
      const response = await fetch('https://simple-react-backend-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })

      if (!response.ok)
      {
        throw new Error("Sending Cart Data failed")
      }

      const responseData = await response.json()
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
