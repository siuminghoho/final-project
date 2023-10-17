import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Checkbox() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      </InputGroup>
    </>
  );
}

export default Checkbox;
