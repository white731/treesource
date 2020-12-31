import UserProducts from "./UserProducts"
import { Segment, Grid, Divider, Header, Button } from "semantic-ui-react"
import OrderForm from "./OrderForm"
import { useParams, useHistory } from "react-router-dom"
import Orders from "./Orders"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const OrderMain = () => {

  let {id} = useParams()
  const {setLiveOrder} = useContext(AuthContext)
  const history = useHistory()

  const newOrderScreen = () => {
    setLiveOrder("new_quote")
    history.push("/order/new_quote")
  }

  const orderScreen=()=>{
    if (id === "new_quote"){
      return(
        <>
          <Header>Select from a quote below or create a new quote</Header>
          <Orders />
        </>
      )
    } 
  return (
    <>
    <Header>You're currently editing quote {id}</Header>
    <Button onClick={newOrderScreen}>Create New Order</Button>
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