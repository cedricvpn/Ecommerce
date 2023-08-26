import React, { useState } from "react";
import axios from 'axios';
import signin from "../assets/signin.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImageRoBase64 } from "../utility/ImageToBase64";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadProfilePicture = async (e) => {
    const data = await ImageRoBase64(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  console.log(import.meta.env.VITE_REACT_APP_SERVER_DOMAIN);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {firstName,lastName, email,password ,confirmPassword, image} = data
       
        if(firstName && lastName && email && password && confirmPassword ){
            if(password === confirmPassword){
                try {
                    const response=await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/signup`, {firstName,lastName, email,password,confirmPassword,image}); 
                    if (response.status === 201) {
                      setError('')
                      toast.success('Données enregistrées avec succès');
                      navigate('/login')
                    }
                  } catch (error) {
                    if (error.response && error.response.data && error.response.data.error) {
                      toast.error(error.response.data.error);
                      setError(error.response.data.error)
                    } else {
                      toast.error('Une erreur est survenue lors de l\'enregistrement des données');
                      setError('Une erreur est survenue lors de l\'enregistrement des données')
                    }
                  }
            }
            else{
                toast.warn('Password is different from the confirm password')
            }
        }
        else{
           toast.warn('Please field all the field')
        }
       
      };
  
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        {/*<h1 className="text-center text-2xl font-bold">Signup</h1>*/}

        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative">
          <img
            src={data.image ? data.image : signin}
            alt=""
            className="w-full h-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0  h-1/3 bg-slate-500 bg-opacity-70 w-full text-center">
              <p className="text-sm p-1 text-white cursor-pointer">Upload</p>
            </div>
          </label>
          <input
            type={"file"}
            name="profileImage"
            accept="image/*"
            id="profileImage"
            className="hidden"
            onChange={handleUploadProfilePicture}
          />
        </div>

        <form className="w-full p-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-300 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name: </label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-300 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email: </label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-300 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password: </label>
          <div className="flex px-2 py-1 bg-slate-300  rounded focus-within:outline focus-within:outline-blue-300 cursor-pointer">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-300 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm Password: </label>
          <div className="flex px-2 py-1 bg-slate-300  rounded focus-within:outline focus-within:outline-blue-300 cursor-pointer">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className=" w-full bg-slate-300 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-green-500 hover:bg-green-600 text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign up
          </button>
        </form>
        <p className="text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-green-400 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
