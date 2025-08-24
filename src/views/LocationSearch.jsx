import { GuideCard } from "@/components/card/GuideCard";
import { JourneyCard } from "@/components/card/JourneyCard";
import { SVGCoolorComponent } from "@/components/SVGColorComponent";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export function LocationSearch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tab, setTab] = useState(0);
  const osakaList = [
    { id: 1, image: "./images/location/osaka-1.png" },
    { id: 2, image: "./images/location/osaka-2.png" },
    { id: 3, image: "./images/location/osaka-3.png" },
    { id: 4, image: "./images/location/osaka-4.png" },
    { id: 5, image: "./images/location/osaka-5.png" },
  ];
  const journeyList = [
    {
      id: 1,
      image: "./images//location/top-1.png",
      title: "環球影城超值一日遊｜哈利波特園區＋快速通關體驗",
      tags: ["即買即用", "5 天前可免費取消"],
      star: "4.8",
      comments: "1029",
      info: "1,000+ 個已訂購",
      countPrice: 5480,
      price: 6200,
    },
    {
      id: 2,
      image: "./images//location/top-2.png",
      title: "奈良梅花鹿餵食體驗＋和服散策｜日式風情輕旅行",
      tags: ["中文導覽", "5 天前可免費取消"],
      star: "4.7",
      comments: 880,
      info: "900+ 個已訂購",
      countPrice: 2250,
      price: 2800,
    },
    {
      id: 3,
      image: "./images//location/top-3.png",
      title: "黑門市場美食巡禮｜在地職人帶路吃遍大阪經典小吃",
      tags: ["專業導覽", "5 天前可免費取消"],
      star: "4.6",
      comments: "540",
      info: "700+ 個已訂購",
      countPrice: 1580,
      price: 2500,
    },
    {
      id: 4,
      image: "./images//location/top-4.png",
      title: "大阪夜景直升機體驗｜空中俯瞰梅田摩天輪＋海遊館",
      tags: ["即買即用", "7 天前可免費取消"],
      star: "4.7",
      comments: "319",
      info: "600+ 個已訂購",
      countPrice: 6890,
      price: 8890,
    },
  ];
  const guideList = [
    {
      id: 1,
      image: "./images/location/guide-1.png",
      tags: ["大阪", "老街巡禮"],
      title: "空堀商店街的散步節奏",
      context:
        "離開熱鬧難波，走進空堀這座時間凍結的老街，每家店都像一段回憶：木造喫茶、手工小物、安靜的巷弄轉角。這裡沒有觀光氣氛，只有城市最真實的日常樣貌...",
    },
    {
      id: 2,
      image: "./images/location/guide-2.png",
      tags: ["大阪", "庶民美食"],
      title: "深夜的章魚燒與便利商店啤酒",
      context:
        "難波站邊的小巷，有開到凌晨的章魚燒老店。坐在路邊配一罐便利商店啤酒，看路人談天、喝醉、笑鬧，這種庶民感才是我最懷念的大阪味道。",
    },
    {
      id: 3,
      image: "./images/location/guide-3.png",
      tags: ["大阪", "靜態旅行"],
      title: "一個人在中之島圖書館待一整天",
      context:
        "陰天的中之島很安靜，我選擇在百年圖書館裡消磨一整天。閱讀、打盹、寫明信片，從高聳書架與拱形窗邊找到片刻的呼吸空間。不趕行程的日子，才最像我想要的旅途。",
    },
    {
      id: 4,
      image: "./images/location/guide-4.png",
      tags: ["大阪", "在地文化"],
      title: "跟著在地人玩「新世界」",
      context:
        "走進「新世界」，才發現大阪有多狂、有多生活。串炸店裡全是吆喝聲、立吞店排滿上班族，還有拍不完的霓虹與搞笑招牌。這一區又亂又熱鬧，但真實又迷人。",
    },
  ];
  const [isMobileView, setIsMobileView] = useState(false);
  // 檢查是否為手機版
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 1320);
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);

    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  // 自動播放邏輯（手機版）
  useEffect(() => {
    if (!isMobileView) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % osakaList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [osakaList.length, isMobileView]);

  return (
    <main>
      <section className="py-10 lg:pt-[168px] lg:pb-20">
        <div className="container">
          <div className="text-body gap text-primary-100 mb-10 hidden gap-3 lg:flex">
            <NavLink to={"/"}>首頁</NavLink>/<NavLink to={"/"}>日本</NavLink>/
            <NavLink to={"/"}>關西</NavLink>/
            <NavLink className={"text-neutral-60 pointer-events-none"}>
              大阪
            </NavLink>
          </div>
          <h1 className="text-h3 lg:text-h1 mb-2 text-neutral-100">大阪</h1>
          <p className="text-body2 text-neutral-80 lg:text-body mb-6">
            大阪，一座融合傳統與現代的城市，擁有豐富的歷史文化、熱鬧的購物街區與世界知名的美食天堂。從氣派的大阪城到霓虹閃爍的道頓堀，每一處都充滿驚喜。無論是第一次造訪，還是再次回味，大阪總能用它的熱情與魅力，讓你留下難忘回憶。
          </p>
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out lg:grid lg:translate-0 lg:grid-cols-4 lg:grid-rows-2 lg:gap-2"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {osakaList.map((item) => {
                return (
                  <img
                    key={item.id}
                    src={item.image}
                    alt="osaka"
                    className={`${item.id == 1 && "lg:col-span-2 lg:row-span-2 lg:h-full"}`}
                  />
                );
              })}
            </div>

            <NavLink
              to={"/product"}
              className={
                "btn-default btn-secondary absolute right-3 bottom-3 w-fit"
              }
            >
              查看更多
            </NavLink>
            <div className="absolute bottom-3 left-3 flex gap-1 lg:hidden">
              {osakaList.map((item) => {
                return (
                  <span
                    key={item.id}
                    className={`${item.id == currentSlide + 1 ? "bg-primary-100 w-6 rounded-[100px]" : "bg-neutral-0 size-2 rounded-full"} block h-2 transition-all duration-500 ease-in-out`}
                  ></span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <h2 className="text-h3 text-primary-100 lg:text-h1 mb-5 lg:mb-10">
            想怎麼玩大阪？
            <br className="lg:hidden" />
            熱門分類快速選！
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:flex lg:gap-6">
            <div className="border-neutral-40 w-full overflow-hidden rounded-2xl border hover:shadow-[0px_4px_40px_0px_#0000001A]">
              <div className="bg-primary-10 flex items-center justify-center py-5">
                <img
                  src="./images/location/category-1.svg"
                  alt="category"
                  className="size-16 lg:size-[150px]"
                />
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-title lg:text-h6 mb-2">交通優惠</h3>
                <p className="text-body2 lg:text-body">20+ 種選擇</p>
              </div>
            </div>
            <div className="border-neutral-40 w-full overflow-hidden rounded-2xl border hover:shadow-[0px_4px_40px_0px_#0000001A]">
              <div className="bg-primary-10 flex items-center justify-center py-5">
                <img
                  src="./images/location/category-2.svg"
                  alt="category"
                  className="size-16 lg:size-[150px]"
                />
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-title lg:text-h6 mb-2">一日遊</h3>
                <p className="text-body2 lg:text-body">50+ 種選擇</p>
              </div>
            </div>
            <div className="border-neutral-40 w-full overflow-hidden rounded-2xl border hover:shadow-[0px_4px_40px_0px_#0000001A]">
              <div className="bg-primary-10 flex items-center justify-center py-5">
                <img
                  src="./images/location/category-3.svg"
                  alt="category"
                  className="size-16 lg:size-[150px]"
                />
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-title lg:text-h6 mb-2">景點門票</h3>
                <p className="text-body2 lg:text-body">70+ 種選擇</p>
              </div>
            </div>
            <div className="border-neutral-40 w-full overflow-hidden rounded-2xl border hover:shadow-[0px_4px_40px_0px_#0000001A]">
              <div className="bg-primary-10 flex items-center justify-center py-5">
                <img
                  src="./images/location/category-4.svg"
                  alt="category"
                  className="size-16 lg:size-[150px]"
                />
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-title lg:text-h6 mb-2">美食餐廳</h3>
                <p className="text-body2 lg:text-body">80+ 種選擇</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <h2 className="text-h3 text-primary-100 lg:text-h1 mb-5 lg:mb-10">
            大阪 TOP 10!
          </h2>
          <div className="relative -mx-3">
            <button className="btn-default btn-secondary group absolute top-1/2 -left-20 hidden border-0 px-4 shadow-[0px_4px_12px_0px] shadow-[#00000026] 2xl:block">
              <SVGCoolorComponent
                color={"black"}
                url={"./icons/ic_ArrowLeft.svg"}
                size={6}
              />
            </button>
            <button className="btn-default btn-secondary group absolute top-1/2 -right-20 hidden border-0 px-4 shadow-[0px_4px_12px_0px] shadow-[#00000026] 2xl:block">
              <SVGCoolorComponent
                color={"black"}
                url={"./icons/ic_ArrowRight.svg"}
                size={6}
              />
            </button>
            <div className="scrollbar-hide flex gap-6 overflow-scroll px-3">
              {journeyList.map((item) => {
                return (
                  <JourneyCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    tags={item.tags}
                    star={item.star}
                    comments={item.comments}
                    info={item.info}
                    countPrice={item.countPrice}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <h2 className="text-h3 lg:text-h1 text-primary-100 mb-5 lg:mb-10">
            來自 ZOBAA 的<br className="lg:hidden" />
            大阪推薦
          </h2>
          <div className="-mx-3 mb-5 lg:mb-10">
            <div className="scrollbar-hide flex gap-6 overflow-scroll px-3">
              <button
                className={`tab ml-2 text-nowrap ${tab == 0 && "active"}`}
                onClick={() => setTab(0)}
              >
                觀光行程
              </button>
              <button
                className={`tab text-nowrap ${tab == 1 && "active"} `}
                onClick={() => setTab(1)}
              >
                景點門票
              </button>
              <button
                className={`tab text-nowrap ${tab == 2 && "active"}`}
                onClick={() => setTab(2)}
              >
                交通優惠
              </button>
              <button
                className={`tab text-nowrap ${tab == 3 && "active"} `}
                onClick={() => setTab(3)}
              >
                美食餐廳
              </button>
              <button
                className={`tab text-nowrap ${tab == 4 && "active"} `}
                onClick={() => setTab(4)}
              >
                本月優惠
              </button>
            </div>
          </div>
          <div className="relative -mx-3">
            <button className="btn-default btn-secondary group absolute top-1/2 -left-20 hidden border-0 px-4 shadow-[0px_4px_12px_0px] shadow-[#00000026] 2xl:block">
              <SVGCoolorComponent
                color={"black"}
                url={"./icons/ic_ArrowLeft.svg"}
                size={6}
              />
            </button>
            <button className="btn-default btn-secondary group absolute top-1/2 -right-20 hidden border-0 px-4 shadow-[0px_4px_12px_0px] shadow-[#00000026] 2xl:block">
              <SVGCoolorComponent
                color={"black"}
                url={"./icons/ic_ArrowRight.svg"}
                size={6}
              />
            </button>
            <div className="scrollbar-hide flex gap-6 overflow-scroll px-3">
              {journeyList.map((item) => {
                return (
                  <JourneyCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    tags={item.tags}
                    star={item.star}
                    comments={item.comments}
                    info={item.info}
                    countPrice={item.countPrice}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-10 py-10 lg:py-[120px]">
        <div className="container">
          <div className="mb-5 items-center justify-between lg:mb-20 lg:flex">
            <div className="mb-2">
              <h2 className="text-h3 lg:text-h1 text-primary-100 mb-2">
                旅人攻略
              </h2>
              <h2 className="text-h3 lg:text-h1 text-primary-100">
                看看大家怎麼玩！
              </h2>
            </div>
            <div>
              <p className="text-title lg:text-h6 text-primary-100 mb-2">
                這裡不只是遊記，更是來自旅人親身經歷的風格指南與靈感筆記。
              </p>
              <p className="text-title lg:text-h6 text-primary-100">
                跟著他們的腳步走，找到屬於你的旅行意義。
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {guideList.map((item) => {
              return (
                <GuideCard
                  key={item.id}
                  tags={item.tags}
                  title={item.title}
                  context={item.context}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
