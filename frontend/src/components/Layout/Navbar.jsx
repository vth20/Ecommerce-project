import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { IconX, IconMenu2, IconShoppingCart, IconUser } from '@tabler/icons-react';
import EmptyCart from '../cart/EmptyCart';
import CartWithItems from '../cart/CartWithItems';
import LogoImg2 from "../../img/newlogo1.png"
import { CartContext } from '../../pages/ProductsPage';
import "./Navbar.css"
import CartList from "../../components/cart/CartList"
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItem } = useContext(CartContext);
  console.log('cartItem:', cartItem);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  window.addEventListener("scroll", handleScroll);
  const [cartLocal, setCartLocal] = useState([])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(()=> {
    const carts = JSON.parse(localStorage.getItem("cartItems"));
    console.log(carts);
    setCartLocal(carts)
  }, [])
  console.log(cartItem);
  return (
    <>
      {/* <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <IconX onClick={() => setMobileNav(!mobileNav)} className="x-mobile" />
        <div className="mobile-links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
            categories
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/lamps">
            lamps
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/categories/product/19"
          >
            product page
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/shop-create"
          >
            Become Seller
          </Link>
        </div>
      </div> */}

      {/* overlay */}
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      {/* cart */}
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">
            Your Shopping Cart ({cartItem.length})
          </h2>
          <IconX onClick={openCart} />
        </div>

        <div className="cart-body">
          {cartLocal.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartList cartItem={cartLocal} />
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <img
                onClick={scrollToTop}
                src={LogoImg2}
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories">
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/product/6565a303979d9a62d55b2e21"
              >
                product page
              </Link>
              <Link
                onClick={() => setMobileNav(!mobileNav)}
                to="/shop-create"
              >
                Become Seller
              </Link>
              {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`${cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                  }`}
              >
                <IconShoppingCart />
              </i>
              
            </div>
            <div className="hamburger-menu">
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`hamburger-cart ${cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                  }`}
              >
                <IconShoppingCart />
              </i>
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="hamburger-hamb"
              >
                <IconMenu2 />
              </i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
