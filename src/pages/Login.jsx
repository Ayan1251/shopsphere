import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name) return alert("Enter name");

    localStorage.setItem("user", name);
    nav("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-white shadow rounded">
        <h2 className="mb-4 text-xl font-bold">Login</h2>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />

        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 w-full cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;