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

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-effect");
  const text = textElement.textContent.trim();
  textElement.textContent = ""; // Xóa nội dung ban đầu

  let i = 0;
  const speed = 40; // Tốc độ gõ (ms)

  function typeWriter() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // Khi gõ xong thì tắt viền con trỏ nếu muốn
      textElement.style.borderRight = "3px solid transparent";
    }
  }

  // Bắt đầu gõ sau 500ms để trang load xong
  setTimeout(typeWriter, 500);
});
