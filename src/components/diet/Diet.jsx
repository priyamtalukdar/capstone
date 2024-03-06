import React from "react";
import "./Diet.css";
const Diet = () => {
  return (
    <div className="diet-container">
      <h1>Diet Page</h1>
      <div className="diet-content">
        <h2>Sample Diet Plan</h2>
        <p>Here's a sample diet plan for a day:</p>
        <ul>
          <li>Breakfast: Oatmeal with fruits</li>
          <li>Snack: Greek yogurt with almonds</li>
          <li>Lunch: Grilled chicken salad</li>
          <li>Snack: Apple slices with peanut butter</li>
          <li>Dinner: Baked salmon with quinoa and vegetables</li>
          <li>Snack: Carrot sticks with hummus</li>
        </ul>
      </div>
    </div>
  );
};

export default Diet;
