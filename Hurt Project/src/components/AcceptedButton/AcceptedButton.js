import React from "react";
import { Button } from "./style";


 function AcceptedButton ({text,type, className, onClick}) {
  const allButtonHandler = () => {
    onClick && onClick();
  }
  return (
    <Button className={className} type={type} onClick={allButtonHandler}>{text}</Button>
  )
};

export {
  AcceptedButton,
};