import { Link } from "react-router-dom";
export default function Navbar(props) {
  console.log(props.myUsername.username);
  return (
    <div className="flex justify-between px-10 items-center shadow shadow-slate-300" style={{ height: "70px" }}>
      <div>
        <span>Logo</span>
        <span className="ml-3 font-bold">Order</span>
        <span className="ml-3 font-bold">Cards</span>
        <span className="ml-3 font-bold">Gift</span>
      </div>
      <div>
        <span className="mr-3">Find a store</span>

        {props.myUsername.username ? (
          <span className="font-bold">Hello, {props.myUsername.username}</span>
        ) : (
          <>
            <span>
              <button className="bg-white text-black px-3 py-1 rounded-full border border-slate-900 mr-3">
                <Link to="/login">Sign in</Link>
              </button>
            </span>
            <span>
              <button className="bg-black text-white px-3 py-1 rounded-full">
                <Link to="/register">Join now</Link>
              </button>
            </span>
          </>
        )}
      </div>
    </div>
  );
}
