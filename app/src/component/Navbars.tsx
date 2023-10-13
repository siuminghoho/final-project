import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
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
