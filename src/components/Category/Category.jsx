import React from 'react'
import {CategoryList} from './CatagoryFullInfos';
import CategoryCard from './CategoryCard';
import classes from './Category.module.css'

function Category() {
   
  return (
    
       <section className={classes.category_container}>
      {CategoryList?.map((info, i) => (
        <CategoryCard key={i} data={info} />
      ))}
    </section>
        
    )
}

export default Category