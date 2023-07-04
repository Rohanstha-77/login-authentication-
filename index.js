function login() {
    // Get the input values
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
  
    // Perform basic validation
    if (id === "" || password === "") {
      alert("Please enter both ID and password.");
      return;
    }
  
    // Perform login authentication
    if (id === "admin" && password === "22061003") {
    //   alert("Login successful!");
      // You can redirect to another page or perform additional actions here
      window.location.href="template.html"
    } else {
      alert("Invalid ID or password. Please try again.");
    }
  }
  