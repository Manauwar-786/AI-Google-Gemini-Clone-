import React, { useEffect, useState } from "react";
import { checkHeading, replaceHeading } from "../helper";

function Answer({ ans,totalResult, index }) {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);
  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeading(ans));
    }
    console.log(ans);
  }, []);
  return (
    <div className="text-white">
      {index==0 && totalResult>1 ? 
        <span className="md:text-2xl text-lg ">{answer}</span>
       : heading ? (
        <span className="pt-2 text-sm md:text-lg block">{answer}</span>
      ) : (
        <span className="pl-5">{answer}</span>
      )}
    </div>
  );
}

export default Answer;
