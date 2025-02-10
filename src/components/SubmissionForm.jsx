import { BsCheckCircleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

function SubmissionForm() {
  return (
    <div className="subform">
      <form className="container col-11 col-lg-5 mt-5">
        <h2 className="text-center fw-bold">Todo List</h2>

        <div className="card rounded-1 mt-4">
          <span className="input-group-text border-0">
            <div className="mar-Input mb-1">
              <BsCheckCircleFill size={"1.3rem"} />
            </div>
            <input
              type="text"
              class="form-control border-0"
              id="exampleInput"
              placeholder="Create a new task..."
            ></input>
            <div className="mb-1">
              <FaPlus />
            </div>
          </span>
        </div>
      </form>
    </div>
  );
}
export default SubmissionForm;
