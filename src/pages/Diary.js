//컴포넌트 생성 단축키 rsc 기억!!
import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Diary</h1>
    </div>
  );
};

export default Diary;
