import { BsCheckCircleFill } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";
import { IoMdRadioButtonOff } from "react-icons/io";
import { useState } from "react";

function ToDoListcard({ item, removeItem, completedItem }) {
  const [filterType, setFilterType] = useState("all");

  function handleFiltering() {
    if (filterType === "completed") {
      return item.filter((currItem) => currItem.isCompleted);
    } else if (filterType === "active") {
      return item.filter((currItem) => !currItem.isCompleted);
    } else if (filterType === "clearCompleted") {
      return item.filter((compItem) => !compItem.isCompleted);
    }

    return item;
  }

  const itemCount = () => {
    const activeItems = item.filter((currItem) => !currItem.isCompleted);
    return activeItems.length;
  };

  return item.length < 1 ? (
    <div>
      <div className="container col-11 col-lg-5">
        <div div className=" card rounded-1  ">
          <div className="text-center font-size p-1 opacity-50">
            No Tasks Available
          </div>
          <div className="card-bottom-line-up "></div>
          <div className="font-size">
            <div className="card-body  p-0 m-1 ms-2 me-2  d-flex justify-content-between">
              <div>0 tasks left</div>
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
              <div>Clear Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container col-11 col-lg-5">
      <div className=" card rounded-1  ">
        <ul className="list-group border-0 ">
          {handleFiltering().map((items) => (
            <div key={items.id} className="card-bottom-line ">
              <li className="list-group-item border-0 d-flex justify-content-between bg-card-form">
                <div
                  className="mar-checkmarck mb-1 opacity-25"
                  onClick={() => {
                    completedItem(items);
                    // {id, title, icCompled}
                    itemCount();
                  }}
                  // onChange={() => {
                  //   itemCount(items);
                  // }}
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
                  } me-auto ms-2 ps-1 `}
                >
                  {items.item}
                </span>
                <button
                  onClick={() => {
                    removeItem(items.id);
                    // itemCount();
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
          <div className="card-body  p-0 m-1 ms-2 me-2  d-flex justify-content-between">
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
