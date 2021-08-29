import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const SharedSignUpFormInput = ({ name, formValue, InputProps }) => {
  if (!name || !formValue) {
    return <div>{"Invalid Props For SharedSignUpFormInput"}</div>;
  }

  const { filedName, filedId, filedLable } = name;
  const { values, handleChange, errors, touched } = formValue;
  const type = InputProps
    ? InputProps.showPassword
      ? "text"
      : "password"
    : "text";

  return (
    <TextField
      fullWidth
      data-testid={`sharedInput`}
      id={filedId}
      name={filedName}
      label={filedLable}
      value={values}
      type={type}
      onChange={handleChange}
      error={touched && Boolean(errors)}
      helperText={touched && errors}
      InputProps={{
        endAdornment: InputProps ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={InputProps.handleClickShowPassword}
            >
              {InputProps.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
    />
  );
};
export default SharedSignUpFormInput;
