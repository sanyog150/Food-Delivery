import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Cart.css';
import { UserContext } from '../../Context';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(UserContext);
  const navigate = useNavigate();

  const isCartEmpty = Object.values(cartItems).every(qty => qty === 0);

  return (
    <>
      <div className="cart">
        {isCartEmpty ? (
          <div className="empty-cart">
          <h2>Your food cart is empty</h2>
          <p>Add some delicious meals to your cart!</p>
          <button onClick={() => navigate('/')}>Browse Food Menu</button>
        </div>        
        ) : (
          <>
            <div className="cart-items">
              <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              <br />
              <hr />
              {food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div key={item._id}>
                      <div className="cart-items-title cart-items-item">
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>${item.price * cartItems[item._id]}</p>
                        <p onClick={() => removeFromCart(item._id)} className="cross">X</p>
                      </div>
                      <hr />
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="cart-bottom">
              <div className="cart-total">
                <h2>Cart Totals</h2>
                <div>
                  <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Delivery fee</p>
                    <p>${2}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount()+2}</b>
                  </div>
                </div>
                <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
              </div>
              <div className="cart-promocode">
                <div>
                  <p>If you have a promo code, enter it here</p>
                  <div className="cart-promocode-input">
                    <input type="text" placeholder="Promo code" />
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
