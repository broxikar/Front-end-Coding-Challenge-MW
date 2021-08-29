import Button from "@material-ui/core/Button";
import "./signUp.css";
import useSignUp from "../useSignUp";
import {
  sharedInputNameProps,
  emailFiledId,
  passwordFiledId,
  confirmPasswordFiledId,
} from "./sharedComponent/sharedInputNameProps";
import SharedSignUpFormInput from "./sharedComponent/SharedSignUpFormInput";
import Notification from "./Notification";

const SignUp = () => {
  const {
    openNotification,
    handleClickNotification,
    notifacationMessage,
    showPassword,
    showConfirmPassword,
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
  } = useSignUp();

  const filedProps = (filedId) => {
    const formValue = {
      values: values[filedId],
      handleChange,
      errors: errors[filedId],
      touched: touched[filedId],
    };
    return formValue;
  };
  const passwordInputProps = {
    showPassword: showPassword,
    handleClickShowPassword: handleClickShowPassword,
  };
  const confirmPasswordProps = {
    showPassword: showConfirmPassword,
    handleClickShowPassword: handleClickShowConfirmPassword,
  };

  return (
    <>
      <h3>Sign Up</h3>
      <Notification
        open={openNotification}
        handleClose={handleClickNotification}
        message={notifacationMessage}
      />
      <form className="form-width" onSubmit={handleSubmit}>
        <SharedSignUpFormInput
          name={sharedInputNameProps.email}
          formValue={filedProps(emailFiledId)}
        />
        <SharedSignUpFormInput
          name={sharedInputNameProps.password}
          formValue={filedProps(passwordFiledId)}
          InputProps={passwordInputProps}
        />
        <SharedSignUpFormInput
          name={sharedInputNameProps.confirm_password}
          formValue={filedProps(confirmPasswordFiledId)}
          InputProps={confirmPasswordProps}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default SignUp;
