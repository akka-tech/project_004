import { useEffect } from "react"
import { useState } from "react"
import Product from "./Product"


function ProductList() {

    const [productList,setProduct]=useState()

    const getproduct=()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(response=>setProduct(response))
    }
    const displayProducts = ()=>{
        if(productList.length > 0){
            return productList.map((product , key)=>{
                return <Product product={product} key={key}/>
            })
        }

        return  <tr>
                <td colSpan={7}></td>
        </tr>
    }


    useEffect(()=>{
        getproduct()
        
    })
    

    return <div className="container">
    <h1>lise des produit :</h1>
        <table className="table">
            <thead>
                <tr>
                    <td>#ID</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>image</td>
                    <td>Rating</td>
                </tr>
               
            </thead>
            <tbody>
                {displayProducts()}
            </tbody>
        </table>
  </div>
  }
  
  export default ProductList