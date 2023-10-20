import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { option } from "yargs";

function Checkbox(props: {
  name: string;
  trackHandler: (name: string, isChecked: boolean) => void;
}) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          aria-label="Checkbox for following text input"
          onChange={(e) => props.trackHandler(props.name, e.target.checked)}
        />
      </InputGroup>
    </>
  );
}

export default Checkbox;
