import { SVGCoolorComponent } from "../SVGColorComponent";

export function GuideCard({ image, tags, title, context }) {
  return (
    <div className="items-center gap-8 rounded-4xl bg-white p-4 lg:flex lg:p-8">
      <div className="mb-4 h-[232px] overflow-hidden rounded-2xl lg:mb-0 lg:min-w-[480px]">
        <img src={image} alt="guide" className="h-full w-full object-cover" />
      </div>
      <div>
        <div className="mb-6 flex gap-2">
          {tags.map((item, index) => {
            return (
              <span
                className="bg-primary-10 text-subtitle rounded-lg px-4 py-2"
                key={index}
              >
                #{item}
              </span>
            );
          })}
        </div>
        <div className="mb-10">
          <h4 className="text-h4 lg:text-h2 mb-2">{title}</h4>
          <p className="text-body2 text-neutral-80 lg:text-body">{context}</p>
        </div>
        <button className="text-primary-100 text-title flex w-full items-center gap-2 lg:justify-end">
          查看文章
          <SVGCoolorComponent
            color={"black"}
            url={"./icons/ic_ArrowRight.svg"}
            size={6}
          />
        </button>
      </div>
    </div>
  );
}
