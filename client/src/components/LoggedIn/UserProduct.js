import { List, Button, Image, Input, Form } from "semantic-ui-react"

const UserProduct = ({id,full_description, quantity_on_hand}) => {

  return (
    <List.Item style={{borderBottom: "1px solid black"}}>
      <List.Content floated='right' style={{alignSelf: "center"}}>    
        {quantity_on_hand}
        <Input style={{padding: "10px"}}></Input>
        <Button>add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>{full_description}</List.Content>
    </List.Item>
  )
}

export default UserProduct