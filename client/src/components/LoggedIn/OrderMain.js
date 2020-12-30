import UserProducts from "./UserProducts"
import { Segment, Grid, Divider } from "semantic-ui-react"
import OrderForm from "./OrderForm"
import { useParams } from "react-router-dom"
import Orders from "./Orders"

const OrderMain = () => {

  let {id} = useParams()

  const orderScreen=()=>{
    if (id === "new_quote"){
      return(
        <>
          <h1>Order has a param of {id}</h1>
          <Orders/>
          <OrderForm/>
          
        </>
      )
    } 
  return <h1>Order has param that is {id}</h1>
  }

  return(
  <Segment>
  <Grid columns={2} relaxed='very'>
    <Grid.Column>
     <UserProducts/>
    </Grid.Column>
    <Grid.Column>
      {orderScreen()}
      {/* <h1>The Id param is equal to {id}</h1> */}
    </Grid.Column>
  </Grid>
  <Divider vertical>And</Divider>
</Segment>
  )
}

export default OrderMain