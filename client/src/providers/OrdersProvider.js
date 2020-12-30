import React, { useState } from "react"

export const OrdersContext = React.createContext()

const OrdersProvider = () => {


  const [orders, setOrders] = useState({})

  const ordersInfo = {
    ...orders,
    setOrders
  }

  return(
    <OrdersContext.Provider value= {ordersInfo}>
      {props.children}
    </OrdersContext.Provider>
  )

}

export default OrdersProvider