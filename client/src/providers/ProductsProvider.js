import React, { useState, useEffect, useContext } from "react"
import Axios from "axios"
import { AuthContext } from "./AuthProvider"

export const ProductsContext = React.createContext()

const ProductsProvider = (props) => {

  const {authenticated} = useContext(AuthContext)

  const [liveOrder, setLiveOrder] = useState("new_quote")

  useEffect(()=>{
    if(authenticated){
    get_order_line_items()
  }
  },[authenticated])

  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [errorProducts, setErrorProducts] = useState(false)

  const get_order_line_items = async () => {
    try {
      // debugger
      let res = await Axios.get(`/api/product_info/${liveOrder}`)
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
    get_order_line_items,
    liveOrder, 
    setLiveOrder
  }

  return (
    <ProductsContext.Provider value = {productInfo}>
      {props.children}
    </ProductsContext.Provider>
  )

}

export default ProductsProvider