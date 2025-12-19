import React from 'react'
import classes from './CategoryCard.module.css'
import { Link } from 'react-router-dom'

function CategoryCard({ data }) {
  console.log(data)

  return (
    <section className={classes.category_card}>
      <Link to={`/category/${data.name}`}>
          <h2>{data.title}</h2>
        <img src={data.imgLink} alt={data.title} />
        <p>shop now</p> 
      </Link>
    </section>
  )
}

export default CategoryCard

