import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { option } from "yargs";

function Checkbox(props: {
  option_name: string;
  option_id: number;
  option_price: number;
  trackHandler: (
    option_name: string,
    option_id: number,
    option_price: number,
    isChecked: boolean
  ) => void;
}) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          aria-label="Checkbox for following text input"
          onChange={(e) =>
            props.trackHandler(
              props.option_name,
              props.option_id,
              props.option_price,
              e.target.checked
            )
          }
        />
      </InputGroup>
    </>
  );
}

export default Checkbox;
