import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../../assets/images/empty-cart.png';

export const CartEmpty = () => (
  <div className="cart cart--empty">
    <h2>
      Cart is empty <span>😕</span>
    </h2>
    <p>
      You haven't ordered pizza yet <br />
      To order pizza, go to the main page.{' '}
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Go Back</span>
    </Link>
  </div>
);
