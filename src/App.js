import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

function App()
{
  const dispatch = useDispatch()

  const isCartVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() =>
  {
    const sendCartData = async () => 
    {
      dispatch(uiActions.showNotification(
        {
          status: 'pending',
          title: 'sending...',
          message: 'Sending cart data'
        }))

      const response = await fetch('https://simple-react-backend-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })

      if (!response.ok)
      {
        throw new Error("Sending Cart Data failed")
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully'
      }))
    }

    sendCartData().catch(error =>
    {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed'
      }))
    })
  }, [cart, dispatch])


  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
