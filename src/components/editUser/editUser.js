import { useReducer, useEffect } from "react";
import axios from "axios";
import EditUserAlert from "../alerts/EditUserAlert/editUserAlert.js";
import { useParams } from "react-router-dom";


const EditUser = () => {

    const { id } = useParams();

    useEffect( () => {
        axios.get('https://coinscore-cc-backend.onrender.com/api/auth/user/'+id)
        .then(data => {reqFieldsDispatch({ type: "setDefaultVal", payload: data.data}); uiFieldsDispatch({ type: "setDefaultVal", payload: data.data})})
        .catch(err => console.log(err))
      }, [id])


    const initialreqFields = {
        userName: "",
        userOwnerName: "",
        userEmail: ""
    }

    const setreqFields = (state, action) => {
        switch (action.type) {
            case "setDefaultVal":
                return {
                    ...state,
                    userName: action.payload.userName,
                    userOwnerName: action.payload.userOwnerName,
                    userEmail: action.payload.userEmail,
                }
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
        
            default:
                return state;
        }
    }

    const [ reqFields, reqFieldsDispatch ] = useReducer( setreqFields, initialreqFields );

    const initialpassFields = {
        userPassword: ""
    }

    const setpassFields = (state, action) => {
        switch (action.type) {
            case "userPasswordInp":
                return {
                    ...state,
                    userPassword: action.payload
                }
        
            default:
                return state;
        }
    }
    const [ passFields, passFieldsDispatch ] = useReducer( setpassFields, initialpassFields);

    const initialuiFields = {
        cnfPassword: "",
        errPswrd: false,
        editUserAlert: false
    }

    const setuiFields = (state, action) => {
        switch (action.type) {
            case "setDefaultVal":
                return {
                    ...state,
                    userName: action.payload.userName
                }
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
            
            case "editUserAlert":
                return {
                    ...state,
                    editUserAlert: true
                }
        
            default:
                return state
        }
    }

    const [ uiFields, uiFieldsDispatch ] = useReducer( setuiFields, initialuiFields );

 

    const onClickUpdate = async (e) => {
        e.preventDefault();
            
                try{
                    await axios.put(`https://coinscore-cc-backend.onrender.com/api/auth/user/update/${id}`, reqFields);

                    uiFieldsDispatch({ type: "editUserAlert" })
                }
                catch(err)
                {
                    console.log(`Couldn't make new user ${err}`);
                }     

    }

    const onClickChange = async (e) => {
        e.preventDefault();
            if(passFields.userPassword === uiFields.cnfPassword){
                try{
                    await axios.put(`https://coinscore-cc-backend.onrender.com/api/auth/user/update/${id}`, passFields);

                    uiFieldsDispatch({ type: "editUserAlert" })
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
                <h2 className="primaryColorW text-3xl font-semibold">Hello <span className="primaryColorP text-3xl font-semibold">{uiFields.userName}</span>!</h2>
                <p className="primaryColorW text-lg font-light text-justify">you can edit your personal info over here.</p>

                <form className="flex-col flex" action="/">
                    <label className="my-3.5 primaryColorW text-justify text-lg font-semibold" for="aliasName">Your alias or username</label>
                    <input value={reqFields.userName} onChange={(e) => {reqFieldsDispatch({ type: "userNameInp", payload: e.target.value})}} className="mb-7  p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="aliasName" placeholder="enter your username!" required/>

                    <label className="my-3.5 primaryColorW text-justify text-lg font-semibold" for="ownerName">Name(Owner) </label>
                    <input value={reqFields.userOwnerName} onChange={(e) => {reqFieldsDispatch({ type: "userOwnerNameInp", payload: e.target.value})}} className="mb-7 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="ownerName" placeholder="what shall we call you you in our newsletter?" required/>

                    <label className="m-3.5 primaryColorW text-justify text-lg font-semibold" for="email">Email</label>
                    <input value={reqFields.userEmail} onChange={(e) => {reqFieldsDispatch({ type: "userEmailInp", payload: e.target.value})}} className="mb-7 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="text" id="email" placeholder="where we can contact you?" required/>
                    

                    <button onClick={onClickUpdate} className="self-end primaryColorW  w-32 h-12 btnBgColor rounded-xl text-lg font-bold">Update</button>

                    <hr className="m-4"/>

                    <label className="my-3.5 primaryColorW text-justify text-lg font-semibold" for="passsWord">Create Password</label>
                    <input value={passFields.userPassword} onChange={(e) => {passFieldsDispatch({ type: "userPasswordInp", payload: e.target.value})}} className="mb-7 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="password" id="passsWord" placeholder="create a passsword" minLength={8} maxLength={16} required/>

                    <label className="my-3.5 primaryColorW text-justify text-lg font-semibold" for="cnfPassWord">Confirm Password</label>
                    <input value={uiFields.cnfPassword} onChange={(e) => {uiFieldsDispatch({ type: "cnfPasswordInp", payload: e.target.value})}} className="mb-7 p-0.8 h-12 rounded-xl inputFieldColor primaryColorW pl-2.5" type="password" id="cnfPassWord" placeholder="confirm your password"/>
                    {uiFields.errPswrd && <p className = "text-xs font-normal text-justify text-red-600">*Password do not match</p>}

                    <button onClick={onClickChange} className="self-end primaryColorW  w-56 h-12 btnBgColor rounded-xl text-lg font-bold">Change My Passsword</button>

                </form>
            </div>
        </div>  
        { uiFields.editUserAlert && <EditUserAlert />}
    </div>        
    );
}

export default EditUser;