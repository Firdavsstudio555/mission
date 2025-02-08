
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../service/api/api";
export function Register() {
    const navigate = useNavigate()

    const [post, setPost] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleInput = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }
    function handleSubmit() {
        console.log(post)

        api.post("/auth/sign-up", JSON.stringify(post), {

        }).then(response => {
            if (response.data.success) {
                navigate("/login")
            }
        }).catch(err => console.log(err))
    }
    return (
        <div className="flex bg-white text-gr">
            <div className="overflow-hidden w-[900px] h-[600px]">
                <img src="/food.png" alt="" />
            </div>
            <div>
                <h1 className="font-bold text-[40px] mt-10 ml-36 hover:text-black duration-700">Welcome Back!</h1>
                <input name="name" onChange={handleInput} className="ring-0 outline-none border-2 border-black  p-3 rounded-xl ml-24 w-[400px] mt-12 mb-10" type="text" placeholder="Your First Name" />
                <input name="email" onChange={handleInput} className="ring-0 outline-none border-2 border-black  p-3 rounded-xl ml-24 w-[400px] mb-10" type="text" placeholder="Your Email addresse" />
                <div className="border-black border-2  items-center w-[400px] bg-white ml-24 p-3 rounded-xl flex justify-between">
                    <input className="ring-0 outline-none" name="password" onChange={handleInput} type="text" placeholder="Your Password" />
                    <button className="text-black border-2 font-bold">show</button>
                </div>
                <button onClick={handleSubmit} className="font-bold p-3 ml-24 rounded-xl mt-12 w-[400px] text-center text-white bg-gr hover:bg-black duration-700">SIGN UP</button>
                <p className="ml-44 mt-12">Already have an account. <Link className="font-bold" to="/login">LOGIN</Link></p>
            </div>
        </div>
    )
}