import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/ProductsPage";
import EmptyCart from "./EmptyCart";
import CartSubItem from "../../components/cart/CartSubItem"
function CartList({cartItem}) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItem?.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItem && cartItem?.map((item, id) =>
            <CartSubItem key={id} item={item} />
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{totalPrice + ".00$"}</p>
        </div>
        <div className="sub-left">
          <Link>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default CartList;
