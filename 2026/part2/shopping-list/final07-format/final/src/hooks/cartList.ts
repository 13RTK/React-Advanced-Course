import { useLocalStorage } from 'react-use';
import type { CartItem } from '../types/CartItem';

export function useCartList() {
  const [cartList, setCartList] = useLocalStorage<CartItem[]>('cart-list', []);

  return { cartList, setCartList };
}
