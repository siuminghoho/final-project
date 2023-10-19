import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./FoodCards.module.css";
import { useNavigate } from "react-router-dom";
import { Food } from "../API/menuAPI";

function FoodCards(props: {
  menu_id: number;
  sub_category_id: number;
  sub_categories_food: Array<Food>;
}) {
  const navigate = useNavigate();
  return (
    <>
      {props.sub_categories_food.map((food, index) => (
        <Card style={{ width: "100%", marginBottom: "50px" }} key={index}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{food.name}</Card.Title>
            <div className={styles.title}>
              <h1>${food.price}</h1>
              <Button
                variant="primary"
                onClick={() =>
                  navigate("/foodDetail", {
                    state: {
                      menu_id: props.menu_id,
                      sub_category_id: props.sub_category_id,
                      // sub_category_food_id: food.sub_category_food_id,
                      sub_category_food_name: food.name,
                      menu_price: food.price,
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
