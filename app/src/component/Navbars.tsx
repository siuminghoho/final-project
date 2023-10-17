import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbars.module.css";

function ColorSchemesExample(props: {
  menu_id: number;
  sub_categories: Array<{
    sub_category_id: number;
    sub_category_name: string;
  }>;
  onClick: (subCategoryId: number, subCategoryName: string) => void;
}) {
  return (
    <>
      <Navbar className={styles.navbar} bg="warning" data-bs-theme="dark">
        <Container className={styles.navbar}>
          <Nav className={styles["me-auto"]}>
            {props.sub_categories.map((category) => (
              <Nav.Link
                href=""
                key={category.sub_category_id}
                onClick={() =>
                  props.onClick(
                    category.sub_category_id,
                    category.sub_category_name
                  )
                }
                className={styles["nav-link-custom"]}
              >
                {category.sub_category_name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
