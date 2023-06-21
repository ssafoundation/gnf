import * as Yup from "yup";
export const addTaskSchema = Yup.object().shape({
  projectName: Yup.string().required("This value is required"),
  memberName: Yup.string().required("This value is required"),
  startData: Yup.string().required("This value is required"),
  endDate: Yup.string().required("This value is required"),
  progress: Yup.string().required("This value is required"),
});
