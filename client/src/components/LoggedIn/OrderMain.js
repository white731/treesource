import UserProducts from "./UserProducts"
import { Segment, Grid, Divider, Header, Button } from "semantic-ui-react"
import OrderForm from "./OrderForm"
import { useParams, useHistory } from "react-router-dom"
import Orders from "./Orders"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import OrderEdit from "./OrderEdit"

const OrderMain = () => {

  let {order_id} = useParams()
  const {setLiveOrder} = useContext(AuthContext)
  const history = useHistory()

  const newOrderScreen = () => {
    setLiveOrder("new_quote")
    history.push("/order/new_quote")
  }

  const orderScreen=()=>{
    if (order_id === "new_quote"){
      return(
        <>
          <Header>Select from a quote below or create a new quote</Header>
          <Orders />
        </>
      )
    } 
  return (
    <>
    <Button onClick={newOrderScreen}>Select New Quote</Button>
    <OrderEdit/>
    </>
  )
  }

  return(
  <Segment >
  <Grid columns={2} relaxed='very'>
    <Grid.Column style={{overflow: 'auto', maxHeight: "1000px" }}>
     <UserProducts/>
    </Grid.Column>
    <Grid.Column>
      {orderScreen()}
      {/* <h1>The Id param is equal to {id}</h1> */}
    </Grid.Column>
  </Grid>
  <Divider vertical></Divider>
</Segment>
  )
}

export default OrderMain