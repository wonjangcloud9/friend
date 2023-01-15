import main from "./main.jpg";
import "./App.css";
import { useState } from "react";

function App() {
  const [mainImg, setMainImg] = useState(true);
  const clickImg = () => {
    setMainImg(!mainImg);
  };

  return (
    <div className="App">
      <header className="App-header" onClick={clickImg}>
        <img
          src={main}
          className={mainImg ? "App-logo" : "App-logo2"}
          alt="logo"
          style={{
            width: "50vw",
            height: "50vw",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        {mainImg ? (
          <div>
            <p>안녕하세요. 제가 누군지 궁금하신가요?</p>
            <p>궁금하시면 이미지를 클릭하세요.</p>
          </div>
        ) : (
          <div>
            <p>저는 유승훈이에요.</p>
            <p>같이 놀러갈까요?</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
