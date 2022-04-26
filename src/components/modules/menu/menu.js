import './menu.css';
import { MenuData } from '../../../utils/menuData';
import React, { useState } from 'react';
import Card from '../../elements/Card/Card';
import Cart from '../cart/cart';

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleItemClick = (item) => {
    if (!cartItems.includes(item)) {
      setCartItems([
        ...cartItems,
        { ...item, count: 1 },
      ]);
    }
  }

  const handleOrder = () => {
    
  }

  return (
    <>
      <div className="containerMenu">
        {
          MenuData.map((item, index) => <div key={index} onClick={() => { handleItemClick(item) }}>
            <Card item={item} index={index} />
          </div>)
        }
      </div>

      {cartItems.length > 0 && <div className="cartContainer">
        <div className="cartItemsContainer">
          {
            cartItems.map((item, index) => <div className="cartItem">
              {item.count} &nbsp; {item.dishName}
            </div>
            )
          }
        </div>
        <div className="pricingContainer">
          <div className="total">Total: 100 Rs</div>
          <button className="order" onClick={handleOrder}>Make Order</button>
        </div>
      </div>}
    </>
  );
}

export default Menu;