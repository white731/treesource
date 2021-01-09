import { Header } from "semantic-ui-react"
import { useParams } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react"
import { OrdersContext } from "../../providers/OrdersProvider"

const OrderEdit = () => {

  let {id} = useParams()
  const {orders, loading} = useContext(OrdersContext)
  const [order, setOrder] = useState({})

  useEffect(()=>{
    if(loading === false) {
    const order = orders.find(x => x.id == id)
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
        <Header>Job Name:</Header>
    )
  }

  return (
    <>
    <Header>You're editing order {id}</Header>
    {renderOrder()}
    </>
  )
}

export default OrderEdit