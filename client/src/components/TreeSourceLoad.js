import { Segment} from "semantic-ui-react"
import styled from 'styled-components'
import treesourceLogo from '../svg_files/graphic-test3-01.svg'

const TreeSourceLoad = () => {
  return(
    <div style={{minHeight: "100vh", maxWidth: "100px" , margin:"auto",  borderStyle:"none"}}>
      <Div>
        <img src={treesourceLogo}/>
        <Font>Loading...</Font>
      </Div>
    </div>
  )
}

export default TreeSourceLoad

const Div = styled.div`
  margin:auto;
  text-align: center;
  margin-top: 300px;
`

const Font = styled.p`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`