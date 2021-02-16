import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../providers/AuthProvider"
import Axios from "axios"

const FetchUser = (props) => {

  const [checkToken, setCheckToken] = useState(false)

  const {authenticated, setUser} = useContext(AuthContext)

  useEffect(()=>{
    getUser()
  },[])

  const getUser = async () => {
    if (authenticated || !localStorage.getItem('access-token')) {
      setCheckToken(true)
      return; 
    }
    
    try {
      const res = await Axios.get("/api/auth/validate_token")
      console.log(res.data.data)
      setUser(res.data.data)
    } catch (err) {
      console.log(err)
    } finally {
      setCheckToken(true)
    }
  }

  return checkToken ? props.children : null
}

export default FetchUser