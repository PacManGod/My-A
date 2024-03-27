const REF_INICIO = "./pages/Inicio.html";

function redirect(num) {
  if (num == 1) {
    window.location.href = REF_INICIO;
  } else if (num == 2) {
    window.location.href = "../../pages/conocerte.html";
  } else if (num == 3) {
    window.location.href = "../../pages/amarte.html";
  }
}
