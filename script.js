// '모두 펼치기 / 접기' 토글 버튼
const btn = document.getElementById("toggleAll");

btn.addEventListener("click", () => {
  const detailsList = document.querySelectorAll("details");
  const shouldOpenAll = [...detailsList].some(d => !d.open); // 하나라도 닫혀 있으면 펼치기
  detailsList.forEach(d => (d.open = shouldOpenAll));
  btn.textContent = shouldOpenAll ? "모두 접기" : "모두 펼치기";
});