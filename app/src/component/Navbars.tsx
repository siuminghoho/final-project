import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbars.module.css";

function Navbars(props: {
  menu_id: number;
  sub_categories: Array<{
    id: number;
    name: string;
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
                key={category.id}
                onClick={() => props.onClick(category.id, category.name)}
                className={styles["nav-link-custom"]}
              >
                {category.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
