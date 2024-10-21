import { useSelector, useDispatch } from 'react-redux';
import { load, append } from './cartListSlice';
import { isExistItem } from '../utils/arrayHelper';
import { show } from '../utils/toastHelper';
import { useLocalStorage } from 'react-use';

export function useCartList(toast) {
  const [cartList, setCartList] = useLocalStorage('cart-list', []);

  const cartListStore = useSelector((state) => state.cartList);
  const dispatch = useDispatch();

  function loadFromLocalStorage(localStorage) {
    dispatch(load(localStorage));
  }

  function appendProduct(product) {
    if (isExistItem(product, cartList)) {
      show(toast, 'error');
      return;
    }

    const newCartList = [...cartList, product];

    setCartList(newCartList);
    dispatch(append(product));

    show(toast);
  }

  return { cartListStore, loadFromLocalStorage, appendProduct };
}
