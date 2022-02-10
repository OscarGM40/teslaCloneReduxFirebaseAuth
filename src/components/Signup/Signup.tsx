import { LanguageOutlined } from "@material-ui/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import "./Signup.css";
import { firebaseApp } from "../../firebase";
import { useAppDispatch } from "../../app/hooks";
import { login,  } from '../../features/userSlice';


type FormValues = {
  email: string;
  password: string;
  fName: string;
  lName: string;
};

const Signup = () => {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    if(!data.fName){
      return alert("Please enter your first name");
    } else if(!data.lName){
      return alert("Please enter your last name");
    } else if(!data.email){
      return alert("Please enter your email");
    } else if(!data.password){
      return alert("Please enter your password");
    }

    const auth = getAuth(firebaseApp);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in, luego lo guardo en el store
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: data.fName,
          })
        );

        console.log(userCredential.user);
        // ... redireccionar
        navigate("/teslaaccount");
        reset();
      })
      .catch((error) => {
        /* es super importante gestionar los errores */
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
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
