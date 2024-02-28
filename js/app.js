// localStorage.setItem(
//   "token",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
// );

// const deleteItem = () => {
//     localStorage.removeItem("token");
// }

let token = localStorage.getItem("token");

!token ? window.open("./views/login.html", "_self") : window.open("./views/catalog.html", "_self");