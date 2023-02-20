import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true

function App()
{
  const dispatch = useDispatch()

  const isCartVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() =>
  {
    if (isInitial)
    {
      isInitial = false
      return
    }
  }, [])


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
