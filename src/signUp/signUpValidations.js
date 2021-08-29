import * as yup from "yup";

const signUpFormValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{0,}$/gm,
      "Password must 1 Uppercase, 1 Number and 1 Special Character"
    ),
  confirm_password: yup
    .string("Confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords don't match!")
    .required("Confirm Password is required"),
});

export default signUpFormValidationSchema;
