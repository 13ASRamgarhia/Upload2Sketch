import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import axios from "axios";
import loginContext from '../Context/loginContext';

const Signup = () => {
  document.title = "Create Account | CineSense"
  const context = useContext(loginContext)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { setProgress } = context

    const [user,setUser] = useState({
    fullName:"",email:"",password:"",confirmPassword:""
    })
  
    const [error, setError] = useState({
        fullName: "", email: "", password: "", confirmPassword:""
    })

  const clearForm = () => {
    setUser({fullName:"",email:"",password:"",confirmPassword:""})
  }

  const clearError = () => {
    setError({fullName:"",email:"",password:"",confirmPassword:""})
  }

  const handleInputs = (e) => {
    let inputName = e.target.name
    let inputValue = e.target.value

    setUser({...user,[inputName]:inputValue})
    setError({fullName:"",email:"",password:"",confirmPassword:""})
  }

  const handleValidation = () => {
    const emailRegex = /.*@.*\.com$/;

    if(user.fullName.length === 0){
        setError({...error,fullName:"Please enter a valid name"})
        return true
    }

    if(user.fullName.length < 3){
        setError({...error,fullName:"Please enter a valid name"})
        return true
    }

    if(user.fullName.length > 35){
        setError({...error,fullName:"Maximum character limit is 35"})
        return true
    }

    if(!(emailRegex.test(user.email))){
        setError({...error,email:"Please enter a valid email address"})
        return true
    }

    if(user.password.length < 8){
        setError({...error,password:"Password must be at least 8 characters"})
        return true
    }

    if(user.password !== user.confirmPassword){
        setError({...error,confirmPassword:"Password and Confirm Password must match"})
        return true
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProgress(10)
    clearError();
    if(!handleValidation()){
        console.log(user)

      try {
          const res = await axios.post(`https://cinesense-hgch.onrender.com/sign_up`, {
          name: user.fullName,
          email: user.email,
          password: user.password,
        }
        );
        setProgress(25)

        const statusCode = res.data.statusCode

        if(statusCode === 200){
          setUser({ fullName: "", email: "", password: "", confirmPassword: "" });
          setProgress(100)          
        }
        else if(statusCode === 404){
          console.log("Error Occured")
          setProgress(100)
        }
      } catch (err) {
        console.log(err.error);
        setProgress(100)
      }

      clearForm();
    }
    else{
      setProgress(100)
    }
  }

  const handlePasswordShow = () => {
    setShowPassword(!showPassword)
  }

  const handleConfirmPasswordShow = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }


    return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full laptop:w-[50%]">
      <div className="bg-cardColor px-4 py-4 h-full rounded-xl">
        <h2 className="text-3xl font-bold text-cardHeading mb-10">
          Create an account to get started
        </h2>
        <form onSubmit={handleSubmit} id="signUpForm">
          <div className="formGroup m-auto mt-3 py-1 text-lg space-x-2 border-b border-cardBody">
            <label htmlFor="fullName">
              <Icon name="user" size="large" className="text-cardBody" />
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              autoComplete="off"
              autoCapitalize="off"
              value={user.fullName}
              onChange={handleInputs}
              placeholder="Your name"
              className="formInput bg-transparent focus:outline-0 w-[80%]"
            />
          </div>
          <p className="text-cardBodyLight text-sm mb-3">{error.fullName}</p>

          <div className="formGroup m-auto mt-3 py-1 text-lg space-x-2 border-b border-cardBody">
            <label htmlFor="email">
              <Icon name="mail" size="large" className="text-cardBody" />
            </label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              autoCapitalize="off"
              value={user.email}
              onChange={handleInputs}
              placeholder="Your email"
              className="formInput bg-transparent focus:outline-0 w-[80%]"
            />
          </div>
          <p className="text-cardBodyLight text-sm mb-3">{error.email}</p>

          <div className="formGroup m-auto mt-3 py-1 text-lg space-x-2 border-b border-cardBody flex">
            <label htmlFor="password">
              <Icon name="lock" size="large" className="text-cardBody" />
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="off"
              autoCapitalize="off"
              value={user.password}
              onChange={handleInputs}
              placeholder="Create password"
              className="formInput bg-transparent focus:outline-0 w-[80%]"
            />
            <div className="">
            <button type="button" className="" onClick={handlePasswordShow}><Icon name={showPassword ? "eye slash" : "eye"} size="large" /></button>
            </div>
          </div>
          <p className="text-cardBodyLight text-sm mb-3">{error.password}</p>

          <div className="formGroup m-auto mt-3 py-1 text-lg space-x-2 border-b border-cardBody flex">
            <label htmlFor="password">
              <Icon name="lock" size="large" className="text-cardBody" />
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="off"
              autoCapitalize="off"
              value={user.confirmPassword}
              onChange={handleInputs}
              placeholder="Confirm password"
              className="formInput bg-transparent focus:outline-0 w-[80%]"
            />
            <div className="">
              <button type="button" className="" onClick={handleConfirmPasswordShow}><Icon name={showConfirmPassword ? "eye slash" : "eye"} size="large" /></button>
            </div>
          </div>
          <p className="text-cardBodyLight text-sm mb-3">{error.confirmPassword}</p>

          <div className="mt-3 w-fit">

          <button type="button" onClick={clearForm} className="clearBtn bg-transparent text-cardBody text-base underline">click here to clear form</button>
          </div>
          
          <div className="flex justify-center items-center mt-6">

          <button type="submit" className="submitBtn bg-cardHeading text-navbarText text-lg rounded-lg px-12 py-2 mx-auto border-2 border-logoColor hover:bg-logoColor hover:text-white hover:scale-110 duration-200">Sign Up</button>
          </div>
          <div className="flex justify-center items-center mt-6">

          <Link to="/Login" className="text-headingColor hover:text-headingColor underline hover:underline text-base hover:scale-110 duration-200">I already have an account</Link>
          </div>

        </form>

        <div className="mt-6 flex flex-col items-center">
            <p className="">OR</p>
            <Link to="/Prefrences" className="mt-3 text-headingColor hover:text-headingColor underline hover:underline text-base hover:scale-110 duration-200">Continue as Guest</Link>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Signup;
