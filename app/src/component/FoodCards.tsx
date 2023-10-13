import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FoodCards(props: {
  menu_id: number;
  sub_category_id: number;
  sub_categories_food: Array<{
    sub_category_food_id: number;
    sub_category_food_name: string;
  }>;
}) {
  return (
    <>
      {props.sub_categories_food.map((food) => (
        <Card style={{ width: "18rem" }} key={food.sub_category_food_id}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{food.sub_category_food_name}</Card.Title>
            <h1>$??</h1>
            <Button variant="primary">+</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default FoodCards;
