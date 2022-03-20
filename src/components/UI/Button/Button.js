// import styled from "styled-components";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
// 태그가 지정된 탬플릿리터럴, 백틱 사이에 style을 써놓으면 이 컴포넌트에만 적용되는 style을 만들 수 있다. styled compnenets가 동적으로 고유한 클래스 명를 생성해 주기 때문. styled-componenets를 사용한 예이다.

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {/* css module을 사용하면 className을 {}로 감싸고 styles.(module.css파일의 클래스명)으로 써야 한다 이렇게 하면 Button(css파일명).button(class명)__고유값(랜덤) 이라는 클래스를 얻음. 
      css파일과 styled 컴포넌트의 장점만을 합친 상태라고 볼 수 있다.*/}
      {props.children}
    </button>
  );
};

export default Button;
