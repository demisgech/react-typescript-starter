import { useState } from "react";
import Alert from "./Alert";
import Button from "../Button/Button";

function ShowAlert() {
  const [alerVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alerVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello World </Alert>
      )}

      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}

export default ShowAlert;
