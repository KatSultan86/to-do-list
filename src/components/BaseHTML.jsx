import { useState } from "react";

function BaseHTML({ itemCount }) {
  const [filterType, setFilterType] = useState("all");
  return (
    <div className="container col-11 col-lg-5">
      <div div className="custom-color card rounded-1  ">
        <div className="text-center font-size p-1 opacity-50">
          No Tasks Available
        </div>
        <div className="card-bottom-line-up "></div>
        <div className="font-size opacity-75">
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
            <div>Clear Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseHTML;
