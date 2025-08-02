import { useDispatch, useSelector } from 'react-redux';
import { clearItem } from '../utilities/cartSlice';

export const Cart = () => {
  const items = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="w-full min-h-screen px-[12%]">
      <h1 className="text-center mt-10">My Cart</h1>
      <button
        className="px-3 py-1 bg-black rounded-sm text-white"
        onClick={() => dispatch(clearItem())}
      >
        Clear
      </button>
      {items.map((i, index) => (
        <h1 key={index}>{i}</h1>
      ))}
    </div>
  );
};
