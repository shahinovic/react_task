import { Container, Row } from "react-bootstrap";
import {
  AddOurOwn,
  AppForm,
  Features,
  Heading,
  Testimonials,
} from "../../Components";
import { landing } from "../../../assets";

const Home = () => {
  return (
    <div className="home py-3 ">
      <Container>
        <Row className="g-4 py-5">
          <Heading />
          <AppForm />
          <div className="img">
            <img src={landing} className="w-100" alt="" />
          </div>
        </Row>
        <Features />
        <AddOurOwn />
        <Testimonials />
      </Container>
    </div>
  );
};

export default Home;
