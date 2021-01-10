import { Header } from "semantic-ui-react"
import { useParams } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react"
import { OrdersContext } from "../../providers/OrdersProvider"

const OrderEdit = () => {

  let {order_id} = useParams()
  const {orders, loading} = useContext(OrdersContext)
  const [order, setOrder] = useState({})

  useEffect(()=>{
    if(loading === false) {
    const order = orders.find(x => x.id == order_id)
    // debugger
    setOrder(order)
    console.log(order)
    }
  },[loading])

  const renderOrder = () => {
    if (loading){
      return (
        <Header>Loading</Header>
      )
    }
    return (
      <>
    <Header>Job Name: {order.job_name}</Header>
    <Header>Customer Name: {order.customer_name}</Header>
    <Header>PO number: {order.po_number}</Header>
    <Header>Price Tier: {order.price_tier}</Header>
    <Header>Shipping Address: {order.shipping_address}</Header>
    <Header>City: {order.shipping_city}</Header>
    <Header>State: {order.shipping_state}</Header>
    <Header>Zip Code: {order.shipping_state}</Header>
    </>
    )
  }

  return (
    <>
    <Header>You're editing order {order_id}</Header>
    {renderOrder()}
    </>
  )
}

export default OrderEdit