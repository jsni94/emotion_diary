import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

import RouteTest from "./components/RouteTest";

function App() {
  return (
    <BrowserRouter>
      {/* 페이지 어디에서든지 보이는 요소가 필요하면 Routes 바깥으로 위치시키면 된다. */}
      <h2 className="App">App.js</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Diary/:id" element={<Diary />} />
      </Routes>
      <RouteTest></RouteTest>
    </BrowserRouter>
  );
}

export default App;
