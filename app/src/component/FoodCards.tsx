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
        <Card
          style={{ width: "100%", height: "50%", marginBottom: "50px" }}
          key={index}
        >
          <Card.Img
            className={styles.img}
            variant="top"
            src={`${props.sub_categories_food[0].img}`}
          />
          <Card.Body>
            <Card.Title>{food.name}</Card.Title>
            <div className={styles.title}>
              <h1>${food.price}</h1>
              {/* <h2>{food.id}</h2> */}
              <Button
                variant="primary"
                onClick={() =>
                  navigate("/itemDetail", {
                    state: {
                      menu_id: props.menu_id,
                      sub_category_id: props.sub_category_id,
                      sub_category_food_id: food.id,
                      isSet: false,
                      sub_category_food_name: food.name,
                      menu_price: food.price,
                      food_img: props.sub_categories_food[0].img,
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
