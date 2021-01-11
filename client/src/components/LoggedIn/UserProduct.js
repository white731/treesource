import { List, Button, Image, Input, Form } from "semantic-ui-react"
import { useParams } from "react-router-dom"
import Axios from "axios"
import { useContext } from "react"
import { ProductsContext } from "../../providers/ProductsProvider"

const UserProduct = ({id,full_description, quantity_on_hand,sales_price}) => {

  const { order_id } = useParams()
  const {get_order_line_items} = useContext(ProductsContext)

  let newItem = {
    product_id:id, 
    quantity:10,
    price: sales_price
  }

  const handleClick = async() => {
    if (order_id === "new_quote") {
      alert("Create or select a quote before you add to an order")
    } else {
      // alert( `adding product ${id} to order ${order_id}`)
      try {
        let res = await Axios.post(`/api/orders/${order_id}/order_line_items`,newItem)
        console.log(res.data)
        get_order_line_items()
        // window.location.reload()
      } catch(err){
        console.log(err)
      }
    }
  }

  return (
    <List.Item style={{borderBottom: "1px solid black"}}>
      <List.Content floated='right' style={{alignSelf: "center"}}>    
        {quantity_on_hand}
        <Input style={{padding: "10px"}}></Input>
        <Button onClick ={handleClick}>add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>{full_description}</List.Content>
    </List.Item>
  )
}

export default UserProduct