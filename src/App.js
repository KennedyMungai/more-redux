import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let isInitial = true

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
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully'
      }))
    }

    if (isInitial)
    {
      isInitial = false
      return
    }

    sendCartData().catch(error =>
    {

    })
  }, [cart, dispatch])


  return (
    <>
      {
        notification
        &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
