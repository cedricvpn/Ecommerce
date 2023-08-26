import React, { useState } from "react";
import signin from "../assets/signin.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);
  console.log(userData);

  const dispatch = useDispatch();

  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/login`,
          { email, password }
        );

        if (response.status === 200) {
          setError("");
          dispatch(loginRedux(response.data));
          console.log("Connexion réussie");
          toast.success("Connextion reussie");
          console.log(response);
          navigate("/");
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setError(error.response.data.error);
          toast.error(error.response.data.error);
        } else {
          setError("Erreur de connexion");
          toast.error("Erreur de connexion");
        }
      }
    } else {
      toast.warn("veuillez remplire les case");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        {/*<h1 className="text-center text-2xl font-bold">Signup</h1>*/}

        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={signin} alt="" className="w-full h-full" color="green" />
        </div>

        <form className="w-full p-3 flex flex-col" onSubmit={handleSubmit}>
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

          <button className="w-full max-w-[150px] m-auto bg-green-500 hover:bg-green-600 text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-sm mt-2">
          Do not have an account ?{" "}
          <Link to={"/Signup"} className="text-green-400 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
