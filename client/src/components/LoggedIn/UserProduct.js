import { List, Button, Image, Input, Form } from "semantic-ui-react"
import { useParams } from "react-router-dom"

const UserProduct = ({id,full_description, quantity_on_hand}) => {

  const { order_id } = useParams()

  const handleClick = () => {
    if (order_id === "new_quote") {
      alert("Create or select a quote before you add to an order")
    } else {
      alert( `adding to order ${order_id}`)
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