import "./register.css";
import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const [message, setMessage] = useState("");

  let username = useRef();
  let email = useRef();
  let password = useRef();


  let onRegister = async () => {
    try {
      // Step1. Mendapatkan value dari masing-masing inputan
      let inputUsername = username.current.value;
      let inputEmail = email.current.value;
      let inputPassword = password.current.value;

      // Step2. Validasi
      if (!inputUsername || !inputEmail || !inputPassword) throw { message: "Data Not Complete!" };

      // step 3.0 check apakah data sudah ada atau belum
      let checkUsername = await axios.get(`http://localhost:5000/users?username=${inputUsername}`);
      let checkEmail = await axios.get(`http://localhost:5000/users?email=${inputEmail}`);

      if (checkUsername.data.length > 0 || checkEmail.data.length > 0) throw { message: `account already exist` };

      // Step3. Simpan data user ke dalam json
      await axios.post("http://localhost:5000/users", { username: inputUsername, email: inputEmail, password: inputPassword });
      username.current.value = "";
      email.current.value = "";
      password.current.value = "";
      toast.success("Successfully Register!");
      setMessage("");
    } catch (error) {
      // error = { message: 'Data Not Complete!' }
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center py-20">
      <h1 className="my-fs-25 font-bold">Create an account</h1>
      <h1 className="my-fs-15 my-grey mt-5 font-bold">PURWADHIKA® REWARDS</h1>
      <p className="my-grey mt-3" style={{ maxWidth: "600px", textAlign: "center" }}>
        Join Purwadhika Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.
      </p>
      <div className="cards mt-20 px-20 py-10 w-2/5 rounded-md">
        <h1 className="mt-5 mb-3 font-bold">Personal Information</h1>
        <div>
          <input ref={username} type="text" placeholder="Input you username" className="w-100 py-2 px-2 w-100 rounded-md" style={{ border: "1px solid grey", width: "100%" }} />
        </div>
        <h1 className="mt-5 mb-3 font-bold">Account Security</h1>
        <div>
          <input ref={email} type="text" placeholder="Input you email" className="py-2 px-2 w-100 rounded-md" style={{ border: "1px solid grey", width: "100%" }} />
        </div>
        <div>
          <input ref={password} type="password" placeholder="Input you password" className="py-2 px-2 w-100 rounded-md mt-3" style={{ border: "1px solid grey", width: "100%" }} />
        </div>
        <div style={{ color: "red" }}>{message}</div>
        <button onClick={onRegister} className="bg-white text-black border border-black px-3 py-3 mt-3 rounded-full self-end">
          Register
        </button>
      </div>
    </div>
  );
}
