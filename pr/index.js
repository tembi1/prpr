function fillRepeater() {
    const div = document.getElementById("repeater");
    const word = "· SOCIAL MEDIA BRANDING · BRANDING · LOGO DESIGN ";
    let text = "";
    div.textContent = ""; // сбрасываем
  
    while (div.scrollWidth <= div.clientWidth * 2) {
      text += word;
      div.textContent = text;
    }
  }
  
  window.addEventListener("resize", fillRepeater);
  fillRepeater(); // запуск при загрузке