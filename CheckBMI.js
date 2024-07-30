 


import React, { useState } from 'react';
import p1 from "./BMI+Scale.jpg";

const CheckBMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmiValue = weight / (height * height);
      setBMI(bmiValue.toFixed(1));  
    } else {
      setBMI(null);
    }
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const bmiCategory = () => {
    if (bmi === null) {
      return {
        category: '',
        style: {}
      };
    } else if (bmi < 18.5) {
      return {
        category: 'Underweight',
        style: { color: 'blue' }
      };
    } else if (bmi >= 18.5 && bmi < 25) {
      return {
        category: 'Normal weight',
        style: { color: 'green' }
      };
    } else if (bmi >= 25 && bmi < 30) {
      return {
        category: 'Overweight',
        style: { color: 'orange' }
      };
    } else if (bmi >= 30) {
      return {
        category: 'Obesity',
        style: { color: 'red' }
      };
    } else {
      return {
        category: '',
        style: {}
      };
    }
  };

  const handleClick = (e) => {
    e.preventDefault();  

    
    calculateBMI();
  };

  return (
    <center>
      <div className='bmi'>
        <div className="App1">
          <h1 style={{ color: "white" }}>BMI Calculator</h1>
          <hr />
          <div className="input-group">
            <h4 style={{ color: "white" }}>Weight (KG): </h4>
            <input type="number" value={weight} onChange={handleWeightChange} style={{ padding: "10px", borderRadius: '20px', color: "black" }} />

            <h4 style={{ color: "white" }}>Height (M): </h4>
            <input type="number" value={height} onChange={handleHeightChange} style={{ padding: "10px", borderRadius: '20px', color: "BLACK" }} />
          </div>

          <button className='maa' onClick={handleClick} style={{ width: '200px', borderRadius: '10px', backgroundImage: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)", color: "black" }}>Calculate BMI</button>

          {bmi !== null && (
            <div className="result1">
              <h2 style={{ color: "white" }}>Your BMI: {bmi}</h2>
              <h2 style={bmiCategory().style}>Category: {bmiCategory().category}</h2>
              <img src={p1} alt="BMI Scale" />
            </div>
          )}
        </div>
      </div>
    </center>
  );
};

export default CheckBMI;

