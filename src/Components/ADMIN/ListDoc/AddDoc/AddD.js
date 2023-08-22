import React from "react";

const AddD = () => {
  return (
    <div>
      <div className="p-5 edit-doc">
        <form>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form6Example1"
                  className="form-control"
                />
                <label className="form-label" for="form6Example1">
                  Name
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="form6Example2"
                  className="form-control"
                />
                <label className="form-label" for="form6Example2">
                  Date of birth
                </label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="form6Example3" className="form-control" />
            <label className="form-label" for="form6Example3">
              Id number
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="form6Example4" className="form-control" />
            <label className="form-label" for="form6Example4">
              Specialization
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form6Example5" className="form-control" />
            <label className="form-label" for="form6Example5">
              Avaibility
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="number" id="form6Example6" className="form-control" />
            <label className="form-label" for="form6Example6">
              Qualification
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="number" id="form6Example6" className="form-control" />
            <label className="form-label" for="form6Example6">
              Experience
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="number" id="form6Example6" className="form-control" />
            <label className="form-label" for="form6Example6">
              Image URL
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="number" id="form6Example6" className="form-control" />
            <label className="form-label" for="form6Example6">
              Price
            </label>
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form6Example7"
              rows="4"
            ></textarea>
            <label className="form-label" for="form6Example7">
              Description
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddD;
