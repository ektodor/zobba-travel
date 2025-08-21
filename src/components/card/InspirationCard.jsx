import { SVGCoolorComponent } from "@/components/SVGColorComponent";
export function InspirationCard({
  index,
  image,
  tags,
  title,
  context,
  suggest,
  btnContext,
}) {
  return (
    <div className="shrink-0 pt-10 lg:pt-20">
      <div className="relative max-w-[280px] rounded-3xl bg-white p-4 lg:flex lg:w-fit lg:max-w-[746px] lg:gap-8 lg:pr-8">
        <div className="mb-2 overflow-hidden rounded-2xl lg:mb-0">
          <img
            src={image}
            alt="map"
            className="h-full max-h-[200px] w-full object-cover lg:max-h-[412px] lg:min-w-[300px]"
          />
        </div>
        <div>
          <div className="mb-8">
            <div className="mb-2 flex gap-2">
              {tags.map((item) => {
                return (
                  <span className="bg-primary-10 text-subtitle lg:text-title inline-block rounded-lg px-4 py-2">
                    {item}
                  </span>
                );
              })}
            </div>
            <h3 className="text-h3 lg:text-h1 mb-2">{title}</h3>
            <p className="text-body2 lg:text-body">{context}</p>
          </div>
          <div className="mb-8 items-center lg:mb-10 lg:flex">
            <span className="bg-primary-10 text-subtitle lg:text-title mb-2 inline-block rounded-lg p-2 text-nowrap lg:mr-3 lg:mb-0">
              ZOBAA 建議
            </span>
            <p className="text-body2 lg:text-body">{suggest}</p>
          </div>
          <button className="btn btn-default btn-primary flex w-full justify-between rounded-[100px] bg-black px-5">
            {btnContext}
            <div className="rounded-[100px] bg-white p-1">
              <SVGCoolorComponent
                url="/icons/ic_ArrowRight.svg"
                color="black"
                size="6"
              />
            </div>
          </button>
        </div>
        <span className="absolute -top-10 left-4 text-[100px] leading-[1.2] font-normal text-[#DFD2CD] italic lg:-top-[100px] lg:text-[200px]">
          {index + 1}
        </span>
      </div>
    </div>
  );
}
