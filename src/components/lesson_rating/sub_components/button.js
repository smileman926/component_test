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
  width: 110px;
  height: 52px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  outline: none;
  border: none;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : "black")};
  padding: 16px 32px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "gray")};
  border-radius: ${(props) => (props.radius ? props.radius : "0px")};
  text-decoration: ${(props) => (props.txtdecoration ? props.txtdecoration : "none")};
  font-weight: ${(props) => (props.txtbold ? props.txtbold : "500")};
`;
export default Button;
