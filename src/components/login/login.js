
import {Link } from 'react-router-dom';
import { useReducer } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

    const navigateLogIn = useNavigate();

    
        
    const initialreqFields = {
        userName: "",
        userPassword: "",
    }

    const setreqFields = (state, action) => {
        switch (action.type) {
            case "userNameInp":
                return {
                    ...state,
                    userName: action.payload
                }
            
            case "userPasswordInp":
                return {
                    ...state,
                    userPassword: action.payload
                }
        
            default:
                return state
        }
    }

    const [ reqFields, reqFieldsDispatch ] = useReducer( setreqFields, initialreqFields );

    const onClickPost = async (event) => {
        event.preventDefault();
        try {
          const res = await axios.post('https://coinscore-cc-backend.onrender.com/api/auth/login', reqFields)

          const result = await res; 
          if(result.data.message._id) {
            localStorage.setItem('token', result.data.token );
            navigateLogIn("/");
          }
          
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div>
        <div className='mainOuter flex'>
            <div className="logInOuter flex">
        <div className="logInHead">
            <div className="logInHeading">
                <h2>Login</h2>
            </div>
            <div className="logIntxt">
                Welcome back Crypto Ent!
            </div>
            <div className="logInSignUp">
                <p>New? <Link to={'/signup'} className="logInSignUpAnc noDec" href="../Sign up/signUp.html"> Sign Up</Link> instead.</p>
            </div>
        </div>
        <div className="logInForm">
            <form className="flex logInFormTag" action="/">
                <label className="logInFormTxt" name="logInUserName">Your alias or username</label>
                <input  value={reqFields.userName} onChange={(e) => {reqFieldsDispatch({ type: "userNameInp", payload: e.target.value})}} type="text" className="logInFormInp" id="logInUserName" placeholder="enter your username!"/>
                <label className="logInFormTxt" name="logInPassword">Password</label>
                <input value={reqFields.userPassword} onChange={(e) => {reqFieldsDispatch({ type: "userPasswordInp", payload: e.target.value})}} type="password" className="logInFormInp"  id="logInPassword" placeholder="your password comes here!"/>
                <button onClick={onClickPost} className="LogInBtn">Log in</button>
            </form>
        </div>

        </div>            
        </div>
        </div>
        
    );
}

export default LogIn;