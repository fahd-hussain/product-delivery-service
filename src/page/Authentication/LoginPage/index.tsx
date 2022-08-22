import { FC, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { TextField } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { login } from "../../../store/authSlice";
import { LoginPayload } from "../../../type";

import "./_styles.scss";
import { loginValidationSchema } from "./_validation";

const LoginPage: FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((store) => store.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated]);

  const initialValues: LoginPayload = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const _handleSubmit = async (
    values: LoginPayload,
    { resetForm }: FormikHelpers<LoginPayload>
  ) => {
    try {
      dispatch(login(values)).unwrap();
      resetForm();
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Box className="_login_container">
      <Box className="_left_content" />
      <Box className="_login_form">
        <Box />
        <Box className="_login_form_container">
          <Typography className="_login_form_header">Login</Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form>
                <Box className="_login_form_body">
                  <TextField
                    className="_login_form_body_input"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={Boolean(errors.email && touched.email)}
                    helperText={errors.email && touched.email}
                    autoFocus
                    variant="filled"
                  />
                  <TextField
                    className="_login_form_body_input"
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={Boolean(errors.password && touched.password)}
                    helperText={errors.password && touched.password}
                    type="passeord"
                    variant="filled"
                  />
                  <Box className="_Login_form_body_submit_remember">
                    <FormControlLabel
                      value="start"
                      control={<Checkbox />}
                      label="Remember me"
                      labelPlacement="start"
                      className="_Login_form_body_remember_chk"
                    />
                    <Button
                      variant="outlined"
                      className="_Login_form_body_submit_btn"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
          <Box className="_login_form_footer">
            <Typography>
              Forgot
              <Link className="_login_form_footer_link" to="/register">
                password
              </Link>
            </Typography>
            <Typography>
              Dont have an Account? Create one from
              <Link className="_login_form_footer_link" to="/register">
                here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="_right_content" />
    </Box>
  );
};

export default LoginPage;
