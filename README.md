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

## Container 使用方法

**v4 版本要使用 `@utilites` 自定義 container 配置，雖然 v4 文件沒有 container，但是其實還可以用。所以可以不用特別設定 `@variant sm{...}`**

### 客製化 container

```js
// v3
// tailwind.config.js

module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
};
```

```css
/* v4 */
@utility container {
  margin-inline: auto;
  padding-inline: 1rem;

  @variant sm {
    padding-inline: 2rem;
  }

  @variant lg {
    padding-inline: 4rem;
  }

  @variant xl {
    padding-inline: 5rem;
  }
}
```

### 模擬 bootstrap 斷點

```css

@theme{
...
  /* 576px */
  --breakpoint-sm: 36rem;
  /* 768px */
  --breakpoint-md: 48rem;
  /* 992px */
  --breakpoint-lg: 62rem;
  /* 1200px */
  --breakpoint-xl: 75rem;
  /* 1400px */
  --breakpoint-2xl: 87.5rem;
}

@utility container {
  margin-inline: auto;
  padding-inline: 0.75rem;
  @variant sm {
    /* 540px */
    max-width: 33.75rem;
  }
  @variant md {
    /* 720px */
    max-width: 45rem;
  }
  @variant lg {
    /* 960px */
    max-width: 60rem;
  }
  @variant xl {
    /* 1140px */
    max-width: 71.25rem;
  }
  @variant 2xl {
    /* 1320px */s
    max-width: 82.5rem;
  }
}
```

### container (傳統容器)

- 用途： 設定最大寬度和置中
- 響應： 基於視窗寬度 (viewport)
- 斷點： 螢幕大小斷點
- 範例： container mx-auto

### @container (容器查詢)

- 用途： 基於父容器大小的響應式設計
- 響應： 基於容器寬度
- 斷點： 容器大小斷點
- 範例： @container @md:flex-row

### 參考資料

- [Tailwindcss v4 更新手冊](https://tailwindcss.com/docs/upgrade-guide#container-configuration)
- [Tailwindcss v3 container](https://v3.tailwindcss.com/docs/container)
- [Bootstrap 斷點](https://getbootstrap.com/docs/5.3/layout/containers/)
- [What are Container Queries and how to use them in Tailwind CSS](https://www.youtube.com/watch?v=5j0WNclnsPk)

## 客製化 offcanvas

- 需要offcanvas、背景遮罩、開關
- 背景遮罩
  - `inset-0`：表示 `top`、`bottom`、`left`、`right` 都為 0
  - `z-49`：需要比 offcanvas 低
  - `fixed`：用瀏覽器視窗定位整個螢幕
  - 使用 `useEffect` 添加 `overflow-hidden` 讓整個頁面無法滑動
- offcanvas
  - 使用 `translate-x-full` 將視窗移到視窗外面，當 offcanvas 打開時使用 `translate-x-0` 出現
  - `z-50`：需要比背景遮罩高
- 如果有 `nav` 可以使用 `onclick` 呼叫 `setIsOffcanvasOpen`

```jsx
export function OffcanvasComponent({ isOffcanvasOpen, setIsOffcanvasOpen }) {
  // 讓整個頁面無法滑動
  useEffect(() => {
    if (isOffcanvasOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOffcanvasOpen]);
  return (
    <>
      {/* 背景遮罩 */}
      {isOffcanvasOpen && (
        <div
          className="fixed inset-0 z-49 bg-black opacity-40"
          onClick={() => setIsOffcanvasOpen(false)}
        />
      )}

      {/* offcanvas */}
      <div
        className={`${isOffcanvasOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 z-50 h-screen w-[327px] transform bg-white p-6 transition-transform duration-300 ease-in-out`}
      >
        {/* 內容 */}
      </div>
    </>
  );
}
```

## 變更 SVG 顏色

- 利用 mask 變更 svg 顏色
- `mask-alpha`
- `mask-cover`
- `mask-[url(...)]`：ICON 路徑
- `bg-[color]`：SVG 要的顏色

```jsx
/**
 * @url icon 位置
 * @color 顏色，以 tailwindcss 色彩為主，如 bg-alert-10 => color='alert-10'
 * @size 大小，根據 tailwindcss 的 utility 名稱，如 16px => size-4 => size='4'
 * @otherClass 其他樣式
 */
export function SVGCoolorComponent({ url, color, size = 6, otherClass }) {
  return (
    <div
      className={`size-${size} bg-${color} mask-[url(${url})] mask-alpha mask-cover ${otherClass}`}
    ></div>
  );
}
```

### 參考資料

- [mask-mode](https://css-tricks.com/almanac/properties/m/mask/mask-mode/)

## marquee

```css
@theme {
  --animate-marquee: marquee 10s linear infinite;
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-150%);
    }
  }
}
```

```jsx
<section className="overflow-hidden">
  <div className="animate-marquee flex gap-2">
    <p className="text-primary-10 text-[32px]/[1.2] font-bold text-nowrap backdrop-blur-md">
      # ZOBAA
    </p>
    <p className="text-primary-10 text-[32px]/[1.2] font-bold text-nowrap backdrop-blur-md">
      # WHERETOGO
    </p>
    <p className="text-primary-10 text-[32px]/[1.2] font-bold text-nowrap backdrop-blur-md">
      # TODAY
    </p>
  </div>
</section>
```

## 圖片路徑問題（圖片位置在 public/...）

- 在本機測試都使用 `/images/..` 都正常，但是部署到 gh-page 會有問題
- Tailwindcss 使用 `bg-[url(/images/index/hero-bg.png)]`
- img 使用 `<img src="./icons/ic_VISA.svg" alt="" />`

## 踩坑紀錄

### tailwindcss 圖片無法使用參數傳遞到 Component

```jsx

<div className={`mask-[url(${url})]`}>❎</div>

<div className="" style={{ maskImage: `url(${url})` }}>✅</div>
```

```jsx

<div className={`bg-[url(${imageUrl})]`} >❎</div>

<div className='' style={{ backgroundImage: `url(${imageUrl})` }}>✅</div>

```
