const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
