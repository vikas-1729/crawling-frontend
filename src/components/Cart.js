import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
  const { input } = props;
  return (
    <div className="cart">
      {input.map((value) => {
        return (
          <div className="cart-item" to="#" key={value._id}>
            <Link to="#">
              <span>{value.tag}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
