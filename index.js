function login() {
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    if (id === "" || password === "") {
      alert("Please enter both ID and password.");
      return;
    }
    if (id === "admin" && password === "22061003") {
    //   alert("Login successful!");
      window.location.href="template.html" //replace your with templete.html
    } else {
      alert("Invalid ID or password. Please try again.");
    }
  }
  
