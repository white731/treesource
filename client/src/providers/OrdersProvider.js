import React, { useState, useEffect, useContext } from "react"
import Axios from "axios"
import { AuthContext } from "./AuthProvider"

export const OrdersContext = React.createContext()

const OrdersProvider = (props) => {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  // const {setLiveOrder} = useContext(AuthContext)

  const {authenticated} = useContext(AuthContext)

  useEffect(()=>{
    if(authenticated){
    getOrders()
  }
  },[authenticated])

  const getOrders = async () => {
    
    console.log(authenticated)
    try { 
      let res = await Axios.get("/api/orders")
      setOrders(res.data)

    } catch (err) {
      // debugger
      console.log(err)
      setError(true)

    } finally {
      setLoading(false)
    }
  }
  
  const createOrder = async (newOrder) => {
    console.log(newOrder)
    try{
      // debugger
      let res = await Axios.post(`/api/orders`,newOrder)
      console.log("res: ",res.data)
      setOrders([...orders, res.data])
      console.log(res.data.id)
      // setLiveOrder(res.data.id)
    }
    catch(err){
      console.log(err)
    }
  }

  const hello = () => {
    return alert("hello")
  }

  const ordersInfo = {
    hello,
    loading,
    error,
    createOrder,
    orders
  }

  return(
    <OrdersContext.Provider value = {ordersInfo}>
      {props.children}
    </OrdersContext.Provider>
  )

}

export default OrdersProvider