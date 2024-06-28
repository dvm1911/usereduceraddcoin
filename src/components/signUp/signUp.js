import { useReducer } from "react";
import axios from "axios";
import SignUpAlert from "../alerts/SignUpAlert/signUpAlert";


const Signup = () => {

    

    const initialreqFields = {
        userName: "",
        userOwnerName: "",
        userEmail: "",
        userPassword: "",
        isAdmin: false
    }

    const setreqFields = (state, action) => {
        switch (action.type) {
            case "userNameInp":
                return {
                    ...state,
                    userName: action.payload
                }
            
            case "userOwnerNameInp":
                return {
                    ...state,
                    userOwnerName: action.payload
                }
            
            case "userEmailInp":
                return {
                    ...state,
                    userEmail: action.payload
                }
            
            case "userPasswordInp":
                return {
                    ...state,
                    userPassword: action.payload
                }
            
            case "userSuccess":
                return {
                    ...state,
                    userName: "",
                    userOwnerName: "",
                    userEmail: "",
                    userPassword: ""
                }
        
            default:
                return state
        }
    }

    const [ reqFields, reqFieldsDispatch ] = useReducer( setreqFields, initialreqFields );

    const initialuiFields = {
        cnfPassword: "",
        errPswrd: false,
        signUpAlert: false
    }

    const setuiFields = (state, action) => {
        switch (action.type) {
            case "cnfPasswordInp":
                return {
                    ...state,
                    cnfPassword: action.payload
                }
            
            case "errPswrd":
                return {
                    ...state,
                    errPswrd: true
                }
            
            case "signUpAlert":
                return {
                    ...state,
                    signUpAlert: true
                }
        
            default:
                return state
        }
    }

    const [ uiFields, uiFieldsDispatch ] = useReducer( setuiFields, initialuiFields );

    const onClickPost = async (e) => {
        e.preventDefault();
            if(reqFields.userPassword === uiFields.cnfPassword){
                try{
                    await axios.post("https://coinscore-cc-backend.onrender.com/api/auth/signup", reqFields);

                    reqFieldsDispatch({ type: "userSuccess" })
                    uiFieldsDispatch({ type: "signUpAlert" })
                }
                catch(err)
                {
                    console.log(`Couldn't make new user ${err}`);
                }
            } else {           
                uiFieldsDispatch({ type: "errPswrd" })
            }
           

    }

    return (
    <div>
        <div className="flex flex-col items-center justify-center m-16">
            <div className="rounded-xl contentOuter flex flex-col p-8 contentWidth">
                <h2 className="primaryColorW text-3xl font-semibold">Sign Up</h2>
                <p className="primaryColorW text-lg font-light text-justify">Join our crypto community!</p>
                <p className="font-normal text-base secondaryColorG">Have an account? <a href="/" className="primaryColorP text-base font-bold">Login</a> now!</p>
                <form className="flex-col flex" action="/">
                    <label className="my-3.5 primaryColorW text-justify text-lg font-semibold" for="aliasName">Your alias or username</label>
                    <input value={reqFields.userName} onChange={(e) => {reqFieldsDispatch({ type: "userNameInp", payload: e.target.value})}} className="mb-7  p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="aliasName" placeholder="enter your username!" required/>

                    <label className="my-3.5 primaryColorW text-justify text-lg font-semibold" for="ownerName">Name(Owner) </label>
                    <input value={reqFields.userOwnerName} onChange={(e) => {reqFieldsDispatch({ type: "userOwnerNameInp", payload: e.target.value})}} className="mb-7 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="ownerName" placeholder="what shall we call you you in our newsletter?" required/>

                    <label className="m-3.5 primaryColorW text-justify text-lg font-semibold" for="email">Email</label>
                    <input value={reqFields.userEmail} onChange={(e) => {reqFieldsDispatch({ type: "userEmailInp", payload: e.target.value})}} className="mb-7 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="email" placeholder="where we can contact you?" required/>
                    
                    <label className="my-3.5 primaryColorW text-justify text-lg font-semibold" for="passsWord">Create Password</label>
                    <input value={reqFields.userPassword} onChange={(e) => {reqFieldsDispatch({ type: "userPasswordInp", payload: e.target.value})}} className="mb-7 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="password" id="passsWord" placeholder="create a passsword" minLength={8} maxLength={16} required/>

                    <label className="my-3.5 primaryColorW text-justify text-lg font-semibold" for="cnfPassWord">Confirm Password</label>
                    <input value={uiFields.cnfPassword} onChange={(e) => {uiFieldsDispatch({ type: "cnfPasswordInp", payload: e.target.value})}} className="mb-7 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="password" id="cnfPassWord" placeholder="confirm your password"/>
                    {uiFields.errPswrd && <p className = "text-xs font-normal text-justify text-red-600">*Password do not match</p>}

                    <span className="self-end secondaryColorG text-center text-xs font-normal">By registering you agree to our <a className="inline-block my-7 primaryColorP text-xs font-normal underline" href="/">terms & conditions</a></span>
                    <button onClick={onClickPost} className="self-end primaryColorW  w-32 h-12 btnBgColor rounded-xl text-lg font-bold">Register</button>
                </form>
            </div>
        </div>  
        { uiFields.signUpAlert && <SignUpAlert />}
    </div>        
    );
}

export default Signup;