import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

//Components
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <div className="App">
      <MyHeader
        headText={"App"}
        leftChild={
          <MyButton
            text={"왼쪽버튼"}
            onClick={() => window.alert("왼쪽클릭!")}
          />
        }
        rightChild={
          <MyButton
            text={"오른쪽버튼"}
            onClick={() => window.alert("오른쪽클릭!")}
          />
        }
      ></MyHeader>
      <BrowserRouter>
        {/* 페이지 어디에서든지 보이는 요소가 필요하면 Routes 바깥으로 위치시키면 된다. */}
        <h2>App.js</h2>

        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼클릭");
          }}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼클릭");
          }}
          type={"negative"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼클릭");
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/New" element={<New />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/Diary/:id" element={<Diary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
