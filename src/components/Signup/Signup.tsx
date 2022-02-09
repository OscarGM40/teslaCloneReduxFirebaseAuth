import { LanguageOutlined } from "@material-ui/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import "./Signup.css";

type FormValues = {
  email: string;
  password: string;
  fName: string;
  lName: string;
};

const Signup = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="signup">
      <div className="signup__header">
        <div className="signup__logo">
          <Link to="/">
            <img src={"images/TeslaLogoHD.png"} alt="" />
          </Link>
        </div>
        <div className="signup__language">
          <LanguageOutlined></LanguageOutlined>
          <span>en-US</span>
        </div>
      </div>

      <div className="signup__info">
        <h1>Create Account</h1>

        <form className="signup__form">

          <label htmlFor="fName">First Name</label>
          <input type="text" required id="fName" {...register("fName")} />

          <label htmlFor="lName">Last Name</label>
          <input type="text" required id="lName" {...register("lName")} />

          <label htmlFor="email">Email Address</label>
          <input type="text" required id="email" {...register("email")} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />

          <ButtonPrimary
            name="create account"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          />
        </form>

        <div className="signup__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="sign in" type="button" className="signup__buttonSecondary"/>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
