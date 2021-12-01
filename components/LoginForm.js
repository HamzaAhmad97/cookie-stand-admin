import { useState } from "react";
import { useAuth } from "../contexts/auth";
export default function LoginForm() {
  const { login } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    login(userName, password);
  };
  return (
    <div className="relative min-h-screen border border-black">
      <form
        className="flex flex-col justify-center w-1/2 gap-2 m-auto mt-40 align-middle bg-green-200 border border-black rounded-lg"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col m-4 ">
          <label className="mb-2 font-bold text-center"> User Name</label>
          <input
            className="px-1 py-1"
            type="text"
            placeholder=" User Name"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex flex-col m-4 ">
          <label className="mb-2 font-bold text-center">Password</label>
          <input
            className="px-1 py-1"
            type="password"
            placeholder=" Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-1/4 py-1 m-auto mt-2 mb-4 bg-green-500 rounded-md hover:bg-green-300"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
