import { List, Button, Image, Input, Form } from "semantic-ui-react"
import { useParams } from "react-router-dom"
import Axios from "axios"
import { useContext, useState } from "react"
import { ProductsContext } from "../../providers/ProductsProvider"

const UserProduct = ({id, full_description, quantity_on_hand, sales_price}) => {

  const { order_id } = useParams()
  const {get_order_line_items} = useContext(ProductsContext)
  const [quantity, setQuantity] =useState()

  

  const handleClick = async() => {

    if (order_id === "new_quote") {
      alert("Create or select a quote before you add to an order")
    } else {
      try {
        let res = await Axios.post(`/api/orders/${order_id}/order_line_items`,{
          product_id:id, 
          quantity:quantity,
          price: sales_price
        })
        console.log(res.data)
        setQuantity("")
        get_order_line_items()
      } catch(err){
        console.log(err)
      }
    }
  }

  return (
    <List.Item style={{borderBottom: "1px solid black"}}>
      <List.Content floated='right' style={{alignSelf: "center"}}>    
        {quantity_on_hand}
        <Form onSubmit={handleClick}>
          <Form.Input 
            style={{padding: "10px"}}
            value = {quantity}
            placeholder="qty"
            onChange={(e)=>setQuantity(e.target.value)}
            />
          <Form.Button>add</Form.Button>
        </Form>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>{full_description}</List.Content>
    </List.Item>
  )
}

export default UserProduct