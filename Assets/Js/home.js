const REF_INICIO = "./pages/Inicio.html";
const REF_CONOCERTE = "./pages/conocerte.html";
const REF_AMARTE = "./pages/amarte.html";

function redirect(num) {
  if (num == 1) {
    window.location.href = REF_INICIO;
  } else if (num == 2) {
    window.location.href = REF_CONOCERTE;
  } else if (num == 3) {
    window.location.href = REF_AMARTE;
  }
}
