import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Login() {
    const [post, setPost] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate(); // Hook for navigation

    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload
        console.log(post);

        // Make the login request
        axios.post(
            "https://food-recipe-app-backend-aaka.onrender.com/api/auth/sign-in",
            JSON.stringify(post),
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        .then((response) => {
            const token = response.data.token;
            localStorage.setItem("token", token); // Store token in localStorage

            // Redirect to dashboard after successful login
            navigate("/dashboard");
        })
        .catch((err) => {
            console.error(err); // Log the error for debugging
            alert("Login failed! Please check your email or password."); // Show user-friendly error
        });
    };

    return (
        <div className="flex bg-white text-gr">
            <div className="overflow-hidden w-[700px] h-[600px]">
                <img src="/2pp.png" alt="Login illustration" />
            </div>
            <div className="grid">
                <div>
                    <h1 className="font-bold text-[40px] mt-10 ml-36 hover:text-black duration-700">
                        Welcome Back!
                    </h1>
                    <div>
                        <input
                            onChange={handleInput}
                            name="email"
                            className="border-2 border-black p-3 rounded-xl ml-24 w-[400px] mt-12 mb-10"
                            type="text"
                            placeholder="Your Email address"
                        />
                        <div className="border-black border-2 items-center bg-white ml-24 p-3 rounded-xl flex justify-between">
                            <input
                                onChange={handleInput}
                                name="password"
                                type="password" // Change to "password" for security
                                placeholder="Your Password"
                            />
                            <button
                                className="text-black border-2 font-bold"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const passwordInput = document.querySelector(
                                        'input[name="password"]'
                                    );
                                    if (passwordInput.type === "password") {
                                        passwordInput.type = "text";
                                    } else {
                                        passwordInput.type = "password";
                                    }
                                }}
                            >
                                show
                            </button>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="font-bold p-3 ml-24 rounded-xl mt-12 w-[400px] text-center text-white bg-gr hover:bg-black duration-700"
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
                <div className="flex justify-between ml-24">
                    <Link
                        to="/register"
                        className="text-gr hover:text-black duration-700"
                    >
                        Create an account
                    </Link>
                    <p className="text-gr hover:text-black duration-700">
                        Forgot Password
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;