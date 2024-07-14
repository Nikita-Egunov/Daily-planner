import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "../Css/Main.css"

function TextInputComponent({ onSave }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    onSave(inputValue);
    setInputValue(''); // Очистить поле ввода после сохранения
  };

  return (
    <div>
      <input
        className='NewPlan'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Write you plan here"
      />
      {inputValue && (
        <button className="fixed-button" onClick={handleSaveClick}><IoIosArrowDropdownCircle className='icon'/></button>
      )}
    </div>
  );
}

export default TextInputComponent;