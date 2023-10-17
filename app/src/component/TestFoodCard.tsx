import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TestFoodCard() {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default TestFoodCard;
