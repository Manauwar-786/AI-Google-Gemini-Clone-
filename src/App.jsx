import { useState } from "react";
import { URL } from "./constants";
import Answer from "./components/Answer";

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(undefined);
  // const aksBtnHandler = () => {
  //   console.log(question)
  //}

  const payload = {
    "contents": [
      {
        "parts": [
          {
            "text": question
          }
        ]
      }
    ]
  };
  const askQuestion = async () => {
    
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    response = await response.json();
    let stringData = response.candidates[0].content.parts[0].text;
    stringData = stringData.split("* ");
    stringData = stringData.map((item) => item.trim());
    console.log(stringData);
    setResult(stringData);
  };
  return (
    <div className="grid grid-cols-5 h-screen ">
      <div className="col-span-1 bg-zinc-800"></div>
      <div className="col-span-4">
        <div className="container h-100 overflow-scroll">
          <div className="text-white py-15">
            <ul>
              {/* {result} */}
              {result &&
                result.map((item,index) => (
                  <li key={index+Math.random()} className="px-5 ">
                    <Answer ans={item} totalResult={result.length} index={index} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="text-white bg-zinc-800 m-auto w-1/2 p-4 border-zinc-600 border-2 rounded-4xl flex ">
          <input
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-full outline-none text-lg"
            type="text"
            value={question}
            placeholder="Ask Anything"
          ></input>
          <button className="text-sm" onClick={askQuestion}>Ask</button>
        </div>
      </div>
    </div>
  );
}

export default App;
