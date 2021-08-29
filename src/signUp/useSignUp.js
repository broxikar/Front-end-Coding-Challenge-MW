import signUpFormValidationSchema from "./signUpValidations";
import { useState } from "react";
import { useFormik } from "formik";
import { NOTIFICATION_MESSAGE_SUCCESS } from "./components/consts";
const useSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: signUpFormValidationSchema,

    onSubmit: (values) => {
      console.log(values);
      handleClickNotification();
    },
  });

  const handleClickNotification = () => {
    setOpenNotification(!openNotification);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const { values, errors, touched, handleSubmit, handleChange } = formik;

  return {
    notifacationMessage: NOTIFICATION_MESSAGE_SUCCESS,
    handleClickNotification,
    openNotification,
    showPassword,
    showConfirmPassword,
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
  };
};

export default useSignUp;
