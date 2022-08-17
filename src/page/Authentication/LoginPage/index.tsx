// import { Link } from "react-router-dom";
// import { appRoutes } from "../../../config";
// import { getRoute } from "../../../util";

const LoginPage = () => {
  return (
    <div className={"login"}>
      <div className="banner">
        <img src="" alt="banner" />
        <p>
          Trusted And Fastest <br /> Delivery App In Qatar
        </p>
      </div>
      <div className="content">
        <img src="" alt="Logo" />
        <h4>Login</h4>
        <form className={""} noValidate autoComplete="off">
          {/* <InputText
            className=""
            error={isEmailError}
            name="emailOrUsername"
            label="Email or Username"
            type="email"
            helperText={isEmailError && "Invalid Username"}
            textplaceholder="Email or Username"
            {...bindEmailOrUsername}
          />
          <InputText
            error={isPassError}
            name="password"
            label="Password"
            helperText={isPassError && "Invalid Password"}
            type="password"
            textplaceholder="Password"
            {...bindPassword}
          />
          <ButtonRounded
            text="LOGIN"
            isLoading={isLoading}
            disabled={
              !emailOrUsername || !password || isEmailError || isPassError
            }
            action={handleLoginSubmit}
            type="danger"
            buttonType={"submit"}
          /> */}
          {/* <Link to={getRoute(appRoutes.)} className="forget">
            Forgot Password?
          </Link> */}
          <div className="links">
            {/* <Link to={getRoute(appRoutes.FORGOT_PASSWORD)} className="">
              Forgot Password?
            </Link> */}
            <span>
              {/* New here?
              <Link to={getRoute(appRoutes.register)} className="">
                Register Now
              </Link> */}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
