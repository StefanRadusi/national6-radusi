export function setAuthentication() {
  if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
    window.location = "/login.html";
  }

  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    window.location = "/";
  });
}
