import { Form, Header } from "semantic-ui-react"
import { useState } from "react"
import { Redirect, Link, useHistory } from "react-router-dom"

const OrderForm = (props) => {

  const [customerName, setCustomerName] = useState("")

  const history = useHistory()

  const handleSubmit = () => {
    console.log(customerName)
    createOrder({
      customer_name:customerName
    })
    history.push("/order/2")
  }

  const createOrder = (newOrder) => {
    console.log(newOrder)
  }

  return (

    <>
    <Header>Order Creation Form</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
        label= "Customer Name"
        value= {customerName} 
        placeholder = "Customer Name"
        onChange = {(e)=>{setCustomerName(e.target.value)}}
        />
         <Form.Input
        label= "Job Name"
        value= "" 
        placeholder = "Job Name"
        />
         <Form.Input
        label= "PO Number"
        value= "" 
        placeholder = "PO Number"
        />
         <Form.Input
        label= "Price Tier"
        value= "" 
        placeholder = "Price Tier"
        />
         <Form.Input
        label= "Shipping Address"
        value= "" 
        placeholder = "Shipping Address"
        />
         <Form.Input
        label= "City"
        value= "" 
        placeholder = "City"
        />
         <Form.Input
        label= "State"
        value= "" 
        placeholder = "State"
        />
         <Form.Input
        label= "Zip Code"
        value= "" 
        placeholder = "Zip Code"
        />

        <Form.Button>Create Quote</Form.Button>
      </Form>
    </>
  )

}

export default OrderForm