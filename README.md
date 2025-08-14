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
