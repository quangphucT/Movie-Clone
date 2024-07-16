import { Link } from "react-router-dom";
import "./index.scss";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="header">
      <div className={`header__search ${showSearch ? "active" : ""}`}>
        <input
          placeholder="Search for a movie or tv show...."
          type="text"
        ></input>
        <IoMdClose size={20} onClick={() => setShowSearch(false)} />
      </div>
      <div className="header__logo">
        <Link to={"/"}>
          <img
            src="https://movix-main.vercel.app/assets/movix-logo-d720c325.svg"
            width={164}
            height={50}
            alt=""
          ></img>
        </Link>
      </div>
      <nav className="header__nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/movie-management"}>Movie Management</Link>
        </li>
        <li>
          <IoSearchOutline onClick={() => setShowSearch(true)} size={20} />
        </li>
        <li>
          <Link style={{ display: "flex", alignItems: "center" }} to={"/login"}>
            <LuUser2 size={20} />
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
