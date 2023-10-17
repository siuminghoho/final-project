import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.css";

function Cards(props: {
  menu_id: number;
  menu_name: string;
  menu_img: string;
}) {
  const navigate = useNavigate();

  return (
    <div
      className="cardItem"
      onClick={() =>
        navigate("/menu", {
          state: {
            menu_name: props.menu_name,
            menu_id: props.menu_id,
            menu_img: props.menu_img,
          },
        })
      }
    >
      <Card style={{ width: "10rem", height: "10rem" }}>
        <Card.Img
          variant="top"
          src={`./photo/${props.menu_img}`}
          style={{ width: "100%", height: "70%" }}
        />
        <Card.Body>
          <div className={styles.tittle}>
            <Card.Title>{props.menu_name}</Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
