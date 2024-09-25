import React, { useState } from "react";
// react redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// mui
import { Stack } from "@mui/material";
// componenta
import PageTitle from "../../components/page/PageTitle";
import SubmitButton from "../../components/form-components/SubmitButton";
// form
import { SubmitHandler, useForm } from "react-hook-form";
// redux actions
import { setUserToken } from "../../redux/features/user/userSlice";
import PasswordField from "../../components/form-components/PasswordField";
import InputField from "../../components/form-components/InputField";
// types
type FormValues = {
  email: string;
  password: string;
};
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    // resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });
  const submitting: SubmitHandler<FormValues> = async (values) => {
    setIsSubmitting(true);
    console.log(values);
  };
  return (
    <Stack width="100%" maxWidth="600px" mx="auto" py={2}>
      <PageTitle title="تسجيل الدخول" />
      <Stack component="form" gap="16px" mt={4}>
        <InputField
          errorMessage={errors?.email?.message}
          name="email"
          type="email"
          label={"البريد الالكتروني"}
          register={{ ...register("email") }}
        />
        <PasswordField
          label="كلمة المرور"
          register={{ ...register("password") }}
          errorMessage={errors?.password?.message}
        />
        <SubmitButton label="تسجيل  الدخول" disabled={false} />
      </Stack>
    </Stack>
  );
};

export default Login;
