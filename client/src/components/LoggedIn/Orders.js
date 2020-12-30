import LoaderFile from "../LoaderFile"
import { useState, useEffect, useContext } from "react"
import Axios from "axios"
import { Header } from "semantic-ui-react"
import Order from "./Order"

const Orders = () => {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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
    </>
  )

}

export default Orders