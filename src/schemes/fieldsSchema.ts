import * as yup from "yup";
import { validationMessages as vm } from "./validationMessages";

const fieldsSchema = {
  required_email: yup
    .string()
    .email(vm.email.valid)
    .required(vm.field.required),
  password: yup
    .string()
    .required(vm.field.required)
    .min(8, vm.password.short)
    .max(32, vm.password.long),
};

export default fieldsSchema;
