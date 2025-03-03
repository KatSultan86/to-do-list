import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdRadioButtonOff } from "react-icons/io";
import { isValidItem } from "../utils.js";

function SubmissionForm({ addNewToDoItem }) {
  const [todoInput, settodoInput] = useState("");

  //state that controls the validity of the input
  const [validInput, setValidInput] = useState(false);

  //requirements for the input:
  //- the "Item" has to be more then 3 chars long, not empty, can accept special chars

  // e= event will give us an access to the target element
  const handleToDoInput = (e) => {
    const value = e.target.value;
    settodoInput(value);
    const isValid = isValidItem(value);
    console.log(`Input: ${value} is valid: ${isValid}`);
    setValidInput(isValid);
  };

  const handleSubmit = (e) => {
    //to not allow to refresh the page when we hit "submit" the form
    e.preventDefault();

    //to prevent DOM submission
    if (!isValidItem(todoInput)) {
      return;
    }

    //to add a new object to the state (a list of items in the ToDoListcard.jsx)
    const newInput = {
      //we need to use the unique ID for each element
      id: Date.now(),
      item: todoInput,
      isCompleted: false,
    };

    //"newToDoItem" is a function defined at the App level. We are passing "newMovie" object as a parameter
    //to add to the array of objects in the App
    addNewToDoItem(newInput);

    console.log("Added new item", newInput);

    //reset the State
    settodoInput("");
    setValidInput(false);
  };

  const isFormValid = validInput;

  return (
    <form onSubmit={handleSubmit} className="container col-11 col-lg-5 mt-5 ">
      <div className="header">
        <h2 className="text-center fw-bold">Todo List</h2>
      </div>

      <div className="card rounded-1 mt-4 mb-1 custom-input">
        <div className="mar-Input  opacity-25">
          <IoMdRadioButtonOff size={"1.7rem"} />
        </div>
        <input
          // In React, onChange is an event handler
          // used to track changes in form elements such as
          // <input>, <textarea>, and <select>. It is triggered
          // whenever the value of the element changes, such
          // as when a user types into an input field, selects
          // an option from a dropdown, or changes a text area’s content
          onChange={handleToDoInput}
          type="text"
          //the below line is to check the validations for the input: {``}
          className={`flex-item ${validInput}`}
          id="exampleInput"
          placeholder="Create a new task..."
          //"value" is to refresh the form after we submit it
          value={todoInput}
        ></input>
        <div>
          <button
            className="btn mb-1 opacity-25 p-0 mar-plus"
            type="submit"
            disabled={!isFormValid}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </form>
  );
}
export default SubmissionForm;
