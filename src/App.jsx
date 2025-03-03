import SubmissionForm from "./components/SubmissionForm";
import ToDoListcard from "./components/ToDoListcard";
import { useState } from "react";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  const [item, setItem] = useState([]);

  //set up the state for completed items
  const [completeItem, setCompleteItem] = useState(null);

  const addNewToDoItem = (newItem) => {
    //we CAN NOT use Push because the useState is immutable and always stays as is
    // item.push(newItem);
    //to push a new element from the input field
    //..prev ---> adds all ellements in the array that were previously entered
    // newItem ----> adds a new one
    console.log("Adding new item", newItem);
    setItem((prev) => [...prev, newItem]);
    console.log(item);
  };

  const removeItem = (id) => {
    console.log("Deleting item:", id);

    setItem((prev) => prev.filter((item) => item.id !== id));
  };

  const completedItem = (itemToMarkAsCompleted) => {
    console.log("Item change: ", itemToMarkAsCompleted);
    setItem((prevItems) =>
      prevItems.map((currItem) => {
        if (currItem.id === itemToMarkAsCompleted.id) {
          console.log(
            `Item with id ${itemToMarkAsCompleted.id} found. Changing the isCompleted...`
          );
          return { ...currItem, isCompleted: !currItem.isCompleted };
        }

        return currItem;
      })
    );
    console.log("State after change: ", item);
  };

  const itemCount = () => {
    const activeItems = item.filter((currItem) => !currItem.isCompleted);
    return activeItems.length;
  };

  return (
    <>
      <ThemeToggler />
      <SubmissionForm addNewToDoItem={addNewToDoItem} />
      <ToDoListcard
        itemCount={itemCount}
        item={item}
        removeItem={removeItem}
        completedItem={completedItem}
      />
    </>
  );
}

export default App;
