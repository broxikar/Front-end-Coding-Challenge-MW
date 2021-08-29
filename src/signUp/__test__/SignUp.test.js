import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import {
  CONFIRM_PASSWORD_INVALID,
  CONFIRM_PASSWORD_REQUIRED,
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  PASSWORD_INVALID,
  PASSWORD_REQUIRED,
  NOTIFICATION_MESSAGE_SUCCESS,
} from "../components/consts.js";
import SignUp from "../components/SignUp.jsx";
describe("tests for shared input component", () => {
  test("renders SignUp", () => {
    render(<SignUp />);
    const textElement = screen.getByText(/Sign Up/i);
    expect(textElement).toBeInTheDocument();
    const inputElements = screen.getAllByTestId("sharedInput");
    expect(inputElements.length).toBe(3);
  });

  test("submit when no inputs", async () => {
    const { container } = render(<SignUp />);
    const submit = container.querySelector('button[type="submit"');

    await waitFor(() => {
      fireEvent.click(submit);
    });

    await waitFor(() => {
      const emailHelper_required = screen.getByText(EMAIL_REQUIRED);
      const passwordHelper_required = screen.getByText(PASSWORD_REQUIRED);
      const confirmPwdHelper_required = screen.getByText(
        CONFIRM_PASSWORD_REQUIRED
      );
      expect(emailHelper_required).toBeInTheDocument();
      expect(passwordHelper_required).toBeInTheDocument();
      expect(confirmPwdHelper_required).toBeInTheDocument();
    });
  });

  test("validation when input invalid", async () => {
    const EMAIL = "mockdata@";
    const PWD = "Mockp";
    const CONFIRM_PWD = "Mockpw";

    const { container } = render(<SignUp />);
    const email = container.querySelector('input[name="email"]');
    const password = screen.queryByLabelText("Password");
    const confirm_password = screen.queryByLabelText(/Confirm Password/i);
    const submit = container.querySelector('button[type="submit"');

    await waitFor(() => {
      fireEvent.change(email, {
        target: {
          value: EMAIL,
        },
      });
    });

    await waitFor(() => {
      fireEvent.change(password, {
        target: {
          value: PWD,
        },
      });
    });

    await waitFor(() => {
      fireEvent.change(confirm_password, {
        target: {
          value: CONFIRM_PWD,
        },
      });
    });

    await waitFor(() => {
      fireEvent.click(submit);
    });

    await waitFor(() => {
      const emailHelper_invalid = screen.getByText(EMAIL_INVALID);
      const passwordHelper_invalid = screen.getByText(PASSWORD_INVALID);
      const confirmPwdHelper_invalid = screen.getByText(
        CONFIRM_PASSWORD_INVALID
      );
      expect(emailHelper_invalid).toBeInTheDocument();
      expect(passwordHelper_invalid).toBeInTheDocument();
      expect(confirmPwdHelper_invalid).toBeInTheDocument();
    });
  });

  test("validation when input correct", async () => {
    const EMAIL = "mockdata@email.com";
    const PWD = "Mockpwd1!";
    const CONFIRM_PWD = "Mockpwd1!";

    const { container } = render(<SignUp />);
    const email = container.querySelector('input[name="email"]');
    const password = screen.queryByLabelText("Password");
    const confirm_password = screen.queryByLabelText(/Confirm Password/i);
    const submit = container.querySelector('button[type="submit"');

    await waitFor(() => {
      fireEvent.change(email, {
        target: {
          value: EMAIL,
        },
      });
    });

    await waitFor(() => {
      fireEvent.change(password, {
        target: {
          value: PWD,
        },
      });
    });

    await waitFor(() => {
      fireEvent.change(confirm_password, {
        target: {
          value: CONFIRM_PWD,
        },
      });
    });

    await waitFor(() => {
      fireEvent.click(submit);
    });

    await waitFor(() => {
      const emailHelper_invalid = screen.queryByText(EMAIL_INVALID);
      const passwordHelper_invalid = screen.queryByText(PASSWORD_INVALID);
      const confirmPwdHelper_invalid = screen.queryByText(
        CONFIRM_PASSWORD_INVALID
      );
      const sucessNotification = screen.getByText(NOTIFICATION_MESSAGE_SUCCESS);

      expect(emailHelper_invalid).not.toBeInTheDocument();
      expect(passwordHelper_invalid).not.toBeInTheDocument();
      expect(confirmPwdHelper_invalid).not.toBeInTheDocument();
      expect(sucessNotification).toBeInTheDocument();
    });
  });
});
