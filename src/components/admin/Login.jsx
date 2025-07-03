import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e)=> {
      e.preventDefault
    }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-black/30 shadow-xl shadow-black/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold"><span 
            className="text-primary">Admin</span> Login</h1>
            <p className="font-light">Enter Your Credentials To Acces The Admin Panel</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-6 w-full sm:max-w-md text-gray-600">
            <div className="flex flex-col">
              <label> Email </label>
              <input onChange={e=> setEmail(e.target.value)} value={email} type="email" required placeholder="Your Email id" className="border-b-2 border-gray-300 p-2 outline-none mb-6"/>
            </div>

            <div className="flex flex-col">
              <label> Password </label>
              <input onChange={e=> setPassword(e.target.value)} value={password} type="email" required placeholder="Enter Your Password" className="border-b-2 border-gray-300 p-2 outline-none mb-6"/>
            </div>
            <button type="submit" className="w-full py-3 font-medium bg-black text-white rounded cursor-pointer hover:bg-black/70 transition-all"> Login </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
