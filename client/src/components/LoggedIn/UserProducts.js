import { useState, useEffect } from "react"
import Axios from "axios"
import { Header, List, Button, Input, Form, Grid, Segment, Divider } from "semantic-ui-react"
import LoaderFile from "../LoaderFile"
import UserProduct from "./UserProduct"

const UserProducts = () => {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = async () => {
    try{
      let res = await Axios.get("/api/userproducts")
      setProducts(res.data)
      console.log("res.data: ", res.data)
      
      
    }
    catch(err){
      console.log(err)
      setError(true)
    }
    finally {
      setLoading(false)
    }
  }

  const renderProducts = () => {
    console.log(loading)
    console.log("products: ", products)
    return products.map((p)=>{
      return(
        <>
          <List divided verticalAlign='middle'>
            <UserProduct {...p}/>
          </List>
        </>
      )
    })
  }
  
  if (loading) { 
      return (
        <LoaderFile />
      )
    }
    if (error) {
      return <h1>Error</h1>
    }

  return(
    <>
      <Header>Products Search Page</Header> 
        <Form>
        <Input placeholder="Search Here"/>
        </Form>
          {renderProducts()}
    </>
  )

}

export default UserProducts