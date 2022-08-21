import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Not a valid email")
    .required("Required")
    .max(255, "Must be 255 characters or less"),
  password: yup
    .string()
    .required("This is required field")
    .min(8, "The password is at least 8 characters long")
    .matches(/(?=.*[A-Z])/, "The password has at least one uppercase letter")
    .matches(/(?=.*[a-z])/, "The password has at least one lowercase letter")
    .matches(/(?=.*[0-9])/, "The password has at least one digit")
    .matches(/[^A-Za-z0-9]/, "The password has at least one special character"),
});
