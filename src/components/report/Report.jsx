import React from "react";
import { useHistory } from "react-router-dom";
import "./Report.css";

const Report = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the "Diet" page
    history.push("/diet");
  };

  return (
    <div className="form-container">
      <h1>Test Report</h1>
      <form className="diet-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="test1">Test 1:</label>
          <input type="number" id="test1" name="test1" />
        </div>
        <div className="form-group">
          <label htmlFor="test2">Test 2:</label>
          <input type="number" id="test2" name="test2" />
        </div>
        <div className="form-group">
          <label htmlFor="test3">Test 3:</label>
          <input type="number" id="test3" name="test3" />
        </div>
        <div className="form-group">
          <label htmlFor="test4">Test 4:</label>
          <input type="number" id="test4" name="test4" />
        </div>
        <div className="form-group">
          <label htmlFor="test5">Test 5:</label>
          <input type="number" id="test5" name="test5" />
        </div>
        <div className="form-group">
          <label htmlFor="test6">Test 6:</label>
          <input type="number" id="test6" name="test6" />
        </div>
        <div className="form-group">
          <label htmlFor="test7">Test 7:</label>
          <input type="number" id="test7" name="test7" />
        </div>
        <div className="form-group">
          <label htmlFor="test8">Test 8:</label>
          <input type="number" id="test8" name="test8" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Report;
