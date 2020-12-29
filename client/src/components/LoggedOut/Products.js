import { useState, useEffect } from "react"
import Axios from "axios"
import { Header, List } from "semantic-ui-react"
import Product from "./Product"
import LoaderFile from "../LoaderFile"

const Products = () => {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = async () => {
    try{
      let res = await Axios.get("/api/products")
      setProducts(res.data)
      setLoading(false)
      console.log("res.data: ", res.data)
      
      
    }
    catch(err){
      console.log(err)
      setError(true)
    }
    // finally {
    //   setLoading(false)
    //   // console.log("products: ", products)
    // }
  }

  const renderProducts = () => {
    console.log(loading)
    console.log("products: ", products)
    return products.map((p)=>{
      return(
        <>
          <List divided verticalAlign='middle'>
            <Product {...props}/>
          </List>
        </>
      )
    })
  }
  
  if (loading) { 
      return (
        <LoaderFile />
      )
    }
    if (error) {
      return <h1>Error</h1>
    }

  return(
    <>
      <Header>Products Search Page</Header>
      {renderProducts()}
      
    </>
  )

}

export default Products