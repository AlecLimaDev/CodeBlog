import loading from "../../assets/images/load.gif"
import { Container } from "./style"


const Loading = () => {
  return (
    <Container>
        <img src={loading} alt="loading..." />
    </Container>
  )
}

export default Loading