import React from "react";
import styled from "styled-components";
const Button = ({ type, bgcolor, color, label, radius, ...props }) => {
  return (
    <ButtonComponent
      type={type}
      bgcolor={bgcolor}
      color={color}
      radius={radius}
      {...props}
    >
      {label}
    </ButtonComponent>
  );
};
const ButtonComponent = styled.button`
  text-align: center;
  margin: 0 auto;
  display: flex;
  outline: none;
  border: none;
  font-size: 17px;
  color: ${(props) => (props.color ? props.color : "black")};
  padding: 16px 32px 16px 32px !important;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "gray")};
  border-radius: ${(props) => (props.radius ? props.radius : "0px")};
`;
export default Button;
