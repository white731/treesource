import LoaderFile from "../LoaderFile"
import { useState, useEffect, useContext } from "react"
import Axios from "axios"
import { Header } from "semantic-ui-react"
import Order from "./Order"
import OrderForm from "./OrderForm"
import { AuthContext } from "../../providers/AuthProvider"

const Orders = (props) => {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const {setLiveOrder} = useContext(AuthContext)

  useEffect(()=>{
    getOrders()
  },[])

  const getOrders = async () => {
    try { 
      let res = await Axios.get("/api/orders")
      setOrders(res.data)

    } catch (err) {
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
      setLiveOrder(res.data.id)
    }
    catch(err){
      console.log(err)
    }
  }

  const renderOrders = ()=>{
    
    if (loading){ 
      return <LoaderFile/>
   }
    if (error){ return <p>Please login in to see this page.</p> }
    return orders.map((o, index)=>{

      return (
        <>
          <Order {...o}/>
        </>
      )
    })
  }

  return (
    <>
    <Header>Orders</Header>
    {renderOrders()}
    <OrderForm createOrder = {createOrder} />
    </>
  )

}

export default Orders