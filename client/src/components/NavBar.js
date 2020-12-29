import {Menu} from "semantic-ui-react"
import {Link, useHistory} from "react-router-dom"
import styled from "styled-components"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"


export default () => {

  const history = useHistory()

  const value = useContext(AuthContext)

  const userStatus = () => {
    if (value.authenticated){
      return (
      <>
        <Link to="/userproducts">
          <Menu.Item name='Products'/>
        </Link>
        <Menu.Menu position="right">
          <Menu.Item onClick={() => value.handleLogout(history)} name="Logout" />
          <Link to="/user">
            <MenuText content={value.email} />
          </Link>
        </Menu.Menu>
      </>
      )
    }
    return(
      <>
      <Link to="/products">
        <Menu.Item name='Products'/>
      </Link>
      <Menu.Menu position="right">
        <Link to="/login">
          <Menu.Item name='Login'/>
        </Link>
        <Link to="/register">
          <Menu.Item name='Register'/>
        </Link>
      </Menu.Menu>
      </>
    )
  }

  return (
    <Menu>
      <Link to="/">
        <Menu.Item name='Home'/>
      </Link>
      <Link to="/users">
        <Menu.Item name='All Users'/>
      </Link>
      {userStatus()}
    </Menu>
  )
}

const MenuText = styled(Menu.Item)`
align-self: center;
padding: 5px;
`
