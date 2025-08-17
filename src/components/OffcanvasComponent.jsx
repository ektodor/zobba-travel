import { useEffect } from "react";
import { NavLink } from "react-router";
export function OffcanvasComponent({
  profile = {
    avatar: "/icons/ic_profile.svg",
    name: "訪客",
    mail: "未登入",
    isLogin: false,
  },
  isOffcanvasOpen,
  setIsOffcanvasOpen,
}) {
  // 讓整個頁面無法滑動
  useEffect(() => {
    if (isOffcanvasOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOffcanvasOpen]);
  return (
    <>
      {/* 背景遮罩 */}
      {isOffcanvasOpen && (
        <div
          className="fixed inset-0 z-49 bg-black opacity-40"
          onClick={() => setIsOffcanvasOpen(false)}
        />
      )}

      <div
        className={`${isOffcanvasOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 z-50 flex h-screen w-[327px] transform flex-col bg-white p-6 transition-transform duration-300 ease-in-out`}
      >
        <div className="mb-4 flex items-center">
          <button onClick={() => setIsOffcanvasOpen(false)} className="ms-auto">
            <img src="/icons/ic_close.svg" alt="close" />
          </button>
        </div>
        <div className="border-neutral-40 flex items-center gap-2 border-b pb-4">
          <div
            className={`${profile.isLogin ? "max-w-8" : "bg-primary-40 rounded-full p-1"}`}
          >
            <img src={profile.avatar} alt="user" />
          </div>
          <div>
            <p className="text-title text-primary-100">{profile.name}</p>
            <p className="text-body text-neutral-80">{profile.mail}</p>
          </div>
        </div>
        {profile.isLogin ? (
          <>
            <div className={`pt-4`}>
              <NavLink
                className="flex items-center gap-2 py-3"
                to="/"
                onClick={() => setIsOffcanvasOpen(false)}
              >
                <img src="/icons/ic_order.svg" alt="order" />
                <p className="text-neutral-80 text-body2">訂單管理</p>
              </NavLink>
              <NavLink
                className="flex items-center gap-2 py-3"
                to="/"
                onClick={() => setIsOffcanvasOpen(false)}
              >
                <img src="/icons/ic_favorite-default.svg" alt="favorite" />
                <p className="text-neutral-80 text-body2">我的收藏</p>
              </NavLink>
              <NavLink
                className="flex items-center gap-2 py-3"
                to="/"
                onClick={() => setIsOffcanvasOpen(false)}
              >
                <img src="/icons/ic_setting.svg" alt="setting" />
                <p className="text-neutral-80 text-body2">帳號設定</p>
              </NavLink>
            </div>
            <div className="mt-auto py-3">
              <button className="flex gap-2">
                <img src="/icons/ic_logout.svg" alt="logout" />
                <p className="text-neutral-80 text-body">登出</p>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={`pt-6`}>
              <h6 className="text-h6 text-primary-100 mb-1">歡迎來到 ZOBAA</h6>
              <p className="text-neutral-80 text-body">
                加入會員即可立即訂購、收藏行程，並享相關優惠好禮。
              </p>
            </div>
            <div className="mt-auto py-3">
              <NavLink
                to="/login"
                className="btn btn-primary btn-default flex w-full gap-2"
              >
                登入 / 註冊
              </NavLink>
            </div>
          </>
        )}
      </div>
    </>
  );
}
