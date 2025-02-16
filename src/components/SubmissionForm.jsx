import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdRadioButtonOff } from "react-icons/io";

function SubmissionForm({ addNewToDoItem }) {
  const [todoInput, settodoInput] = useState("");

  // e= event will give us an access to the target element
  const handleToDoInput = (e) => {
    settodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    //to not allow to refresh the page when we hit "submit" the form
    e.preventDefault();

    //to add a new object to the state (a list of items in the ToDoListcard.jsx)
    const newInput = {
      //we need to use the unique ID for each element
      id: Date.now(),
      item: todoInput,
      isCompleted: true,
    };

    //"newToDoItem" is a function defined at the App level. We are passing "newMovie" object as a parameter
    //to add to the array of objects in the App
    addNewToDoItem(newInput);

    console.log("Added new item", newInput);

    //reset the State
    settodoInput("");
  };

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
          className="flex-item"
          id="exampleInput"
          placeholder="Create a new task..."
          //"value" is to refresh the form after we submit it
          value={todoInput}
        ></input>
        <div>
          <button className="btn mb-1 opacity-25 p-0 mar-plus" type="submit">
            <FaPlus />
          </button>
        </div>
      </div>
    </form>
  );
}
export default SubmissionForm;
