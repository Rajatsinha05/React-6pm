import React, { FC } from "react";
import Button from "../components/Button";

const page: FC = () => {
  const showAlert = (): void => {
    alert("clicked");
  };
  return (
    <div>
      <h1>Home</h1>
      <Button title="test" content="testing" onClick={showAlert}/>
      {/* <Button title="" /> */}
    </div>
  );
};

export default page;
