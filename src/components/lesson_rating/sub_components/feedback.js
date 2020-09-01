import React from "react";
import styled from "styled-components";

const Text = ({ title, color }) => {
  return <TextComponent>{title}</TextComponent>;
};
const TextComponent = styled.p`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: 17px;
  font-weight: 700;
`;
export default Text;
