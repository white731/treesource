import { Header } from "semantic-ui-react"
import { useParams } from "react-router-dom"

const OrderEdit = () => {

  let {id} = useParams()

  const getOrderProperties = () => {
    
  }

  return (
    <>
    <Header>You're editing order {id}</Header>
    <Header>Job Name: </Header>
    </>

  )

}

export default OrderEdit