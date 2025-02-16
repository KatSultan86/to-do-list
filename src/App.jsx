import SubmissionForm from "./components/SubmissionForm";
import ToDoListcard from "./components/ToDoListcard";
import { useState } from "react";

function App() {
  const [item, setItem] = useState([
    {
      id: 1001,
      item: "New item-1",
      isCompleted: true,
    },
    {
      id: 1002,
      item: "New item-2",
      isCompleted: true,
    },
    {
      id: 1003,
      item: "New item-3",
      isCompleted: true,
    },
  ]);

  const addNewToDoItem = (newItem) => {
    //we CAN NOT use Push because the useState is immutable and always stays as is
    // item.push(newItem);
    //to push a new element from the input field
    //..prev ---> adds all ellements in the array that were previously entered
    // newItem ----> adds a new one
    console.log("Adding new item", newItem);
    setItem((prev) => [...prev, newItem]);
  };

  const removeItem = (id) => {
    console.log("Deleting item:", id);

    setItem((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <SubmissionForm addNewToDoItem={addNewToDoItem} />
      <ToDoListcard item={item} removeItem={removeItem} />
    </>
  );
}

export default App;
