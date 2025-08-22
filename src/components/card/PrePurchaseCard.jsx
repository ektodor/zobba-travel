import { SVGCoolorComponent } from "../SVGColorComponent";
import { NavLink } from "react-router";
export function PrePurchaseCard({ imageUrl, title, context }) {
  return (
    <div
      className={`group/item relative flex min-h-[400px] min-w-[277px] shrink-0 overflow-hidden rounded-3xl border border-r-0 border-white/20 bg-linear-[180deg,#221F1E_0%,#221F1E_60%] bg-cover bg-center bg-no-repeat text-white transition-all duration-500 ease-in-out lg:min-h-[600px] lg:w-full lg:shrink lg:hover:min-w-[416px]`}
      style={{
        backgroundImage: `linear-gradient(180deg, #221F1E00, #221F1E99),url(${imageUrl})`,
      }}
    >
      {/* 使用定位可以解決 flex hover 時的視差 */}
      <div className="absolute right-6 bottom-6 left-6 lg:right-8 lg:bottom-8 lg:left-8">
        <h4 className="text-h4 lg:text-h2 mb-2">{title}</h4>
        <p className="text-body2 lg:text-body mb-6">{context}</p>
        <NavLink
          to={"location-search"}
          className="btn-default btn-secondary group flex w-full justify-between rounded-[100px] border-0 px-5 group-hover/item:flex lg:hidden lg:py-5"
        >
          訂購行程
          <SVGCoolorComponent
            color="black"
            url="./icons/ic_ArrowRight.svg"
            size="6"
          />
        </NavLink>
      </div>
    </div>
  );
}
