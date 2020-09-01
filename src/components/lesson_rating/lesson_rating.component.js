import React, { useState } from "react";
import styled from "styled-components";
import Button from "./sub_components/button";
import Text from "./sub_components/feedback";
import Star from "./sub_components/star";

const LessonRating = () => {
  const [starIdx, setStarIdx] = useState(0);
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleSubmitClick = (e) => {
    if (starIdx === 0) return;
    setSubmitStatus(true);
  };
  const handleEditClick = (e) => {
    setSubmitStatus(false);
    setStarIdx(0);
  };
  const handleStarClick = (e) => {
    e.preventDefault();
    if (submitStatus === true) return;
    const val = Number(e.target.id);
    setStarIdx(val);
  };
  const texts = [
    "😰 This hurts, we will work to make this better!",
    "😬 Thanks for letting us know we need to improve!",
    "🙂 Thanks for your feedback.",
    "🎉 Thanks, we are happy you find it useful.",
    "😍 Thanks, your opinion means a lot.",
  ];
  return (
    <LessonRatingPanel>
      {!submitStatus && (
        <Text title="how useful did you find this lesson?"></Text>
      )}
      {submitStatus && <Text title={texts[starIdx - 1]}></Text>}
      {texts.map((item, index) => (
        <Star
          key={index}
          id={index + 1}
          selected={starIdx >= `${index + 1}` && true}
          onClick={handleStarClick}
        ></Star>
      ))}
      {!submitStatus && (
        <Button
          type="button"
          label="Submit"
          bgcolor="#049B9B"
          color="#ffffff"
          radius="42px"
          onClick={handleSubmitClick}
        ></Button>
      )}
      {submitStatus && (
        <Button
          type="button"
          label="Edit"
          bgcolor="transparent"
          color="black"
          radius="42px"
          onClick={handleEditClick}
        ></Button>
      )}
    </LessonRatingPanel>
  );
};
const LessonRatingPanel = styled.div`
  margin: 2rem auto;
  text-align: center;
  width: 30%;
`;
export default LessonRating;
