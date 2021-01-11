import { Header, Card } from "semantic-ui-react"
import { Link, useHistory } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { ProductsContext } from "../../providers/ProductsProvider"

const Order = ({customer_name, id}) => {

const {setLiveOrder} = useContext(AuthContext)
const {setLiveOrderForProducts} = useContext(ProductsContext)
const history = useHistory()
  
const getLiveOrder = () => {
  setLiveOrder(id)
  history.push(`/order/${id}`)
}

  return(
    <Card onClick={getLiveOrder}>
      <Card.Header>
        {customer_name}
      </Card.Header>
    </Card>
  )

}

export default Order  