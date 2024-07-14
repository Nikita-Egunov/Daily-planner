import React, { useState } from 'react';
import './App.css';
import TextInputComponent from './Components/CreateNewPlan';
import './Css/Main.css';
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";





function App() {
  const [showTextInput, setShowTextInput] = useState(false);
  const [plans, setPlans] = useState([]);

  const handleButtonClick = () => setShowTextInput(true);

  const handleSavePlan = (text) => {
    if (text.trim() !== '') { // Проверка на пустое значение
      const newPlan = { text, isChecked: false };
      setPlans([...plans, newPlan]);
    }
    setShowTextInput(false);
  };

  const handleEditPlan = (index) => {
    setShowTextInput(true);
  };

  const handleDeletePlan = (index) => {
    const updatedPlans = plans.filter((_, i) => i !== index);
    setPlans(updatedPlans);
  };

  const handleCheckboxChange = (index) => {
    const updatedPlans = plans.map((plan, i) => 
      i === index ? { ...plan, isChecked: !plan.isChecked } : plan
    );
    setPlans(updatedPlans);
  };

  return (
    <div className="App">
      <div className="content"></div>
      <div>
        {!showTextInput ? (
          <button className="fixed-button" onClick={handleButtonClick} aria-label="Add new plan">
            <IoIosAddCircle className='icon'/>
          </button>
        ) : (
          <TextInputComponent onSave={handleSavePlan}/>
        )}
        {!showTextInput && plans.map((plan, index) => (
          <div key={index} className='letter' style={{ textDecoration: plan.isChecked ? 'line-through' : 'none' }}>
            {plan.text}
            {plan.text.trim() !== '' && (
              <label>
                <input
                  type='checkbox'
                  checked={plan.isChecked}
                  onChange={() => handleCheckboxChange(index)}
                  aria-label="Mark as completed"
                />
              </label>
            )}
            {plan.text.trim() !== '' && (
              <div><button className='editButton' onClick={() => handleEditPlan(index)}><FaEdit  className='icon'/></button></div>
            )}
            {plan.text.trim() !== '' && (
              <div><button className='editButton' onClick={() => handleDeletePlan(index)}><FaTrashAlt className='icon'/></button></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;