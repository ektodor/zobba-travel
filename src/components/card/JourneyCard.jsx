import { SVGCoolorComponent } from "@/components/SVGColorComponent";
export function JourneyCard({
  image,
  title,
  tags,
  star,
  comments,
  info,
  countPrice = 0,
  price = 0,
}) {
  return (
    <div
      to={"location-search"}
      className="group relative max-w-[306px] shrink-0"
    >
      <SVGCoolorComponent
        color={"white"}
        size={6}
        url={"./icons/ic_favorite-default.svg"}
        otherClass={"absolute top-4 right-4 z-10"}
      />
      <div className="mb-4 overflow-hidden rounded-[20px]">
        <img
          src={image}
          alt="journey"
          className="transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div>
        <h4 className="text-title group-hover:text-primary-100 mb-2 transition-all duration-300">
          {title}
        </h4>
        <div className="border-neutral-40 border-b pb-4">
          <div className="mb-2 flex gap-2">
            {tags.map((item, index) => {
              return (
                <span
                  key={index}
                  className="text-primary-100 bg-primary-10 rounded-lg px-2 py-1"
                >
                  {item}
                </span>
              );
            })}
          </div>
          <div className="flex items-center">
            <img src="./icons/ic_star.svg" alt="star" />
            <p className="border-neutral-40 text-body2 text-neutral-80 ml-1 border-r pr-3">
              {star}
              <small className="text-body2 text-neutral-60 ml-1">
                ({comments})
              </small>
            </p>
            <p className="text-body2 text-neutral-80 ml-3">{info}</p>
          </div>
        </div>
        <div className="pt-4">
          <h5 className="text-h5 text-primary-100">
            NT$ {countPrice.toLocaleString()}
          </h5>
          <h6 className="text-sm text-[#808080] line-through">
            NT$ {price.toLocaleString()}
          </h6>
        </div>
      </div>
    </div>
  );
}
