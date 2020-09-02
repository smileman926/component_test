import React from "react";
import styled from "styled-components";

const Text = ({ title, color, id, ...props }) => {
  return <TextComponent id={id} color={color} {...props}>{title}</TextComponent>;
};
const TextComponent = styled.p`
  margin: 0;
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: 16px;
  font-weight: bold;
  transition: all .5s;
  letter-spacing: -1px;
  transition: color .2s ease-out;
`;
export default Text;
