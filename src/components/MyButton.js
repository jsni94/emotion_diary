import React from "react";

const MyButton = ({ text, type, onClick }) => {
  // 만약 타입이 정해진 것 외에 이상한 타입이 들어오면 디폴트로 반환하게 강제하는 삼항연산자. 그런데 여기 삼항연산자에선 왜 중괄호를 안쓸까?
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      //className은 문자열로 전달해야 하기 때문에 join메서드를 활용해서 띄어쓰기를 세퍼레이터로 문자열로 만들어준다.
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
