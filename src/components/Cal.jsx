import React from "react";
import { useState } from "react";
import "./cal.css"

export const Cal = () => {
  const [result, setResult] = useState("");

  const handleclick = (e) => {
    setResult(result.concat(e.target.name));   //to take prevoius result also 
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0,result.length-1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());   //eval() function evaluates JavaScript code represented as a string//eval() method evaluates or executes an argument
    } catch (err) {
      setResult("Invalid ");
    }
  };
  return (
    <>
    <h3>CALCULATOR</h3>
      <div className="cal-container">

    <div>
        <input className="inptext" type="text" value={result} />
      
        </div>
      <div className="keypad">
        <button className="back" onClick={backspace} id="backspace">
          C
        </button>
        
<br/>
        <button name="+" onClick={handleclick}>
          +
        </button>
        <button name="-" onClick={handleclick}>
          -
        </button>
        <button name="*" onClick={handleclick}>
          *
        </button>
        <button name="/" onClick={handleclick}>
          %
        </button>
        <br/>
        <button name="7" onClick={handleclick}>
          7
        </button>
        <button name="8" onClick={handleclick}>
          8
        </button>
        <button name="9" onClick={handleclick}>
          9
        </button>
        <button name="0" onClick={handleclick}>
          0
        </button>
        <br/>
        <button name="6" onClick={handleclick}>
          6
        </button>
        <button name="5" onClick={handleclick}>
          5
        </button>
        <button name="4" onClick={handleclick}>
          4
        </button>
        <button onClick={clear} id="clear">
          Clear
        </button>
        <br/>
        <button name="3" onClick={handleclick}>
          3
        </button>
        <button name="2" onClick={handleclick}>
          {" "}
          2
        </button>
        <button name="1" onClick={handleclick}>
          1
        </button>
        
        <button name="=" onClick={calculate}>
          =
        </button>
      </div>
      </div>
    </>
  );
};
export default Cal;
