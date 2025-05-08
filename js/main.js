function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "luffy" && password === "skyblue") {
    window.location.href = "./pages/main.html";
  } else {
    alert("404Notfound");
  }
}
