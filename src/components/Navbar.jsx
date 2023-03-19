import React, { useEffect, useState } from "react";

function Navbar() {
  const [Navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.screenY);
    if (window.screenY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [changeBackground]);

  // handleNextClick = () => {
  //   console.log("jack");
  // };
  return (
    <nav className={Navbar ? "active" : "Navbar"}>
      <span className="pt-3 ml-64 text-white ">
        <button type="button ">
          <i className="fa-solid fa-user-plus text-gray-50 "></i>
        </button>
        <i className=" px-14 fa-solid fa-user-plus text-gray-50"></i>
      </span>
      <div className="ml-64 ">
        <button
          id="Btn"
          className="w-24 h-8 mt-2 text-sm font-bold text-white border-2 rounded-full ml-96 rou hover:bg-slate-600"
        >
          {" "}
          Upgrade{" "}
        </button>
        <span className="mt-3 ml-16 text-lg hover: ">
          <i className="fa-solid fa-user-plus text-gray-50 "></i>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
