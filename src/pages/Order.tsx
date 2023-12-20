import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, asyncLogin } from "../actions/actions";
import Modal from "react-modal";
import OrderCategoryTab from "../components/OrderCategoryTab";
import Cart from "../components/Cart";
import ProductMenu from "../components/ProductMenu";
import logo from "../assets/images/logo/paylog_logo.png";

const modalCustomStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    width: "40%",
    height: "60%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid rgb(14 165 233)",
    borderRadius: "0.8rem",
  },
};
Modal.setAppElement("#root");

export default function Order() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("isModalOpen", isModalOpen);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    const user = { username, password };
    dispatch(asyncLogin(user));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  console.log("isLoggedIn", isLoggedIn);

  return (
    <div>
      <OrderCategoryTab setIsModalOpen={setIsModalOpen} />
      <Cart />
      <ProductMenu />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={modalCustomStyles}
      >
        <div className="w-1/5 mt-5">
          <img src={logo} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full mt-20"
        >
          <div className="flex justify-center items-center w-full mb-7 ">
            <label htmlFor="id" className="text-lg font-bold">
              아이디{" "}
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-7/12 ml-6 py-1 px-1 bg-gray-100 border border-slate-500 rounded-md"
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <label htmlFor="password" className="text-lg font-bold">
              비밀번호{" "}
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-7/12 ml-3 py-1 px-1 bg-gray-100 border border-slate-500 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-5/12 mt-20 py-2 bg-sky-500 text-white font-bold rounded-md"
          >
            로그인
          </button>
        </form>
      </Modal>
    </div>
  );
}
