import { Segment, Dimmer, Loader, Image } from "semantic-ui-react"

const LoaderFile = () => {
  return(
    <Segment style={{minHeight: "1000px"}}>
      <Dimmer active>
        <Loader size='massive'>Loading Products...</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
  )

}

export default LoaderFile