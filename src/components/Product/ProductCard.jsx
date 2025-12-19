import { useContext } from "react";
import Rating from "@mui/material/Rating";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { FadeLoader } from "react-spinners";
import { formatMoney } from "../../Utility/money";

export default function ProductCard({
  product,
  renderDesc,
  renderAdd,
  flex,
  enableHover,
}) {
  const [state, dispatch] = useContext(DataContext);

  // ✅ GUARD FIRST (VERY IMPORTANT)
  if (!product) return <FadeLoader />;

  // ✅ SAFE destructuring AFTER guard
  const { image, title, id, rating, price, category, description } = product;

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: product, // ✅ FIXED (no nesting)
    });
  };

  return (
    <div
      className={`${styles.productCard} 
      ${flex ? styles.product__flexed : ""} 
      ${enableHover ? styles.hoverable : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className={styles.productCard__img}
        />
      </Link>

      <div className={styles.productCard__info}>
        <h3 className={styles.productCard__title}>{title}</h3>

        <div className={styles.productCard__rating}>
          <Rating
            value={rating?.rate || 0}
            precision={0.1}
            size="small"
          />
          <span className={styles.productCard__ratingCount}>
            ({rating?.count || 0})
          </span>
        </div>

        <p className={styles.productCard__price}>
          {formatMoney(price)}
        </p>

        {renderDesc && (
          <p style={{ textAlign: "justify" }}>{description}</p>
        )}

        <p className={styles.productCard__category}>{category}</p>

        {renderAdd && (
          <button
            className={styles.productCard__btn}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}













//   function ProductCard({ product, flexed, renderDesc,renderAdd}) {
  
//   if (!product || !product.id) return null;
//     const { image, title, id, rating, price, description} = product;

//   const [{ basket }, dispatch] = useContext(DataContext);
//   const basketItem = basket?.find(item => item.id === id);
//     const increment = () => {
//   dispatch({
//     type: Type.ADD_TO_BASKET,
//     item: basketItem || product,
//   });
// };

// const decrement = () => {
//   dispatch({
//     type: Type.REMOVE_FROM_BASKET,
//     id,
//   });
// };
      
    

//       const addToCart = () => {
//   dispatch({
//     type:Type.ADD_TO_BASKET,item: {image,title,id,rating,
// price,description,
//     },
//   })
// }

//   return (
//     <div
//       className={`${classes.card__container} ${
//         flexed ? classes.product__flexed : ""
//       }`}
//       >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>

//       <div className={classes.card__containerinfo}>
//         <h3>{title}</h3>
//          {renderDesc && <div style={{maxWidth:"500px"}}>{description}</div>}
//         <div className={classes.rating}>
//           <Rating value={rating.rate} precision={0.1} />
//           <small className={classes.rateCount}>{rating.count}</small>
//         </div>

//         <div className={classes.card__container__price}>
//           <CurrencyFormat amount={price} />
//         </div>
// {/*         
//         {renderAdd && (
//   basketItem ? (
//     <div className={classes.quantity}>
//       <button onClick={decrement}>-</button>
//       <span>{basketItem.amount}</span>
//       <button onClick={increment}>+</button>
//     </div>
//   ) : (
//     <button className={classes.button} onClick={addToCart}>
//     </button> 
//   )
// )} */}
 
//       </div>
//     </div>
//   );
// }

// export default ProductCard;