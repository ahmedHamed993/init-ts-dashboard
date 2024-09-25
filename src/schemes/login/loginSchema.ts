import * as yup from "yup";
import fieldsSchema from "../fieldsSchema";
export const loginSchema = yup.object().shape({
  email: fieldsSchema.required_email,
  password: fieldsSchema.password,
});
