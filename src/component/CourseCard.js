import React from "react";

function CourseCard(props) {
  return (
    <div className="courseblock">
      <img src={[props.image]} alt={props.title}></img>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <h3>${props.price}</h3>
    </div>
  );
}

export default CourseCard;
