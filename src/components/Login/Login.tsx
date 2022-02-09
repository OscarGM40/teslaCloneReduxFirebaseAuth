import { Link, useNavigate } from 'react-router-dom';
import { LanguageOutlined } from '@material-ui/icons';

import { SubmitHandler, useForm } from "react-hook-form";

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import './Login.css';
import { useAppDispatch } from '../../app/hooks';
import { login } from '../../features/userSlice';
import { firebaseApp } from '../../firebase';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit,reset } = useForm<FormValues>();
  
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    const auth = getAuth(firebaseApp);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in, luego lo guardo en el store
        dispatch(login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
        }));

        console.log(userCredential.user);
        // ... redireccionar
        navigate('/teslaaccount');
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
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link to="/">
            <img
              src={"images/TeslaLogoHD.png"}
              // src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>

        <div className="login__language">
          <LanguageOutlined></LanguageOutlined>
          <span>en-US</span>
        </div>
      </div>

      <div className="login__info">
        <h1>Sign In</h1>

        <form
          className="login__form"
          // onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            required
            id="email"
            minLength={3}
            {...register("email")}
          />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
     

          <ButtonPrimary
            name="Sign In"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          />
        </form>

        <div className="login__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/signup">
          <ButtonSecondary name="create account" type="button" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
