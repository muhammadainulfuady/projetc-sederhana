function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "login" && password === "login123") {
    window.location.href = "./pages/main.html";
  } else {
    alert("404 Not Found");
  }
}
