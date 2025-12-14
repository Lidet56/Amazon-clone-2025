import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './Product.module.css'
import {Link} from 'react-router-dom'
 

function ProductCard({ product, flexed, renderDesc}) {
  if (!product || !product.rating) return null;

  const { image, title, id, rating, price, description} = product;

  return (
    <div
      className={`${classes.card__container} ${
        flexed ? classes.product__flexed : ""
      }`}
      >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>
         {renderDesc && <div style={{maxWidth:"500px"}}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button}>
          add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;