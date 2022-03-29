import React, { useContext, useEffect, useState } from "react";

//component
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";

import { DiaryStateContext } from "../App";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  //getMonth메서드를 사용하면 1월이 0월이된다(좀 이상함) 그래서 +1을 해줌
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  //헤더의 년월부분에 해당하는 리스트만 보여주어야 하기 때문에 curDate의 값이 변화할때만 useEffect를 일으켜준다.
  //urDate.getFullYear(), curDate.getMonth(), 뒤에 1을 붙여주면 해당 년월에 가장 처음날짜를 가지게 된다. 0을 붙여주면 마지막 날짜
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      console.log(new Date(lastDay));

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  //헤더부분 날짜를 늘리고 줄이는 함수
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
<h1>Home</h1>;
