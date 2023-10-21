import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./TestFoodCard.module.css";

function TestFoodCard(props: {
  food_price: number;
  food_img: string;
  food_name: string;
}) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img
        className={styles.img}
        variant="top"
        src={`${props.food_img}`}
      />
      {/* <Card.Body>
        <div className={styles.title}>
          <Card.Title>{props.food_name}</Card.Title>
        </div>
      </Card.Body> */}
    </Card>
  );
}

export default TestFoodCard;
