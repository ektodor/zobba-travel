import { SVGCoolorComponent } from "./SVGColorComponent";

export function SearchComponent({ searchState, setSearchState }) {
  return (
    <div className={`${searchState ? "relative w-full" : ""} lg:min-w-[400px]`}>
      <button
        className={`${
          searchState
            ? "pointer-events-none absolute top-1/2 left-3 w-full -translate-y-1/2 transform lg:top-2.5"
            : "p-2 lg:top-1/2 lg:-translate-y-1/2"
        } transition-all duration-300 ease-in-out lg:absolute`}
        onClick={() => setSearchState(true)}
        disabled={searchState}
      >
        <SVGCoolorComponent
          color={"neutral-60"}
          url={"./icons/ic_Search.svg"}
          size={6}
        />
      </button>
      <input
        type="text"
        name="search"
        id="search"
        className={`input-field w-full py-2 ps-10 pe-3 lg:py-2.5 ${searchState ? "block" : "hidden"} lg:block`}
        placeholder="搜尋景點、地點或城市"
      />
    </div>
  );
}
