import { Form, Header } from "semantic-ui-react"
import { useState } from "react"
import { Redirect, Link, useHistory } from "react-router-dom"
import Axios from "axios"

const OrderForm = ({createOrder}) => {

  const [customerName, setCustomerName] = useState("")
  const [jobName, setJobName] = useState("")
  const [poNumber, setPoNumber] = useState("")
  const [shippingAddress, setShippingAddress] = useState("")
  const [shippingCity, setShippingCity] = useState("")
  const [shippingState, setShippingState] = useState("")
  const [shippingZip, setShippingZip] = useState("")

  const history = useHistory()

  const handleSubmit = () => {
    console.log(customerName)
    createOrder({
      customer_name: customerName,
      job_name:jobName,
      po_number:poNumber,
      shipping_address:shippingAddress,
      shipping_state:shippingState,
      shipping_city:shippingCity,
      shipping_zip:shippingZip
    })
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
        value= {jobName} 
        placeholder = "Job Name"
        onChange = {(e)=>{setJobName(e.target.value)}}
        />
         <Form.Input
        label= "PO Number"
        value= {poNumber}
        placeholder = "PO Number"
        onChange = {(e)=>{setPoNumber(e.target.value)}}
        />
         <Form.Input
        label= "Shipping Address"
        value= {shippingAddress}
        placeholder = "Shipping Address"
        onChange = {(e)=>{setShippingAddress(e.target.value)}}
        />
         <Form.Input
        label= "City"
        value= {shippingCity} 
        placeholder = "City"
        onChange = {(e)=>{setShippingCity(e.target.value)}}
        />
         <Form.Input
        label= "State"
        value= {shippingState}
        placeholder = "State"
        onChange = {(e)=>{setShippingState(e.target.value)}}
        />
         <Form.Input
        label= "Zip Code"
        value= {shippingZip}
        placeholder = "Zip Code"
        onChange = {(e)=>{setShippingZip(e.target.value)}}
        />

        <Form.Button>Create Quote</Form.Button>
      </Form>
    </>
  )

}

export default OrderForm