import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  email: Yup.string().required("This value is required"),
  password: Yup.string().required("This value is required"),
});
