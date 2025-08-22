import { InspirationCard } from "@/components/card/InspirationCard";
import { JourneyCard } from "@/components/card/journeyCard";
import { PrePurchaseCard } from "@/components/card/PrePurchaseCard";
import { SVGCoolorComponent } from "@/components/SVGColorComponent";
import { useState } from "react";
export function Index() {
  const prePurchaseList = [
    {
      id: 1,
      imageUrl: "./images//index/recommend.png",
      title: "峇里島渡假漫遊",
      context: "精選五星級海灘度假村，專屬私人管家服務，讓您徹底放鬆身心。",
    },
    {
      id: 2,
      imageUrl: "./images//index/recommend-1.png",
      title: "日本深度賞櫻計畫",
      context: "春季限定，東京、京都、大阪賞櫻之旅，體驗日本文化的精髓。",
    },
    {
      id: 3,
      imageUrl: "./images//index/recommend-2.png",
      title: "紐西蘭雪山探險",
      context: "探索南島壯麗的自然風光，體驗各種極限運動和戶外活動。",
    },
    {
      id: 4,
      imageUrl: "./images//index/recommend-3.png",
      title: "摩洛哥迷幻之旅",
      context: "漫步沙漠與古城之間，探索千年文化與色彩繽紛的市集風情。",
    },
  ];
  const inspirationList = [
    {
      id: "1",
      image: "./images//index/map-1.png",
      tags: ["亞洲", "日本京都"],
      title: "走進四季交織的文化時光",
      context: "穿過紅葉與古寺的交錯，感受從櫻花盛開到秋楓染紅的日式浪漫。",
      suggest: "賞楓最佳時間是 11 月中旬，推薦清水寺和南禪寺一帶 🍁",
      btnContext: "立即探索魅力古都",
    },
    {
      id: "2",
      image: "./images//index/map-2.png",
      tags: ["亞洲", "南韓首爾"],
      title: "從街邊美食到韓劇場景",
      context: "白天在弘大小巷探店，夜晚登上南山塔俯瞰整座城市的閃爍。",
      suggest: "弘大周邊週五傍晚最熱鬧，小吃與街頭藝人齊發✨",
      btnContext: "感受韓系風格日常",
    },
    {
      id: "3",
      image: "./images//index/map-3.png",
      tags: ["歐洲", "法國巴黎"],
      title: "在藝術與咖啡香中迷路",
      context: "穿梭左岸書店與畫廊，任由麵包香與建築細節擁抱你的步伐。",
      suggest: "走進瑪黑區，最容易與巴黎風格不期而遇 ☕️",
      btnContext: "立即探索魅力古都",
    },
    {
      id: "4",
      image: "./images//index/map-4.png",
      tags: ["大洋洲", "澳洲雪梨"],
      title: "城市與大自然的交會",
      context: "清晨在海灘做瑜珈，午後漫步歌劇院，享受城市的節奏與野性的呼喚。",
      suggest: "別錯過傍晚在雪梨港看日落＋欣賞歌劇院夜燈 ✨",
      btnContext: "立即探索魅力古都",
    },
    {
      id: "5",
      image: "./images//index/map-5.png",
      tags: ["非洲", "埃及開羅"],
      title: "穿越千年時光的沙漠冒險",
      context:
        "乘著駱駝走過古老遺跡，抬頭仰望太陽神的光芒，在歷史與傳說之間迷失。",
      suggest: "建議早上 8 點前到吉薩金字塔，避開人潮與烈日 ☀️",
      btnContext: "立即探索魅力古都",
    },
  ];
  const journeyList = [
    {
      image: "./images//index/journey-1.png",
      title: "獨家優惠】布萊頓彩色小屋＋森林蒸汽火車一日遊",
      tags: ["即買即用", "5 天前可免費取消"],
      star: "4.2",
      comments: "333",
      info: "500+ 個已訂購",
      countPrice: 4220,
      price: 5220,
    },
    {
      image: "./images//index/journey-2.png",
      title: "無尾熊動物園＋企鵝歸巢雙享之旅",
      tags: ["即買即用", "7 天前可免費取消"],
      star: "4.2",
      comments: 333,
      info: "500+ 個已訂購",
      countPrice: 3890,
      price: 4920,
    },
    {
      image: "./images//index/journey-3.png",
      title: "大洋路經典一日遊｜中文導覽！體驗澳洲最夢幻的海岸線",
      tags: ["中文導覽", "5 天前可免費取消"],
      star: "4.2",
      comments: "333",
      info: "500+ 個已訂購",
      countPrice: 3690,
      price: 4500,
    },
    {
      image: "./images//index/journey-4.png",
      title:
        "墨爾本市區導覽｜壁畫巷＋隱藏咖啡廳之旅，體驗本地咖啡文化、隱藏小巷拍照",
      tags: ["專業導覽", "3 天前可免費取消"],
      star: "4.2",
      comments: "333",
      info: "500+ 個已訂購",
      countPrice: 1280,
      price: 2480,
    },
  ];
  const [prePurchase, setPrePurchase] = useState(prePurchaseList[0].id);
  return (
    <main>
      <section className="min-h-[480px] bg-[url(/images/index/hero-bg.png)] bg-cover bg-center bg-no-repeat pt-12 lg:pt-[300px] lg:pb-[474px]">
        <div className="container">
          <div className="lg:ms-[110px] lg:max-w-[880px]">
            <p className="text-title text-primary-100 bg-primary-10 lg:text-h6 mb-3 w-fit rounded-2xl p-2 lg:mb-7 lg:p-4">
              ZOBAA 旅行推薦平台
            </p>
            <div className="text-h3 text-primary-100 lg:text-display mb-2 flex flex-col lg:mb-6 lg:flex-row">
              <h1>用旅行，</h1>
              <h1>收藏世界的樣子</h1>
            </div>
            <h3 className="text-subtitle text-primary-80 lg:text-h6 mb-6 lg:mb-10">
              ZOBAA
              整合熱門景點推薦、即時優惠、獨家行程，從比價到訂購，一次完成你的完美出遊計畫。
            </h3>
            <div className="lg:pr-40">
              <div className="relative w-full">
                <SVGCoolorComponent
                  color={"neutral-60"}
                  url={"./icons/ic_Search.svg"}
                  size={6}
                  otherClass="absolute top-1/2 left-2 -translate-y-1/2"
                />
                <input
                  type="text"
                  className="input-field w-full py-5 ps-10 pe-[151px]"
                  placeholder="搜尋景點、地點或城市"
                />
                <button className="btn btn-sm btn-primary lg:text-title absolute top-2 right-2">
                  開始探索旅程
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 你的專屬推薦 */}
      <section className="bg-[#221F1E] py-10 lg:py-[120px]">
        <div className="container">
          <div className="mb-10 items-center justify-between text-white lg:mb-20 lg:flex">
            <h2 className="text-h3 lg:text-display mb-6">
              你的
              <br />
              專屬推薦
            </h2>
            <div className="text-subtitle">
              <p className="lg:text-h6 mb-1">
                來看我們的精選推薦行程，滿意度高達 99.2%
              </p>
              <p className="lg:text-h6 mb-3">給自己一個難忘的旅遊行程吧！</p>
              <button className="lg:text-title flex items-center text-white">
                查看全部行程
                <SVGCoolorComponent
                  color="white"
                  url="./icons/ic_ArrowRight.svg"
                  size="4"
                  otherClass="ms-2"
                />
              </button>
            </div>
          </div>
          {/* 預定行程卡片區 */}
          <div className="-mx-3">
            <div className="scrollbar-hide group/cards flex gap-4 overflow-scroll px-3">
              {prePurchaseList.map((item, index) => {
                return (
                  <PrePurchaseCard
                    key={item.id}
                    index={index}
                    imageUrl={item.imageUrl}
                    context={item.context}
                    title={item.title}
                  />
                );
              })}
            </div>
            <div className="mt-10 flex justify-center gap-1 lg:hidden">
              {prePurchaseList.map((item) => {
                return (
                  <span
                    className={`${item.id == prePurchase ? "bg-primary-40 h-2 w-6 rounded-[100px]" : "bg-neutral-40 size-2 rounded-full"}`}
                  ></span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* 踏上旅程的第一站 */}
      <section className="relative pt-10 pb-12 lg:py-[120px]">
        <div className="absolute top-[120px] -z-10 hidden lg:block">
          <img src="./images/index/deco-bg.svg" alt="bg" />
        </div>
        <div className="absolute bottom-60 left-20 -z-10 hidden lg:block">
          <img src="./images/index/deco-text.svg" alt="deco text" />
        </div>
        <div className="container items-center justify-between lg:flex">
          <div className="mb-10 lg:order-2">
            <h2 className="text-h3 text-primary-100 lg:text-display mb-6">
              ZOBAA!
              <br />
              踏上旅程的
              <br />
              第一站
            </h2>
            <p className="text-primary-60 text-subtitle lg:text-h6">
              探索最熱門的旅遊主題，
              <br />
              從旅人必備攻略到獨家優惠，
              <br />
              全都為你精挑細選。
            </p>
          </div>
          <div className="lg:order-1">
            <div className="gap-6 lg:mb-5 lg:flex lg:pr-20">
              <div className="border-neutral-40 mb-4 overflow-hidden rounded-2xl border lg:mb-0 lg:max-w-[306px]">
                <div>
                  <img src="./images/index/intro-1.png" alt="card" />
                </div>
                <div className="p-6">
                  <h4 className="text-h6 mb-2">ZOBAA 專屬推薦行程</h4>
                  <p className="text-body text-neutral-80">
                    嚴選深度行程，豐富旅行靈感
                  </p>
                </div>
              </div>
              <div className="border-neutral-40 mb-4 overflow-hidden rounded-2xl border lg:mb-0 lg:max-w-[306px]">
                <div>
                  <img src="./images/index/intro-2.png" alt="card" />
                </div>
                <div className="p-6">
                  <h4 className="text-h6 mb-2">旅人攻略集合</h4>
                  <p className="text-body text-neutral-80">
                    景點、交通、私房景點一次掌握
                  </p>
                </div>
              </div>
            </div>
            <div className="gap-6 lg:flex lg:pl-20">
              <div className="border-neutral-40 mb-4 overflow-hidden rounded-2xl border lg:mb-0 lg:max-w-[306px]">
                <div>
                  <img src="./images/index/intro-3.png" alt="card" />
                </div>
                <div className="p-6">
                  <h4 className="text-h6 mb-2">優惠機票、酒店</h4>
                  <p className="text-body text-neutral-80">
                    即時比價，聰明出發不踩雷
                  </p>
                </div>
              </div>
              <div className="border-neutral-40 overflow-hidden rounded-2xl border lg:max-w-[306px]">
                <div>
                  <img src="./images/index/intro-4.png" alt="card" />
                </div>
                <div className="p-6">
                  <h4 className="text-h6 mb-2">銀行專屬優惠</h4>
                  <p className="text-body text-neutral-80">
                    使用指定卡別享受獨家旅遊好康
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 裝飾 */}
      <div className="clip-triangnle bg-primary-10 h-10 lg:h-20"></div>
      {/* 靈感地圖 */}
      <section className="bg-primary-10 pt-10 pb-10 lg:py-[120px]">
        <div className="container">
          <div className="justify-between lg:flex lg:items-center">
            <div className="mb-6">
              <div className="relative mb-2 w-fit">
                <h2 className="text-h3 lg:text-display text-primary-100 w-fit">
                  今年旅行的
                </h2>
                <div className="absolute -top-12 -right-[100px] w-[130px]">
                  <img
                    src="./images//index/deco-text-1.svg"
                    alt="deco-text-1"
                    className="w-full"
                  />
                </div>
              </div>
              <h2 className="text-h3 text-primary-100 lg:text-display">
                靈感地圖
              </h2>
              <div className="-mx-3 mt-6">
                <div className="scrollbar-hide flex gap-2 overflow-x-scroll px-3">
                  <button className="btn btn-sm btn-primary shrink-0 py-2">
                    全部
                  </button>
                  <button className="btn btn-sm btn-secondary shrink-0 border-0 py-2">
                    亞洲
                  </button>
                  <button className="btn btn-sm btn-secondary shrink-0 border-0 py-2">
                    歐洲
                  </button>
                  <button className="btn btn-sm btn-secondary shrink-0 border-0 py-2">
                    美洲
                  </button>
                  <button className="btn btn-sm btn-secondary shrink-0 border-0 py-2">
                    大洋洲
                  </button>
                  <button className="btn btn-sm btn-secondary shrink-0 border-0 py-2">
                    非洲
                  </button>
                </div>
              </div>
            </div>
            <div className="text-primary-100 text-subtitle lg:text-h6 text-end">
              <p>來自旅人搜尋、收藏與討論最多的目的地排行榜，</p>
              <p>一場風格與故事感兼具的靈感旅行，就從這裡開始。</p>

              <div className="mt-6 hidden justify-end gap-2 lg:flex">
                <button className="btn-default btn-secondary group border-0 px-4">
                  <SVGCoolorComponent
                    color={"black"}
                    url={"./icons/ic_ArrowLeft.svg"}
                    size={6}
                    hoverColor="white"
                  />
                </button>
                <button className="btn-default btn-secondary group border-0 px-4">
                  <SVGCoolorComponent
                    color={"black"}
                    url={"./icons/ic_ArrowRight.svg"}
                    size={6}
                  />
                </button>
              </div>
            </div>
          </div>
          {/* Inspiration map */}
          <div className="-mx-3 lg:-mx-[calc((100vw-100%)/2)]">
            <div className="scrollbar-hide flex gap-4 overflow-x-scroll px-3 lg:px-[calc((100%-1296px)/2)]">
              {inspirationList.map((item, index) => {
                return (
                  <InspirationCard
                    key={item.id}
                    index={index}
                    image={item.image}
                    suggest={item.suggest}
                    context={item.context}
                    title={item.title}
                    btnContext={item.btnContext}
                    tags={item.tags}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-1 lg:hidden">
            {prePurchaseList.map((item) => {
              return (
                <span
                  className={`${item.id == prePurchase ? "bg-primary-100 h-2 w-6 rounded-[100px]" : "bg-neutral-0 size-2 rounded-full"}`}
                ></span>
              );
            })}
          </div>
        </div>
      </section>
      {/* 裝飾 */}
      <div className="clip-triangnle bg-primary-10 h-10 rotate-180 lg:h-20"></div>
      {/* 行程參考 */}
      <section className="py-10 lg:py-[120px]">
        <div className="container">
          <div className="relative mb-10 lg:mb-20">
            <div className="absolute -top-5 -left-2 -z-10 size-[52px] lg:-top-12 lg:-left-12 lg:size-[120px]">
              <img src="./images/index/bg-deco.svg" alt="bg" />
            </div>
            <h2 className="text-primary-100 text-h3 lg:text-display mb-2">
              搜尋墨爾本嗎？
            </h2>
            <h2 className="text-primary-100 text-h3 lg:text-display">
              來點行程參考！
            </h2>
          </div>
          {/* journey */}
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
              {journeyList.map((item, index) => {
                return (
                  <JourneyCard
                    key={index}
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
      {/* marquee */}
      <section className="overflow-hidden">
        <div className="animate-marquee flex gap-2">
          <p className="text-primary-10 text-[32px]/[1.2] font-bold text-nowrap backdrop-blur-md md:text-[130px]/[1.2]">
            # ZOBAA
          </p>
          <p className="text-primary-10 text-[32px]/[1.2] font-bold text-nowrap backdrop-blur-md md:text-[130px]/[1.2]">
            # WHERETOGO
          </p>
          <p className="text-primary-10 text-[32px]/[1.2] font-bold text-nowrap backdrop-blur-md md:text-[130px]/[1.2]">
            # TODAY
          </p>
        </div>
      </section>
      {/* 把旅行變成生活的養分 */}
      <section className="bg-primary-40 relative -z-0 overflow-hidden py-10">
        <div className="absolute -top-[360px] -left-[240px] -z-10">
          <img src="./images/index/bg-down.svg" alt="bg" />
        </div>
        <div className="absolute bottom-[295px] -z-10">
          <img src="./images/index/bg-line.svg" alt="bg" />
        </div>
        <div className="absolute right-10 -bottom-[420px] -z-10">
          <img src="./images/index/bg-down.svg" alt="bg" />
        </div>
        <div className="container">
          <div className="mb-2 md:mb-6">
            <img
              src="./images//index/card-sm.png"
              alt="card"
              className="object-center md:hidden"
            />
            <img
              src="./images//index/card.png"
              alt="card"
              className="hidden object-center md:block"
            />
          </div>
          <div className="lg:grid-rows-auto grid rounded-3xl bg-[#F3EEEC80] p-6 backdrop-blur-sm md:p-8 lg:grid-cols-2">
            <div>
              <h3 className="text-primary-100 text-h5 md:text-h1 mb-4 md:mb-6">
                為什麼選擇 ZOBAA ?
              </h3>
              <p className="text-body2 md:text-body text-neutral-80">
                不只是帶你抵達目的地，更在每一次出發前，替你預想所有細節。
              </p>
              <p className="text-body2 md:text-body text-neutral-80 mb-6">
                ZOBΛA 希望你能放心探索世界，把記憶留給旅程本身。
              </p>
            </div>
            <div className="mb-6 flex flex-col gap-4 md:mb-0 lg:row-span-3 lg:flex-row">
              <div className="bg-neutral-0 rounded-2xl border border-[#E9E9E9] p-6 md:w-full md:py-[72px] md:pl-8">
                <p className="text-h3 text-primary-100 mb-2 flex items-start gap-2">
                  8 年<small className="size-4 text-base/[1.2]">+</small>
                </p>
                <p className="text-title text-primary-80">旅遊企劃經驗</p>
              </div>
              <div className="bg-neutral-0 rounded-2xl border border-[#E9E9E9] p-6 md:w-full md:py-[72px] md:pl-8">
                <p className="text-h3 text-primary-100 mb-2 flex items-start gap-2">
                  30,000<small className="size-4 text-base/[1.2]">+</small>
                </p>
                <p className="text-title text-primary-80">旅人五星好評</p>
              </div>
            </div>
            <button className="btn btn-default btn-primary flex h-fit w-full justify-between rounded-[100px] bg-black px-5 lg:w-fit lg:gap-4">
              立即探索我們的精心旅程
              <div className="rounded-[100px] bg-white p-1">
                <SVGCoolorComponent
                  url="./icons/ic_ArrowRight.svg"
                  color="black"
                  size="6"
                />
              </div>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
