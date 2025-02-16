import { BsCheckCircleFill } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

function ToDoListcard({ item, removeItem }) {
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
              <div>3 tasks left</div>
              <div className="d-flex gap-3">
                <div className="fw-bolder">All</div>
                <div>Active</div>
                <div>Completed</div>
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
          {item.map((items) => (
            <div key={items.id} className="card-bottom-line ">
              <li className="list-group-item border-0 d-flex justify-content-between bg-card-form">
                <div className="mar-checkmarck mb-1 opacity-25">
                  <BsCheckCircleFill size={"1.3rem"} />
                </div>
                <span className="me-auto ms-2 ps-1">{items.item}</span>
                <button
                  onClick={() => removeItem(items.id)}
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
            <div>3 tasks left</div>
            <div className="d-flex gap-3">
              <div className="fw-bolder">All</div>
              <div>Active</div>
              <div>Completed</div>
            </div>
            <div>Clear Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoListcard;
