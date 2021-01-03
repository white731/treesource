import { Header } from "semantic-ui-react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { OrdersContext } from "../../providers/OrdersProvider"

const OrderEdit = () => {

  let {id} = useParams()
  const {orders, loading} = useContext(OrdersContext)

  const selectedOrder = () => {
    if (loading === false) {
      // debugger
   let order = orders.find(x => x.id === id)
   console.log(order)
   return order
    }
  }

  return (
    <>
    <Header>You're editing order {id}</Header>
    <Header>Job Name: </Header>
  
    {selectedOrder()}
    </>

  )

}

export default OrderEdit