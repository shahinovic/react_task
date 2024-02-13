import { Container } from "react-bootstrap";
import {
  AddOurOwn,
  AppForm,
  Features,
  Footer,
  Heading,
  Testimonials,
} from "../../Components";

const Home = () => {
  return (
    <div className="home py-3 ">
      <Container>
        <Heading />
        <AppForm />
        <Features />
        <AddOurOwn />
        <Testimonials />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
