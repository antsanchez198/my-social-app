import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import OAuth from '../components/OAuth';

const SignIn = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()
    const { email, password } = formData;
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
        console.log(formData)
    }

    async function onSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                navigate("/");
            })
            .catch((error) => {
                console.log(error)
                setErrorMessage(error.message);
            });
    }

    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>

            <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto lg:gap-10">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="key"
                        className="w-ful rounded-2xl"
                    />
                </div>

                <div className="w-full md:w-[67%] lg:w-[40%]">
                    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                        <input
                            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                            type="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Email Address"
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                                id="password"
                                value={password}
                                onChange={onChange}
                                placeholder="Password"
                            />
                            {showPassword ? <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)} /> : <AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)} />}
                        </div>

                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p>Don't have an account?
                                <Link to="/sign-up" className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Register</Link>
                            </p>
                            <p>
                                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">Forgot Password?</Link>
                            </p>
                        </div>
                        
                        {errorMessage ? <div className="text-red-700 mb-6">{errorMessage}</div> : <></>}
                        
                        <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md
          hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800">
                            Sign in
                        </button>

                        <div
                            className="before:border-t flex before:flex-1 items-center before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300">
                            <p className="text-center font-semibold mx-4">OR</p>
                        </div>

                        <OAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn