(function () {
  const form = document.querySelector("#form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const mensaje = document.querySelector("#mensaje");
    const feedback = document.querySelector(".feedback");
    const mensajecontent = document.querySelector(".mensajecontent");

    if (mensaje.value === "") {
      feedback.classList.add('show');
      setTimeout(function () {
        feedback.classList.remove('show');
      }, 2000);
    } else {
      mensajecontent.textContent = mensaje.value;
      mensaje.value = "";
    }
  });
})();
