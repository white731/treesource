import LoaderFile from "../LoaderFile"
import { useState, useEffect, useContext } from "react"
import Axios from "axios"
import { Header } from "semantic-ui-react"
import Order from "./Order"
import OrderForm from "./OrderForm"
import { AuthContext } from "../../providers/AuthProvider"
import { OrdersContext } from "../../providers/OrdersProvider"

const Orders = (props) => {

  const {createOrder,loading,error,orders, hello} = useContext(OrdersContext)

  const renderOrders = ()=>{
    
    if (loading){ 
      return <LoaderFile/>
   }
    if (error){ return <p>Please login in to see this page.</p> }
    return orders.map((o, index)=>{

      return (
          <Order key={index} {...o}/>
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