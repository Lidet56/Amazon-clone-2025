import React from 'react'
import classes from './CategoryCard.module.css'



function CategoryCard({ data }) {
  return (

      <section className={classes.catagory_card}>
        <h2>{data.title}</h2>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now</p>
    </section>
    
  );
}

export default CategoryCard;

