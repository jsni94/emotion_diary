import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log(id);
  const mode = searchParams.get("mode");
  console.log(mode);

  return (
    <div>
      <h1>Edit</h1>
      <button
        onClick={() => {
          // setSearchParams안에는 객체를 반환해야함
          setSearchParams({ who: "JSI" });
        }}
      >
        qs 바꾸기
      </button>
      {/* onClick안에 콜백함수를 쓰는 이유? => 함수의 호출이 아닌 함수 자체를 전달해주기 위해서 인자가 있을 때는 콜백함수를 작성해주는 것이다!
      즉 전달인지가 있으면 콜백함수를 써줘야 한다? */}
      {/* 온클릭에만약 onclick={함수()} 이렇게 적으면 클릭할 때 함수가 실행되는게 아니라 화면 렌더링되면 바로 실행될거에요 함수() 
      이렇게 되면 바로 함수 실행문이라 onclick에는 함수를 선언한 변수의 이름만 넣어주거나 콜백함수로 만들어서 인자를 넣어주거나 */}
      <button onClick={() => navigate("/home")}>HOME으로 가기</button>
    </div>
  );
};

export default Edit;
