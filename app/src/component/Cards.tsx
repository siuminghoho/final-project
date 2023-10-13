import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Cards(props: { menu_id: number; menu_name: string }) {
  const navigate = useNavigate();

  return (
    <div
      className="cardItem"
      onClick={() =>
        navigate("/menu", {
          state: { menu_name: props.menu_name, menu_id: props.menu_id },
        })
      }
    >
      <Card style={{ width: "10rem", height: "10rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.menu_name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
