import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// import styled from "styled-components";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) =>
//       props.invalid ? "rgb(223, 159, 159)" : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  // 사용자가 입력한 값이 유효한지 그렇지 않은지 상태

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      // 칸이 비어있다면 유효하지 않은 값이므로 false로 바꿔준다
      return;
    }
    // 칸이 비어있을 때 아래 동작이 일어나지 않도록 return해줬다
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/* css module을 사용하여 동적 스타일링을 한 것.. form-control은 .은 특수기호를 인식하지 못하기 때문에 저 접근법을 사용함. !isValid일 때만 invalid를 추가해 준 거라고 보면 될듯 */}
        {/* className={!isValid && "invalid"}으로 할 수도 있음 */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
