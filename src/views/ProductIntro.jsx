import { SVGCoolorComponent } from "@/components/SVGColorComponent";
import { useEffect, useState } from "react";

export function ProductionIntro() {
  const carousel = [
    {
      id: 1,
      image: "./images/site/harukas-1.png",
    },
    {
      id: 2,
      image: "./images/site/harukas-2.png",
    },
    {
      id: 3,
      image: "./images/site/harukas-3.png",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileView, setIsMobileView] = useState(0);
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 1320);
    };
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => () => window.removeEventListener("resize", checkMobileView);
  }, []);

  useEffect(() => {
    if (!isMobileView) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carousel.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carousel.length, isMobileView]);
  return (
    <main>
      <section className="lg:pt-[168px] lg:pb-20">
        <div className="container">
          <div className="relative -mx-3">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carousel.map((item) => {
                  return <img src={item.image} alt="harukas" />;
                })}
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-1 lg:hidden">
              {carousel.map((item) => {
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
      <section className="py-10">
        <div className="container">
          <div className="bg-primary-10 rounded-3xl p-6">
            <div className="mb-6">
              <h1 className="text-h5 mb-2 text-neutral-100">
                阿倍野Harukas300觀覽台
              </h1>
              <button className="text-title text-primary-100 flex p-2">
                <SVGCoolorComponent
                  color={"primary-100"}
                  url={"./icons/ic_favorite-default.svg"}
                  size={6}
                  otherClass="mr-2"
                />
                收藏
              </button>
            </div>
            <div className="mb-6">
              <div className="mb-3 flex items-center">
                <SVGCoolorComponent
                  color={"yellow-400"}
                  url={"./icons/ic_star.svg"}
                  size={4}
                />

                <p className="border-neutral-60 text-title ml-1 flex items-center border-r pr-3 text-neutral-100">
                  4.8
                  <small className="text-body2 text-neutral-60 ml-1">
                    (1029)
                  </small>
                </p>
                <p className="text-body2 border-neutral-60 border-r px-3 text-neutral-100">
                  1,000+ 個已訂購
                </p>
              </div>
              <p className="text-body2 flex items-center text-neutral-100">
                <SVGCoolorComponent
                  color={"black"}
                  url={"./icons/ic_location.svg"}
                  size={4}
                  otherClass="mr-2"
                />
                阿倍野 HARUKAS 300 海闊天空展望台
              </p>
            </div>
            <div className="mb-6">
              <ul className="list-inside list-disc">
                <li className="text-body text-neutral-80 text-justify">
                  登上日本最高摩天大樓，從 300
                  公尺高空飽覽大阪全景，日夜皆美、四季皆宜。
                </li>
                <li className="text-body text-neutral-80 text-justify">
                  58 樓設有空中庭園與 Sky Garden
                  餐廳，在都市高處也能享受放鬆綠意與美食饗宴。
                </li>
                <li className="text-body text-neutral-80 text-justify">
                  60
                  樓空中迴廊以全景設計打造，無論白天或黃昏，都能盡覽大阪市區與天際線。
                </li>
                <li className="text-body text-neutral-80 text-justify">
                  園區內集結多間熱門品牌與伴手禮店，提供現場退稅服務，讓你購物更便利。
                </li>
              </ul>
            </div>
            <button className="text-body flex w-fit items-center gap-2">
              查看文章
              <SVGCoolorComponent
                color={"black"}
                url={"./icons/ic_ArrowRight2.svg"}
                size={6}
              />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-primary-10 py-10">
        <div className="container">
          <h2 className="text-h3 text-primary-100 mb-6">
            <span className="text-2xl">#</span> 選擇方案
          </h2>
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl">
              <div className="bg-primary-100 relative p-4">
                <h3 className="text-h6 text-white">熱門選擇</h3>
                <SVGCoolorComponent
                  color={"[#F3EEEC33]"}
                  url={"./images/index/bg-deco.svg"}
                  size={"[72px]"}
                  otherClass="absolute bottom-2 left-[5px] "
                />
              </div>
              <div className="border-neutral-40 border bg-white p-4">
                <div className="mb-4 max-w-[200px] overflow-hidden rounded-2xl">
                  <img src="./images/site/harukas-2.png" alt="harukas" />
                </div>
                <h4 className="text-h6 mb-4 text-neutral-100">
                  海闊天空展望台門票
                </h4>
                <div className="mb-8 flex flex-wrap gap-2">
                  <span className="bg-neutral-40 text-body2 text-neutral-80 rounded-lg px-2 py-1">
                    立即確認
                  </span>
                  <span className="bg-neutral-40 text-body2 text-neutral-80 rounded-lg px-2 py-1">
                    有效期：60 天
                  </span>
                  <span className="bg-neutral-40 text-body2 text-neutral-80 rounded-lg px-2 py-1">
                    出示憑證入場
                  </span>
                  <span className="bg-neutral-40 text-body2 text-neutral-80 rounded-lg px-2 py-1">
                    兌換前可免費取消
                  </span>
                </div>
                <div className="mb-6">
                  <ui className="list-inside list-disc">
                    <li className="text-body2 text-neutral-80 text-justify">
                      阿倍野展望台門票僅限使用一次，退場後無法再次入場。
                    </li>
                    <li className="text-body2 text-neutral-80 text-justify">
                      出發前請再次確認設施是否正常營業，請參考官網。如遇臨時休館，恕不另行通知。
                    </li>
                  </ui>
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h5 className="text-h5 mb-1 text-neutral-100">NT$ 415</h5>
                    <h6 className="text-body text-neutral-60 line-through">
                      NT$ 520
                    </h6>
                  </div>
                  <button className="btn-default btn-secondary">
                    選擇方案
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10"></section>
      <section className="py-10"></section>
    </main>
  );
}
