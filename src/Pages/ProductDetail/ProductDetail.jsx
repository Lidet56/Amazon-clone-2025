import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'


function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    
    <LayOut>
      <section className={classes.pd_detail_continer}>
      <ProductCard product={product} flex={true}
      renderDesc={true}
      renderAdd={true}/>
      </section>
    </LayOut>
    
  )
}

  export default ProductDetail