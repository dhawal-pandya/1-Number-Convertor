import React, { useState } from 'react';
import useConvertToDecimal from './Utils/useConvertToDecimal';
import useConvertToRoman from './Utils/useConvertToRoman';
import useConvertToHex from './Utils/useConvertToHexadecimal';
import useConvertToCustomBase from './Utils/useConvertToCustomBase';

import {
  isValidPositiveNumber,
  isValidRomanNumeral,
  isValidHexNumber,
} from './Utils/checker';
import Cursor from './Components/Cursor';

const App = () => {
  const [input, setInput] = useState('');

  const [romanClicked, setRomanClicked] = useState(0);

  const [inType, setInType] = useState('Decimal');
  const [outType, setOutType] = useState('');

  const [base, setBase] = useState(10);
  const [output, setOutput] = useState('');

  const decimalClickHandler = (e) => {
    e.preventDefault();
    let temp = useConvertToDecimal(input);
    setOutput(temp);
    setOutType('Decimal');
  };
  const romanClickHandler = (e) => {
    e.preventDefault();
    let temp = useConvertToRoman(input);
    if (temp.length < 15) {
      setOutput(temp);
      setOutType('Roman');
    } else if (temp.length > 15 && romanClicked > 0) {
      setOutput(temp);
      setOutType('Roman');
    } else {
      setRomanClicked(romanClicked + 1);
      setOutput(
        `Don't give big numbers to Romans, they cannot handle it. 
        Just click again for the actual number though.`
      );
      setOutType('Roman');
    }
  };
  const hexadecimalClickHandler = (e) => {
    e.preventDefault();
    let temp = useConvertToHex(input);
    setOutput(temp);
    setOutType('Hexadecimal');
  };
  const customClickHandler = (e) => {
    e.preventDefault();
    let temp = useConvertToCustomBase(input, base);
    setOutput(temp);
    setOutType(`Custom Base ${base}`);
  };

  const inputChangeHandler = (e) => {
    let input = e.target.value;
    setInput(input);

    let inType = typeChecker(input);

    setInType(inType);
  };

  const typeChecker = (str) => {
    if (isValidPositiveNumber(str)) return 'Decimal';
    if (isValidHexNumber(str)) return 'Hexadecimal';
    if (isValidRomanNumeral(str)) return 'Roman';
    return 'Not a valid number';
  };

  return (
    <div className='App'>
      <Cursor />
      <div className='title'>Δ #</div>
      <div className='userNumber'>
        <input type='text' onChange={inputChangeHandler} value={input} />
        <div className='type'>{inType}</div>
      </div>
      <div className='buttons'>
        <button className='sButton' onClick={decimalClickHandler}>
          <span className='text'>Decimal</span>
        </button>
        <button className='sButton' onClick={romanClickHandler}>
          <span className='text'>Roman</span>
        </button>
        <button className='sButton' onClick={hexadecimalClickHandler}>
          <span className='text'>Hexadecimal</span>
        </button>
        <div className='customBase'>
          <input
            className='customBaseInput'
            type='text'
            onChange={(e) => {
              setBase(e.target.value);
            }}
            value={base}
          />
          <button className='sButton' onClick={customClickHandler}>
            <span className='text'>Custom Base</span>
          </button>
        </div>
      </div>
      <div className='computedNumber'>
        <div className='output'>{output}</div>
        <div className='outType'>{outType}</div>
      </div>
      <div className='outro'>
        {`Made with ❤️ by `}
        <a href='https://dhawal-pandya.github.io/' target={'_blank'}>
          Dhawal Pandya
        </a>
      </div>
    </div>
  );
};

export default App;
