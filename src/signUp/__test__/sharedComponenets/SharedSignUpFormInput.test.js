import { render, screen } from "@testing-library/react";
import { sharedInputNameProps } from "../../components/sharedComponent/sharedInputNameProps";
import SharedSignUpFormInput from "../../components/sharedComponent/SharedSignUpFormInput";

describe("tests for shared input component", () => {
  const mockFormValue = {
    values: "",
    onchange: () => {},
    errors: "",
    touched: false,
  };

  const mockInputProps = {
    showPassword: false,
    handleClickShowPassword: () => {},
  };

  test("renders SharedSignUpFormInput without props", () => {
    render(<SharedSignUpFormInput />);
    const textElement = screen.getByText(/Invalid Props/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders SharedSignUpFormInput with email filed props and mocked formValue props", () => {
    const name = sharedInputNameProps.email;
    const label = sharedInputNameProps.email.filedLable;
    render(<SharedSignUpFormInput name={name} formValue={mockFormValue} />);
    const textElement = screen.getByText(label);
    expect(textElement).toBeInTheDocument();
  });

  test("renders SharedSignUpFormInput with password and mocked formValue & input", () => {
    const name = sharedInputNameProps.password;
    const label = sharedInputNameProps.password.filedLable;
    render(
      <SharedSignUpFormInput
        name={name}
        formValue={mockFormValue}
        InputProps={mockInputProps}
      />
    );
    const textElement = screen.getByText(label);
    expect(textElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
