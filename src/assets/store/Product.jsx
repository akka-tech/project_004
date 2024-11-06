/* eslint-disable react/prop-types */


import Rating from "./Rating"


export default function Product({product}) {
   console.log(product)
  return (
    <tr>
    <td>{product.id}</td>
    <td>{product.title}</td>
     <td>{product.price}</td>
     <td>{product.description}</td>
     <td>{product.category}</td>
     <td><img width={250} src={product.image} alt="image" /></td>
    <td > <Rating rate={product.rating.rate}/></td>
 </tr>
  )
}