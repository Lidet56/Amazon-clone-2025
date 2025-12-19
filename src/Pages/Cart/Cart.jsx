import React, {useContext} from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import {Link} from 'react-router-dom'
import styles from './cart.module.css'
import { Type } from '../../Utility/action.type';
import { formatMoney } from '../../Utility/money';


export default function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  console.log(basket);
  const total = basket.reduce((amount, cartItem) => {
  return amount + cartItem.price * cartItem.amount;
}, 0);

  const increament = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decreament = (item) => {
  dispatch({
    type: Type.REMOVE_FROM_BASKET,
    id: item.id, 
  });
};
  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shipping Basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>No Items in your Cart</p>
          ) : (
            basket?.map((cartItem, i) => {
              return (
                <section>
                  <div className={styles.product__container}>
                    <ProductCard
                      product={cartItem}  
                      key={i}
                      renderDesc={true}
                      flex={true}
                      renderAdd={false}
                      enableHover={false}
                    />
                  </div>
                  <div className={styles.btn_container}>
                    <button
                      className={styles.btn}
                      onClick={() => increament(cartItem)}
                    >
                      +
                    </button>
                    <span>{cartItem.amount}</span>
                    <button
                      className={styles.btn}
                      onClick={() => decreament(cartItem)}
                    >
                       -
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal({basket?.length} items)</p>
              {formatMoney(total)}
            </div>
            <span>
              <input type="checkbox" />
              <small>This Order Contains a gift</small>
            </span>
            <Link to="/payment"> Continue to Checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}


















