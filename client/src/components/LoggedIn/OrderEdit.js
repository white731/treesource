import { Header, Divider, List } from "semantic-ui-react"
import { useParams } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react"
import { OrdersContext } from "../../providers/OrdersProvider"
import Axios from "axios"

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

  useEffect(()=>{
    get_order_line_items()
  },[])

  const renderOrder = () => {
    if (loading){
      return (
        <Header>Loading</Header>
      )
    }
    if (order){
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
    return <Header>There's been an Error</Header>
  }

  const [products, setProducts] = useState([])

  const get_order_line_items = async () => {
    try {
      let res = await Axios.get(`/api/orders/${order_id}/order_line_items`)
      console.log(res.data)
      setProducts(res.data)
    } catch(err){
      console.log(err)
    }
  }

  const render_line_items = () => {
    return products.map((p)=>{
      return (
      <>
        <List.Item style={{borderBottom: "1px solid black"}}>
          <List.Content floated='left' style={{alignSelf: "center"}}>
          {p.product_id}
          </List.Content>
          <List.Content floated='right' style={{alignSelf: "center"}}>
          {p.quantity}
          </List.Content>
        </List.Item>
      </>
      )
    })
  }

  return (
    <>
    <Header>You're editing order {order_id}</Header>
    {renderOrder()}
    <Divider horizontal>Line Items</Divider>
    <List>
      {render_line_items()}
    </List>
    </>
  )
}

export default OrderEdit