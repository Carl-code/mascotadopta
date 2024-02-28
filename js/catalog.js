let token = localStorage.getItem("token");

!token && window.open("../views/login.html", "_self");