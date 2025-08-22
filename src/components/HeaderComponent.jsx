import { NavLink, useLocation } from "react-router";
import { OffcanvasComponent } from "./OffcanvasComponent";
import { useEffect, useState } from "react";
import { SearchComponent } from "./SearchComponent";

export function HeaderComponent() {
  const profile = {
    avatar: "./images/user/avatar-1.png",
    name: "Jessica",
    mail: "jessica.yen@gamil.com",
    isLogin: true,
  };
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      // 當滾動超過 50px 時改變狀態
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    // 清理事件監聽器
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full bg-white ${pathname == "/" ? "lg:fixed lg:top-0" : ""} ${isScrolled ? "" : "lg:bg-transparent"} z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container">
        <div className="flex items-center py-3 lg:py-4">
          {/* logo */}
          <NavLink
            to="/"
            className={`${searchState ? "hidden" : "lg:mr-6 lg:block"} `}
          >
            <img src="./images/primary-logo.svg" alt="logo" />
          </NavLink>
          <div className={`${searchState ? "w-full" : "ms-auto lg:ms-0"}`}>
            <SearchComponent
              searchState={searchState}
              setSearchState={setSearchState}
            />
          </div>
          <div className={`${searchState ? "hidden" : ""} lg:ms-auto lg:mr-4`}>
            <button className="px-3 py-2">
              <img src="./icons/ic_Cart.svg" alt="cart" />
            </button>
          </div>
          <div className={`${searchState ? "hidden" : ""} lg:hidden`}>
            <button className="p-2" onClick={() => setIsOffcanvasOpen(true)}>
              <img src="./icons/ic_menu.svg" alt="nav" />
            </button>
          </div>
          <div
            className={`ms-1 flex items-center ${searchState ? "" : "hidden"} `}
          >
            <button
              onClick={() => setSearchState(false)}
              className="p-2 lg:px-3"
            >
              <img src="./icons/ic_close.svg" alt="close" />
            </button>
          </div>
          <div className={`hidden lg:block`}>
            {profile.isLogin ? (
              <button className="flex items-center">
                <div className="size-6 rounded-full lg:mr-2">
                  <img src={profile.avatar} alt="user" className="" />
                </div>
                <p className="text-title text-primary-100">{profile.name}</p>
              </button>
            ) : (
              <button className="btn btn-default btn-primary">
                登入 / 註冊
              </button>
            )}
          </div>
        </div>
      </div>
      {/* offcanvas */}
      <OffcanvasComponent
        isOffcanvasOpen={isOffcanvasOpen}
        setIsOffcanvasOpen={setIsOffcanvasOpen}
        profile={profile}
      />
    </header>
  );
}
