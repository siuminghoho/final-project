import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./FoodCards.module.css";
import { useNavigate } from "react-router-dom";

function FoodCards(props: {
  menu_id: number;
  sub_category_id: number;
  sub_categories_food: Array<{
    sub_category_food_id: number;
    sub_category_food_name: string;
  }>;
}) {
  const navigate = useNavigate();
  return (
    <>
      {props.sub_categories_food.map((food) => (
        <Card
          style={{ width: "100%", marginBottom: "50px" }}
          key={food.sub_category_food_id}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{food.sub_category_food_name}</Card.Title>
            <div className={styles.title}>
              <h1>$??</h1>
              <Button
                variant="primary"
                onClick={() =>
                  navigate("/foodDetail", {
                    state: {
                      menu_id: props.menu_id,
                      sub_category_id: props.sub_category_id,
                      sub_category_food_id: food.sub_category_food_id,
                      sub_category_food_name: food.sub_category_food_name,
                    },
                  })
                }
              >
                +
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default FoodCards;
