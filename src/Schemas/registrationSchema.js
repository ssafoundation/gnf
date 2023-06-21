import * as Yup from "yup";
export const registrationSchema = Yup.object().shape({
  name: Yup.string().required("This value is required"),
  email: Yup.string().required("This value is required"),
  password: Yup.string().required("This value is required"),
});
export const loginSchema = Yup.object().shape({
  email: Yup.string().required("This value is required"),
  password: Yup.string().required("This value is required"),
});
