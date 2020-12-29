import { List, Button, Image } from "semantic-ui-react"

const Product = ({full_description, quantity_on_hand}) => {

  return (
    <List.Item key={id}>
      <List.Content floated='right'>
        {quantity_on_hand}
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>{full_description}</List.Content>
    </List.Item>
  )
}

export default Product