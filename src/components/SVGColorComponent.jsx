/**
 * @url icon 位置
 * @color 顏色，以 tailwindcss 色彩為主，如 bg-alert-10 => color='alert-10'
 * @size 大小，根據 tailwindcss 的 utility 名稱，如 16px => size-4 => size='4'
 * @otherClass 其他樣式
 */
export function SVGCoolorComponent({ url, color, size = 6, otherClass = "" }) {
  const hoverColor = color != "white" ? "group-hover:bg-white" : "";
  return (
    <div
      className={`size-${size} bg-${color} mask-alpha mask-cover ${hoverColor} ${otherClass}`}
      style={{ maskImage: `url(${url})` }}
    ></div>
  );
}
