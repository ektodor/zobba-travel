import { SVGCoolorComponent } from "../SVGColorComponent";
import { NavLink } from "react-router";
export function GuideCard({ image, tags, title, context }) {
  return (
    <div className="group/guide items-center gap-8 rounded-4xl bg-white p-4 lg:flex lg:p-8">
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
          <h4 className="text-h4 lg:text-h2 group-hover/guide:text-primary-100 mb-2 transition-all duration-300">
            {title}
          </h4>
          <p className="text-body2 text-neutral-80 lg:text-body group-hover/guide:text-primary-60 transition-all duration-300">
            {context}
          </p>
        </div>
        <NavLink
          to={"/product"}
          className="text-primary-100 text-title flex w-fit items-center gap-2 rounded-2xl px-4 lg:ms-auto lg:justify-end"
        >
          查看文章
          <SVGCoolorComponent
            color={"black"}
            url={"./icons/ic_ArrowRight.svg"}
            size={6}
          />
        </NavLink>
      </div>
    </div>
  );
}
