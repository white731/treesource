import React, { useState, useEffect } from "react"
import Axios from "axios"

export const OrdersContext = React.createContext()

const OrdersProvider = (props) => {

  

  const ordersInfo = {
   
  }

  return(
    <OrdersContext.Provider value = {ordersInfo}>
      {props.children}
    </OrdersContext.Provider>
  )

}

export default OrdersProvider