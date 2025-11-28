// Chỉ dừng khi hover đúng vào từng ảnh
document.querySelectorAll(".hero__item").forEach((item) => {
  // Khi chuột vào ảnh
  item.addEventListener("mouseenter", () => {
    const slider = item.closest(".hero__slider");
    if (slider) slider.style.animationPlayState = "paused";
  });

  // Khi chuột rời khỏi ảnh
  item.addEventListener("mouseleave", () => {
    const slider = item.closest(".hero__slider");
    if (slider) slider.style.animationPlayState = "running";
  });

  // Hỗ trợ touch trên điện thoại (chạm vào ảnh mới dừng)
  item.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const slider = item.closest(".hero__slider");
    if (slider) slider.style.animationPlayState = "paused";
  });

  item.addEventListener("touchend", () => {
    const slider = item.closest(".hero__slider");
    if (slider) slider.style.animationPlayState = "running";
  });
});
