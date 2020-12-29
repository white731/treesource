import { List, Button, Image } from "semantic-ui-react"

const Product = ({plantName}) => {

  return (
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>{plantName}</List.Content>
    </List.Item>
  )
}

export default Product