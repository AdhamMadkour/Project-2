import React from "react";
import CourseCard from "./CourseCard";
function CardList(props) {
  let courses = props.sample.map((course) => {
    return (
      <CourseCard
        title={course.title}
        image={course.image}
        author={course.author}
        price={course.price}
      ></CourseCard>
    );
  });
  return (
    <div className="Block">
      <div className="listdata">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <div className="courselist">{courses}</div>
    </div>
  );
}

export default CardList;
