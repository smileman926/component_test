import React from "react";
import styled from "styled-components";
import StarReward from "./../svgs/star_reward.svg";
import StarDisabled from "./../svgs/star_disabled.svg";

const Star = ({ id, selected, onClick }) => {
  return (
    <>
      {selected && (
        <StarComponent
          id={id}
          src={StarReward}
          onClick={onClick}
        ></StarComponent>
      )}
      {!selected && (
        <StarComponent
          id={id}
          src={StarDisabled}
          onClick={onClick}
        ></StarComponent>
      )}
    </>
  );
};
const StarComponent = styled.img`
  padding: 5px;
`;
export default Star;
