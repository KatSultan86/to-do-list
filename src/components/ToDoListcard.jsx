import { BsCheckCircleFill } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";
import { IoMdRadioButtonOff } from "react-icons/io";
import { useState } from "react";
import BaseHTML from "./BaseHTML";

function ToDoListcard({ item, removeItem, completedItem, itemCount }) {
  const [filterType, setFilterType] = useState("all");

  function handleFiltering() {
    if (filterType === "completed") {
      if ([item.filter((currItem) => currItem.isCompleted)].length > 0) {
        return item.filter((currItem) => currItem.isCompleted);
      } else if ([item.filter((currItem) => currItem.isCompleted)].length < 1) {
        return <BaseHTML itemCount={itemCount} />;
      }
    } else if (filterType === "active") {
      if ([item.filter((currItem) => !currItem.isCompleted)].length > 0) {
        return item.filter((currItem) => !currItem.isCompleted);
      } else if (
        [item.filter((currItem) => !currItem.isCompleted)].length < 1
      ) {
        return <BaseHTML itemCount={itemCount} />;
      }
    } else if (filterType === "clearCompleted") {
      return item.filter((compItem) => !compItem.isCompleted);
    }
    return item;
  }

  return item.length < 1 ? (
    <BaseHTML itemCount={itemCount} />
  ) : (
    <div className="container col-11 col-lg-5">
      <div className=" custom-color card rounded-1  ">
        <ul className="list-group border-0 ">
          {handleFiltering().map((items) => (
            <div key={items.id} className="card-bottom-line ">
              <li className=" custom-color list-group-item border-0 d-flex justify-content-between bg-card-form">
                <div
                  className=" mar-checkmarck mb-1 opacity-25"
                  onClick={() => {
                    completedItem(items);

                    itemCount();
                  }}
                >
                  {items.isCompleted ? (
                    <BsCheckCircleFill size={"1.3rem"} />
                  ) : (
                    <IoMdRadioButtonOff size={"1.7rem"} />
                  )}
                </div>
                <span
                  className={`${
                    items.isCompleted ? "text-decoration-line-through" : ""
                  } me-auto ms-2 ps-1 opacity-75`}
                >
                  {items.item}
                </span>
                <button
                  onClick={() => {
                    removeItem(items.id);
                  }}
                  className="mar-trashcan btn opacity-25"
                >
                  <FaTrashCan />
                </button>
              </li>
            </div>
          ))}
        </ul>

        <div className="font-size">
          <div className="card-body custom-color  p-0 m-1 ms-2 me-2  d-flex justify-content-between opacity-75">
            <div>{itemCount()} tasks left</div>
            <div className="d-flex gap-3">
              <button
                onClick={() => setFilterType("all")}
                className={`${
                  filterType === "all" ? "fw-bolder" : ""
                } btn border-0 m-0 p-0 font-size`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType("active")}
                className={`${
                  filterType === "active" ? "fw-bolder" : ""
                } btn border-0 m-0 p-0 font-size`}
              >
                Active
              </button>
              <button
                onClick={() => setFilterType("completed")}
                className={`${
                  filterType === "completed" ? "fw-bolder" : ""
                } btn border-0 m-0 p-0 font-size`}
              >
                Completed
              </button>
            </div>
            <button
              onClick={() => setFilterType("clearCompleted")}
              className={`${
                filterType === "clearCompleted" ? "fw-bolder" : ""
              } btn border-0 m-0 p-0 font-size`}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoListcard;
