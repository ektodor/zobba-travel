# ✈️ ZOBBA 旅遊網站

## 安裝套件

- [tailwindcss](https://tailwindcss.com/docs/installation/using-vite)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [react-router](https://reactrouter.com/start/data/installation)
- [gh-pages](https://www.npmjs.com/package/gh-pages)

```bash
# tailwindcss
npm install tailwindcss @tailwindcss/vite

# prettier-plugin-tailwindcss
npm install -D prettier prettier-plugin-tailwindcss

# react router
npm i react-router

# gh-pages
npm install gh-pages --save-dev
```

## 自定義 checkbox

- peer、peer-checked 直接寫在 jsx ，在 `@apply` 設定會沒反應
- checkbox 和 SVG 的尺寸一致
- relative、absolute - 讓 SVG 覆蓋在 checkbox 上方
  - 使用 top 和 left 值讓 SVG 對齊
- pointer-events-none 防止 SVG 干擾點擊
- appearance-none 移除預設樣式，自定義背景和邊框

```css
.checkbox {
  @apply relative flex w-fit items-center justify-center;
}

.checkbox-input {
  @apply bg-neutral-0 border-neutral-40 size-6 appearance-none rounded-sm border;
  @apply hover:shadow-checkbox;
  @apply checked:bg-primary-100 checked:border-none;
}

.checkbox-icon {
  @apply pointer-events-none invisible absolute top-0 left-0 size-6;
}
```

```jsx
<div className="checkbox">
  <input type="checkbox" name="" id="test" className="checkbox-input peer" />
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
```
