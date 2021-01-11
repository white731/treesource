import React, { useState, useEffect, useContext } from "react"
import Axios from "axios"
import { AuthContext } from "./AuthProvider"

export const ProductsContext = React.createContext()

const ProductsProvider = (props) => {

  const {authenticated, liveOrder} = useContext(AuthContext)

  useEffect(()=>{
    if(authenticated){
    get_order_line_items()
  }
  },[authenticated])

  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [errorProducts, setErrorProducts] = useState(false)
  // const [liveOrderForProducts, setLiveOrderForProducts] = useState("new_quote")

  const get_order_line_items = async () => {
    try {
      // debugger
      let res = await Axios.get(`/api/orders/${liveOrder}/order_line_items`)
      console.log(res.data)
      setProducts(res.data)

    } catch(err){
      console.log(err)
      setErrorProducts(true)

    } finally {
      setLoadingProducts(false)
    }
  }

  const productInfo = {
    products,
    setProducts,
    loadingProducts,
    errorProducts,
    get_order_line_items
  }

  return (
    <ProductsContext.Provider value = {productInfo}>
      {props.children}
    </ProductsContext.Provider>
  )

}

export default ProductsProvider