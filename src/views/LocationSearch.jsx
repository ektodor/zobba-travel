import { NavLink } from "react-router";

export function LocationSearch() {
  return (
    <main className="p-5">
      LocationSearch
      <input type="text" className="input-field" placeholder="text" />
      <button className="btn-default btn-primary">
        <img src="/icons/ic_VISA.svg" alt="" />
        test
      </button>
      <button className="btn-sm btn-secondary">test2</button>
      <DropdownComponent title={"Test"} list={[]} />
      <br />
      <div className="checkbox">
        <input
          type="checkbox"
          name=""
          id="test"
          className="checkbox-input peer"
        />
        <svg
          fill="#000000"
          viewBox="0 0 24 24"
          id="check"
          data-name="Line Color"
          xmlns="http://www.w3.org/2000/svg"
          className="checkbox-icon peer-checked:visible"
        >
          <polyline
            id="primary"
            points="5 12 10 17 19 8"
            style={{
              fill: "none",
              stroke: "white",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          />
        </svg>
      </div>
      <select className="dropdown">
        <option value="123">123</option>
      </select>
    </main>
  );
}
