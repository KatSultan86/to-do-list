import { BsCheckCircleFill } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

function ToDoListcard() {
  return (
    <div className="container  col-11 col-lg-5">
      <div className="card rounded-1  ">
        <div className="card-bottom-line">
          <ul className="list-group border-0">
            <li className="list-group-item border-0 d-flex justify-content-between">
              <div className="mar-checkmarck mb-1">
                <BsCheckCircleFill size={"1.3rem"} />
              </div>
              <span className="me-auto ms-2 ps-1">Morning workout</span>
              <div className="mar-trashcan">
                <FaTrashCan />
              </div>
            </li>
          </ul>
        </div>

        <div className="card-bottom-line">
          <ul className="list-group border-0">
            <li className="list-group-item border-0 d-flex justify-content-between">
              <div className="mar-checkmarck mb-1">
                <BsCheckCircleFill size={"1.3rem"} />
              </div>
              <span className="me-auto ms-2 ps-1">Morning workout</span>
              <div className="mar-trashcan">
                <FaTrashCan />
              </div>
            </li>
          </ul>
        </div>

        <div className="card-bottom-line">
          <ul className="list-group border-0">
            <li className="list-group-item border-0 d-flex justify-content-between">
              <div className="mar-checkmarck mb-1">
                <BsCheckCircleFill size={"1.3rem"} />
              </div>
              <span className="me-auto ms-2 ps-1">Morning workout</span>
              <div className="mar-trashcan">
                <FaTrashCan />
              </div>
            </li>
          </ul>
        </div>

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
