import { NavLink } from "react-router";

export function FooterComponent() {
  return (
    <footer className="bg-neutral-100">
      <div className="container">
        <div className="items-center justify-between py-20 md:flex md:py-[100px]">
          <div className="mb-10 md:mb-0">
            {/* logo */}
            <div className="mb-10 md:mb-8">
              <NavLink to="/">
                <img src="/images/footer-logo.svg" alt="logo" />
              </NavLink>
            </div>
            {/* 連結 */}
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <NavLink to="/" className="text-body text-neutral-0">
                常見問題
              </NavLink>
              <NavLink to="/" className="text-body text-neutral-0">
                關於我們
              </NavLink>
              <NavLink to="/" className="text-body text-neutral-0">
                隱私權政策
              </NavLink>
              <NavLink to="/" className="text-body text-neutral-0">
                使用者條款
              </NavLink>
            </div>
          </div>
          <div className="">
            {/* 社交媒體 */}
            <div className="mb-4 flex items-center gap-4 md:justify-end">
              <button>
                <img src="/icons/btn_line.svg" alt="line" />
              </button>
              <button>
                <img src="/icons/btn_yt.svg" alt="yt" />
              </button>
              <button>
                <img src="/icons/btn_fb.svg" alt="fb" />
              </button>
            </div>
            <p className="text-body2 text-neutral-300">
              copyright © 2025 ZOBAA 旅遊網站 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
