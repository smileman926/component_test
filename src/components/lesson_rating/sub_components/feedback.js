import React from "react";
import styled from "styled-components";

const Text = ({ title, color }) => {
  return <TextComponent>{title}</TextComponent>;
};
const TextComponent = styled.p`
  margin: 0;
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: 16px;
  font-weight: bold;
  transition: all .5s;
  letter-spacing: -1px;
`;
export default Text;
