import { Col } from "react-bootstrap";

const Heading = () => {
  return (
    <Col md={6}>
      <div className="heading py-4 h-100  ">
        <h1 className="title fs-3 mb-4">
          Explore your <span className="blue">hobby</span> or{" "}
          <span className="purple">passion</span>
        </h1>
        <p className="fs-6 lead">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform.
        </p>
        <p className="fs-6 lead">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
      </div>
    </Col>
  );
};

export default Heading;
