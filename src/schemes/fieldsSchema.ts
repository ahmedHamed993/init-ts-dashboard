import * as yup from "yup";
import { validationMessages as vm } from "./validationMessages";
import dayjs from "dayjs"; // You can use dayjs to handle date comparison
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"; // Import the plugin
const maxImgSizeMB = 2;
const maxImgSizeBytes = maxImgSizeMB * 2 ** 20;
const regex = /^(\+?218)?(91|92|93)\d{7}$/;

const today = dayjs().startOf("day"); // Get today's date (start of the day)
dayjs.extend(isSameOrAfter); // Use the plugin

const fieldsSchema = {
  required_add_img: yup
    .mixed()
    .required("الصورة مطلوبة")
    .test("fileSize", vm.img.too_big, (value: any) =>
      value != null ? value?.size <= maxImgSizeBytes : true
    )
    .test("fileType", vm.img.not_allowed, (value: any) =>
      value != null
        ? ["image/jpg", "image/png", "image/jpeg"].includes(value.type)
        : true
    ),
  add_img: yup
    .mixed()
    .nullable()
    .test("fileSize", vm.img.too_big, (value: any) =>
      value != null ? value?.size <= maxImgSizeBytes : true
    )
    .test("fileType", vm.img.not_allowed, (value: any) =>
      value != null
        ? ["image/jpg", "image/png", "image/jpeg"].includes(value.type)
        : true
    ),
  edit_img: yup
    .mixed()
    .nullable()
    .test("fileSize", vm.img.too_big, (value) => imageEditSizeValidate(value))
    .test("fileType", vm.img.not_allowed, (value) =>
      imageEditTypeValidate(value)
    ),
  name: yup.string().min(3, vm.title.too_short).required(vm.field.required),
  is_disabled: yup.boolean(),
  required_email: yup
    .string()
    .email(vm.email.valid)
    .required(vm.field.required),
  password: yup
    .string()
    .required(vm.field.required)
    .min(8, vm.password.short)
    .max(32, vm.password.long),
  required_string: yup.string().required(vm.field.required),
  required_number: yup
    .number()
    .typeError(vm.number.valid)
    .required(vm.field.required),
  required_number_min_0: yup
    .number()
    .typeError(vm.number.valid)
    .min(0, vm.number.min_0)
    .required(vm.field.required),
  number: yup.number().typeError(vm.number.valid),
  boolean: yup.boolean(),
  valid_url: yup.string().url(vm.url.valid_url),
  valid_phone: yup
    .string()
    .required(vm.field.required)
    .test("is-libyan-phone-number", vm.phone.valid, (value) =>
      regex.test(value)
    ),
  date_min_now: yup
    .date()
    .required("Date is required")
    .test(
      "is-future",
      "تاريخ الانتهاء يجب ان يكون في المستقبل",
      function (value) {
        if (!value) return false; // Ensure value is present
        return dayjs(value).isSameOrAfter(today); // Check if the date is today or in the future
      }
    ),
};

export default fieldsSchema;

export const imageEditSizeValidate = (value: any) => {
  if (value != null && typeof value != "string") {
    return value.size <= maxImgSizeBytes;
  }
  return true;
};

export const imageEditTypeValidate = (value: any) => {
  if (value != null && typeof value != "string") {
    return ["image/jpg", "image/png", "image/jpeg"].includes(value.type);
  }
  return true;
};
