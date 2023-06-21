import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { addTaskSchema } from "../../Schemas/addTaskSchema";
const AddNewTask = () => {
  const [values, setValues] = useState(null);
  const initialValues = {
    projectName: "",
    memberName: "",
    startData: "",
    endDate: "",
    progress: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    // register(values);
  };
  return (
    <Formik
      initialValues={values || initialValues}
      validationSchema={addTaskSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
      className=""
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <div className="add-single-task-wrap">
            <div>
              <label htmlFor="name">Name</label>
              <Field
                id="projectName"
                name="projectName"
                type="text"
                placeholder="Student Name"
              />
              <span style={{ fontSize: "10px", color: "red" }}>
                {errors.projectName && touched.projectName ? (
                  <div>{errors.projectName}</div>
                ) : null}
              </span>
            </div>
            <div>
              <label htmlFor="memberName">Assigned member</label>
              <Field
                id="memberName"
                name="memberName"
                type="text"
                placeholder="Assigned member"
              />
              <span style={{ fontSize: "10px", color: "red" }}>
                {errors.memberName && touched.memberName ? (
                  <div>{errors.memberName}</div>
                ) : null}
              </span>
            </div>{" "}
            <div>
              <label htmlFor="startData">Start date</label>
              <Field id="startData" name="startData" type="date" />
              <span style={{ fontSize: "10px", color: "red" }}>
                {errors.memberName && touched.memberName ? (
                  <div>{errors.memberName}</div>
                ) : null}
              </span>
            </div>{" "}
            <div>
              <label htmlFor="endDate">End date</label>
              <Field id="endDate" name="endDate" type="date" />
              <span style={{ fontSize: "10px", color: "red" }}>
                {errors.memberName && touched.memberName ? (
                  <div>{errors.memberName}</div>
                ) : null}
              </span>
            </div>{" "}
            <div>
              <label htmlFor="endDate">Project progress</label>
              <Field
                id="progress"
                name="progress"
                type="text"
                placeholder="Project progress"
              />
              <span style={{ fontSize: "10px", color: "red" }}>
                {errors.memberName && touched.memberName ? (
                  <div>{errors.memberName}</div>
                ) : null}
              </span>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 mt-4"
            >
              Add New Task
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewTask;
