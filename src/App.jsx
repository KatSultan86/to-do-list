import SubmissionForm from "./components/SubmissionForm";
import ToDoListcard from "./components/ToDoListcard";
import { useEffect, useState } from "react";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  const [item, setItem] = useState([]);
  const USER_ID = 48;

  //to fetch all ToDo-s from the API
  const fetchAllToDos = async () => {
    try {
      const response = await fetch(
        "http://yollstudentapi.com/api/todos?user_id=" + USER_ID
      );
      const data = await response.json();
      console.log("Data fetched: ", data);
      setItem(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
    }
  };

  //useEffect is a hook that acts on some hanges on dependencies that we specify
  useEffect(() => {
    fetchAllToDos();
  }, []);

  //set up the state for completed items
  const [completeItem, setCompleteItem] = useState(null);

  //to add a new object to the state (a list of items in the ToDoListcard.jsx)

  const addNewToDoItem = async (requestBody) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      };
      const response = await fetch(
        "http://yollstudentapi.com/api/todos",
        options
      );
      if (!response.ok) {
        throw new Error("Error: " + response.status);
      }
      fetchAllToDos();
    } catch (e) {
      console.log(e);
    }
  };

  // const removeItem = (id) => {
  //   console.log("Deleting item:", id);

  //   setItem((prev) => prev.filter((item) => item.id !== id));
  // };

  const completedItem = (itemToMarkAsCompleted) => {
    console.log("Item change: ", itemToMarkAsCompleted);
    setItem((prevItems) =>
      prevItems.map((currItem) => {
        if (currItem.id === itemToMarkAsCompleted.id) {
          console.log(
            `Item with id ${itemToMarkAsCompleted.id} found. Changing the isCompleted...`
          );
          return { ...currItem, completed: !currItem.completed };
        }

        return currItem;
      })
    );
    console.log("State after change: ", item);
  };

  const itemCount = () => {
    const activeItems = item.filter((currItem) => !currItem.completed);
    return activeItems.length;
  };

  return (
    <>
      <ThemeToggler />
      <SubmissionForm
        addNewToDoItem={addNewToDoItem}
        fetchAllToDos={fetchAllToDos}
      />
      <ToDoListcard
        itemCount={itemCount}
        item={item}
        fetchAllToDos={fetchAllToDos}
        completedItem={completedItem}
      />
    </>
  );
}

export default App;
