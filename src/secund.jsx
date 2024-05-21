import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Button, Container, Title } from "./secund_style";

function timeListInfo() {
  const timeListText = [];
  for (let i = 0; i < timeListText.length; i++) {
    timeListText.push({
      id: i,
      text: "Timer:" + (i + 1),
    });
  }

  return timeListText;
}

export default function TimerComp() {
  const [startTime, setStartTime] = useState(null);
  const [liveTime, setLiveTime] = useState(null);
  const [List, setList] = useState(timeListInfo);
  const [text, setText] = useState("");

  const deleteTodo = (id) => {
    setList(List.filter((item) => item.id !== id));
  };

  useEffect(() => {
    handleStart();
    return () => clearInterval(secondSetting.current);
  }, []);

  const handleStart = () => {
    clearInterval(secondSetting.current);

    secondSetting.current = setInterval(() => {
      setLiveTime((prev) => prev + 1);
      console.log(startTime);
    }, 10);

  };

  const secondSetting = useRef();

  const handlePause = () => {
    clearInterval(secondSetting.current);
  };

  const handleReset = () => {
    clearInterval(secondSetting.current);
    setStartTime(Date.now);
    secondSetting.current = setInterval(() => {
      setLiveTime(Date.now());
    }, 10);
  };

  let timeShow = 0;

  if (startTime != null && liveTime != null) {
    timeShow = (liveTime - startTime) / 1000;
  }

  return (
    <Container>
      <div className="main">
        <Title>
          <h1>
            Timer:{" "}
            <div style={{ marginLeft: "30px", color: "#4451ad" }}>
              {timeShow}
            </div>
          </h1>
        </Title>
        <div className="btn">
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handlePause}>Pause</Button>
          <Button onClick={handleReset}>Reset</Button>
          <Button
            onClick={() => {
              setText("");
              setList([
                {
                  id: List.length,
                  text: timeShow.toFixed(2),
                },
                ...List,
              ]);
            }}
          >
            Add
          </Button>
        </div>
        <div className="result">
          <h2>Results:</h2>
          {List
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((item) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "7px 0",
                  color: "#31383f",
                  alignItems: "center",
                }}
                key={item.id}
              >
                <div>{item.id + 1}</div>
                {item.text}

                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    paddingRight: "10px",
                  }}
                >
                  <FaTrashAlt
                    style={{
                      color: "black",
                      fontSize: "17px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteTodo(item.id)}
                  />
                </button>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}
