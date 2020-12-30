import { Header } from "semantic-ui-react"
import { Link } from "react-router-dom"

const Order = ({customer_name, id}) => {

  return(
    <Link to={`/order/${id}`}>
    {customer_name}
    </Link>
  )

}

export default Order  