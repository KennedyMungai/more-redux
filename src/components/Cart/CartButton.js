import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) =>
{
  const dispatch = useDispatch()

  const cartItemsQuantity = useSelector((state) => state.cart.totaQuantity)

  const toggleCartHandler = () =>
  {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {cartItemsQuantity ?? 0}
      </span>
    </button>
  );
};

export default CartButton;
