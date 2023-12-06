import logo from "../assets/images/logo/paylog_logo.png";

export default function Header() {
  return (
    <div className="w-full border-solid border-b-2 border-slate-400 bg-inherit">
      <img src={logo} className="w-100px"></img>
    </div>
  );
}
